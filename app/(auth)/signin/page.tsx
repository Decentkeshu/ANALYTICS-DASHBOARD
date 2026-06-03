"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createuser, loggedinuser } from "../../services/analyticsservices";


export default function SignInPage() {
  const router = useRouter();
  const [form, setForm] = useState({ user: "", email: "", password: "", cpassword: "" });
  const [isregistered, setisregistered] = useState(false);
  const [errors, setErrors] = useState<{ msg: string }[]>([]);
  const [loginerror, setLoginerror] = useState("");
  const [loginwith, setLoginwith] = useState<"username" | "email">("username");
  const [loading, setLoading] = useState(false);

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const signeduser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const { user, email, password, cpassword } = form;
    const { status, data } = await createuser(user, email, password, cpassword);
    setLoading(false);
    if (status === 422) { setErrors(data.errors); return; }
    if (status === 200) {
      setErrors([]);
      setisregistered(false);
      setForm({ user: "", email: "", password: "", cpassword: "" });
    }
  };

 const loginuser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setLoginerror("");
    try {
        const identifier = loginwith === "username" ? form.user : form.email;
        const { status, data } = await loggedinuser(identifier, form.password);
        setLoading(false);
        if (status === 200 && data._id) {
            localStorage.setItem("userId", data._id);
            localStorage.setItem("userName", data.user);
            localStorage.setItem("userEmail", data.email);
            router.push("/Dashboard");
        } else {
            setLoginerror(data.message || "Invalid credentials. Please try again.");
        }
    } catch (err) {
        setLoading(false);
        setLoginerror("Unable to connect to server. Please try again.");
    }
};

  const inputClass = "w-full px-4 py-3 rounded-xl text-sm text-gray-200 placeholder-gray-700 outline-none transition-all duration-200 focus:border-green-700 border border-gray-800 bg-black";

  return (
    <div className="flex" style={{ background: "#0c0c0c", fontFamily: "'DM Sans', sans-serif", marginTop: "90px" }}>

    
      <div className="hidden lg:flex w-5/12 flex-col justify-between p-12" style={{ background: "#0c0c0c", borderRight: "0.5px solid #1e1e1e" }}>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-green-700 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">AnalyticsPro</span>
        </div>

    
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-white leading-tight tracking-tight">
            Your data,<br />made <span className="text-green-500">clear.</span>
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
            A powerful analytics dashboard to track revenue, users, and growth — all in one place.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Real-time revenue & MRR tracking",
              "User growth and retention insights",
              "Beautiful charts and exportable reports",
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl border" style={{ background: "#161616", borderColor: "#222" }}>
                <div className="w-1.5 h-1.5 rounded-full bg-green-600 flex-shrink-0" />
                <span className="text-sm text-gray-500">{f}</span>
              </div>
            ))}
          </div>
        </div>

   
       
      </div>


      <div className="flex-1 flex items-center justify-center p-8 lg:p-12" style={{ background: "#111" }}>
        <div className="w-full max-w-sm">

      
          <div className="flex rounded-xl p-1 mb-8" style={{ background: "#0c0c0c" }}>
            <button type="button" onClick={() => { setisregistered(false); setErrors([]); setLoginerror(""); }}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${!isregistered ? "bg-green-800 text-white" : "text-gray-600"}`}>
              Log In
            </button>
            <button type="button" onClick={() => { setisregistered(true); setErrors([]); setLoginerror(""); }}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${isregistered ? "bg-green-800 text-white" : "text-gray-600"}`}>
              Sign Up
            </button>
          </div>

          {!isregistered ? (
            <form onSubmit={loginuser} className="flex flex-col gap-5">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight mb-1">Welcome back</h2>
                <p className="text-sm text-gray-600">Sign in to continue to AnalyticsPro</p>
              </div>

           
              <div className="flex gap-2">
                {(["username", "email"] as const).map((method) => (
                  <button key={method} type="button" onClick={() => setLoginwith(method)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 capitalize
                      ${loginwith === method ? "bg-green-950 text-green-400 border-green-800" : "border-gray-800 text-gray-600 hover:text-gray-400"}`}>
                    {method}
                  </button>
                ))}
              </div>

              {loginerror && (
                <div className="px-4 py-3 rounded-xl border" style={{ background: "rgba(220,38,38,0.08)", borderColor: "rgba(220,38,38,0.2)" }}>
                  <p className="text-red-400 text-sm">{loginerror}</p>
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-600 uppercase tracking-widest">
                  {loginwith === "username" ? "Username" : "Email"}
                </label>
                {loginwith === "username"
                  ? <input name="user" type="text" placeholder="johndoe" value={form.user} onChange={handlechange} required className={inputClass} />
                  : <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handlechange} required className={inputClass} />}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-600 uppercase tracking-widest">Password</label>
                <input name="password" type="password" placeholder="••••••••" value={form.password} onChange={handlechange} required className={inputClass} />
              </div>

              <button type="submit" disabled={loading}
                className="w-full py-3 bg-green-800 hover:bg-green-900 disabled:opacity-50 text-white text-sm font-semibold rounded-xl transition-all duration-200 mt-1">
                {loading ? "Signing in..." : "Sign In →"}
              </button>
            </form>

          ) : (
            <form onSubmit={signeduser} className="flex flex-col gap-5">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight mb-1">Create account</h2>
                <p className="text-sm text-gray-600">Get started with AnalyticsPro today</p>
              </div>

              {errors.length > 0 && (
                <div className="px-4 py-3 rounded-xl border" style={{ background: "rgba(220,38,38,0.08)", borderColor: "rgba(220,38,38,0.2)" }}>
                  <ul className="flex flex-col gap-1">
                    {errors.map((err, i) => (
                      <li key={i} className="text-red-400 text-sm flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-red-400 flex-shrink-0" />
                        {err.msg}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {[
                { label: "Username", name: "user", type: "text", placeholder: "johndoe" },
                { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
                { label: "Password", name: "password", type: "password", placeholder: "••••••••" },
                { label: "Confirm Password", name: "cpassword", type: "password", placeholder: "••••••••" },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name} className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-600 uppercase tracking-widest">{label}</label>
                  <input name={name} type={type} placeholder={placeholder}
                    value={form[name as keyof typeof form]} onChange={handlechange} required className={inputClass} />
                </div>
              ))}

              <button type="submit" disabled={loading}
                className="w-full py-3 bg-green-800 hover:bg-green-900 disabled:opacity-50 text-white text-sm font-semibold rounded-xl transition-all duration-200 mt-1">
                {loading ? "Creating account..." : "Create Account →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}