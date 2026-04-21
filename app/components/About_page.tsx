export default function About() {
  return (
    <div className="min-h-screen bg-gray-100  px-8 py-10">
      
     
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-indigo-500" />

     
      <p className="text-indigo-400 text-xs tracking-[0.2em] font-mono uppercase mb-3">
        About
      </p>
      <h1 className="text-3xl font-bold text-slate-100 leading-tight mb-2">
        Empowering Small Businesses <br />
        with Data-Driven Decisions
      </h1>
      <p className="text-slate-400 text-sm mb-6">
        Real-time analytics & reporting — built for businesses like yours.
      </p>
      <div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 rounded mb-8" />

    
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {[
          {
            icon: "📊",
            title: "What We Do",
            desc: "Deliver real-time analytics and clear business reports that turn raw data into actionable insights.",
          },
          {
            icon: "🎯",
            title: "Who We Serve",
            desc: "Small businesses that want enterprise-grade data intelligence — without the enterprise price tag.",
          },
          {
            icon: "⚡",
            title: "Our Mission",
            desc: "Make powerful reporting tools simple, reliable, and accessible for every business owner.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="bg-[#1e2130] border border-[#2e3347] rounded-xl p-5"
          >
            <div className="text-2xl mb-3">{card.icon}</div>
            <h3 className="text-slate-100 font-semibold text-sm mb-1">
              {card.title}
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>

    
      <p className="text-indigo-400 text-xs tracking-[0.2em] font-mono uppercase mb-4">
        Core Values
      </p>
      <div className="space-y-3">
        {[
          { color: "bg-blue-500", text: "Simplicity — Powerful insights in a clean, easy-to-use interface." },
          { color: "bg-indigo-500", text: "Reliability — Accurate, real-time data you can trust for important decisions." },
          { color: "bg-indigo-400", text: "Accessibility — Affordable and scalable for businesses of every size." },
        ].map((val, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className={`w-2 h-2 mt-1 rounded-sm flex-shrink-0 ${val.color}`} />
            <p className="text-slate-400 text-sm">{val.text}</p>
          </div>
        ))}
      </div>

    
      <div className="mt-10 pt-6 border-t border-[#2e3347] flex items-center justify-between">
        <p className="text-slate-500 text-xs">
          © {new Date().getFullYear()} MATRIX. All rights reserved.
        </p>
        <span className="text-xs font-mono text-indigo-400 bg-[#1e2130] border border-[#2e3347] px-3 py-1 rounded-full">
          v1.0.0
        </span>
      </div>
    </div>
  );
}