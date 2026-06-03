"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const router = useRouter();

  const logout = () => {
    localStorage.clear();
    router.push("/signin");
  };

  return (
    <main className="h-screen w-full bg-[#060910] text-slate-200 font-mono overflow-hidden flex flex-col">

    
      <div className="fixed inset-0 z-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(0,255,159,0.018) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,159,0.018) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }} />
      <div className="fixed inset-0 z-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 65% 45% at 50% 20%, rgba(0,255,159,0.055) 0%, transparent 70%)",
      }} />

     
      

   
      <div className="relative z-10 flex flex-col flex-1 w-full overflow-hidden">

     
        <section className="flex flex-col items-center justify-center text-center flex-1 w-full px-8">
       
          <h1
            className="font-extrabold text-[42px] text-white tracking-[-1.2px] mb-4 leading-[1.1]"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Everything you need.<br />
            <span className="text-gray-600">Nothing you don't.</span>
          </h1>
          <p className="text-gray-600 text-[13px] max-w-[380px] mx-auto leading-[1.9] font-sans font-normal tracking-normal mb-8">
            Built for analysts, operators, and founders who need clarity — not complexity.
          </p>
          <h2
            className="font-extrabold text-[38px] text-white tracking-[-1.5px] mb-3 leading-[1.08]"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Ready to see your data <span className="text-[#00ff0d]">clearly?</span>
          </h2>
          <p className="text-gray-600 text-[13px] font-sans font-normal leading-[1.9] tracking-normal">
            Join thousands of teams using Matrix to decode their business.
          </p>
        </section>

     
        <footer className="relative z-10 border-t border-white/[0.05] py-5 text-center flex-shrink-0 w-full">
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
            <span
              className="font-extrabold text-white text-[12px] tracking-[0.2em] uppercase"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
             AnalyticsPro
            </span>
          </div>
          <div className="flex items-center justify-center gap-9 mb-3 text-[9.5px] text-gray-700 tracking-[0.2em] uppercase">
            <Link href="/Dashboard" className="hover:text-[#00ff9f] transition-colors duration-300">Dashboard</Link>
            <Link href="/Analytics" className="hover:text-[#00ff9f] transition-colors duration-300">Analytics</Link>
            <Link href="/Users"     className="hover:text-[#00ff9f] transition-colors duration-300">Users</Link>
            <Link href="/Revenue"   className="hover:text-[#00ff9f] transition-colors duration-300">Revenue</Link>
            <Link href="/Reports"   className="hover:text-[#00ff9f] transition-colors duration-300">Reports</Link>
            <Link href="/Setting"   className="hover:text-[#00ff9f] transition-colors duration-300">Settings</Link>
          </div>
          <p className="text-gray-700 text-[9.5px] tracking-[0.2em] uppercase">© 2026 AnalyticsPro. ALL RIGHTS RESERVED.</p>
        </footer>

      </div>
    </main>
  );
}