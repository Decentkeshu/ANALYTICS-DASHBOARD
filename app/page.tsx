"use client";

import Link from "next/link";
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  // If already signed in, redirect to dashboard
  useEffect(() => {
    if (isSignedIn) router.push("/dashboard");
  }, [isSignedIn, router]);

  return (
    <main className="min-h-screen bg-[#060910] text-slate-200 font-mono overflow-x-hidden">

      {/* Grid background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,159,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,159,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial hero glow */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,255,159,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ── NAVBAR ── */}
      <nav className="relative z-50 sticky top-0 border-b border-white/5 backdrop-blur-md bg-[#060910]/80">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 flex-shrink-0">
              <circle cx="18" cy="18" r="17" stroke="#00ff9f" strokeWidth="1.5" />
              <circle cx="18" cy="18" r="14.5" stroke="#00ff9f" strokeWidth="0.5" opacity="0.3" />
              <path
                d="M9 27V9L18 22L27 9V27"
                stroke="#00ff9f"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <span
              className="text-white text-xl font-extrabold tracking-tight"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              MATRIX
            </span>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8 text-[12px] text-gray-500 tracking-widest uppercase">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#stats"    className="hover:text-white transition-colors">Stats</a>
            <a href="#pricing"  className="hover:text-white transition-colors">Pricing</a>
          </div>

          {/* Auth buttons */}
          <div className="flex items-center gap-3">
            <SignInButton mode="modal">
              <button className="border border-white/10 text-slate-200 text-[12px] px-5 py-2 rounded-lg tracking-wide hover:border-white/30 hover:bg-white/5 transition-all">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="bg-[#00ff9f] text-black font-extrabold text-[12px] px-5 py-2 rounded-lg tracking-widest hover:opacity-90 hover:-translate-y-px transition-all"
                style={{ fontFamily: "Syne, sans-serif" }}>
                Get Started →
              </button>
            </SignUpButton>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#00ff9f]/20 bg-[#00ff9f]/5 text-[#00ff9f] text-[11px] px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9f] flex-shrink-0" />
          Now in Public Beta — Join 12,000+ analysts
        </div>

        {/* Headline */}
        <h1
          className="text-6xl md:text-7xl text-white font-extrabold leading-tight tracking-tight mb-6"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          Your Data.<br />
          <span className="text-[#00ff9f]">Decoded.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-500 text-[15px] max-w-xl mx-auto leading-relaxed mb-10">
          Matrix is the analytics platform that turns raw revenue, sales, orders,
          and user data into decisions — in real time.
        </p>

        {/* Terminal line */}
        <div className="inline-flex items-center gap-2 bg-[#0d1117] border border-white/5 rounded-lg px-5 py-2.5 text-[12px] mb-10">
          <span className="text-[#00ff9f]">$</span>
          <span className="text-slate-400">matrix init --workspace</span>
          <span className="text-white">my-org</span>
          <span className="inline-block w-0.5 h-4 bg-[#00ff9f] animate-pulse align-middle ml-0.5" />
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 mb-20">
          <SignUpButton mode="modal">
            <button
              className="bg-[#00ff9f] text-black font-extrabold text-[13px] px-8 py-3.5 rounded-xl tracking-widest hover:shadow-[0_0_32px_rgba(0,255,159,0.5)] hover:-translate-y-px transition-all"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Start Free — No Card Required
            </button>
          </SignUpButton>
          <button className="border border-white/10 text-slate-200 text-[12px] px-8 py-3.5 rounded-xl tracking-wide hover:border-white/30 hover:bg-white/5 transition-all">
            ▶ Watch Demo
          </button>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative mx-auto max-w-4xl animate-bounce" style={{ animationDuration: "4s" }}>
          <div className="bg-[#0d1117] border border-white/8 rounded-2xl overflow-hidden shadow-2xl">

            {/* Topbar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#111827]">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="flex-1 mx-4">
                <div className="bg-[#060910] border border-white/5 rounded px-3 py-1 text-[10px] text-gray-500 text-center">
                  app.matrix.io/dashboard
                </div>
              </div>
            </div>

            {/* Mockup content */}
            <div className="p-5 bg-[#060910]/60">
              {/* Mini KPI */}
              <div className="grid grid-cols-4 gap-3 mb-4">
                {[
                  { label: "Revenue", value: "$84.2K", change: "▲ 12.4%", up: true },
                  { label: "Sales",   value: "3,842",  change: "▲ 8.1%",  up: true },
                  { label: "Orders",  value: "1,294",  change: "▼ 2.3%",  up: false },
                  { label: "Users",   value: "12.7K",  change: "▲ 19.6%", up: true },
                ].map((kpi) => (
                  <div key={kpi.label} className="bg-[#0d1117] border border-white/5 rounded-lg p-3">
                    <div className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">{kpi.label}</div>
                    <div className="text-white text-lg font-extrabold" style={{ fontFamily: "Syne, sans-serif" }}>
                      {kpi.value}
                    </div>
                    <div className={`text-[9px] mt-0.5 ${kpi.up ? "text-green-400" : "text-red-400"}`}>
                      {kpi.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Fake chart */}
              <div className="bg-[#0d1117] border border-white/5 rounded-lg p-4">
                <div className="flex items-end gap-2 h-20">
                  {[45, 60, 50, 75, 82, 100].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end">
                      <div
                        className="rounded-sm"
                        style={{
                          height: `${h}%`,
                          background: `rgba(0,255,159,${0.3 + i * 0.12})`,
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-2">
                  {["Nov","Dec","Jan","Feb","Mar","Apr"].map((m) => (
                    <div key={m} className="flex-1 text-center text-[8px] text-gray-600">{m}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Glow under mockup */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-[#00ff9f]/10 blur-2xl rounded-full pointer-events-none" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section id="stats" className="relative z-10 border-y border-white/5 bg-[#0d1117]/40 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "12K+",  label: "Active Users" },
            { value: "$2.4B+",label: "Revenue Tracked" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "2ms↓",  label: "Avg Response" },
          ].map((s) => (
            <div key={s.label} className="border border-white/5 rounded-xl p-6 bg-[#0d1117]/50 hover:border-[#00ff9f]/20 hover:-translate-y-1 transition-all">
              <div className="font-extrabold text-4xl text-white mb-1" style={{ fontFamily: "Syne, sans-serif" }}>
                {s.value.replace("+","")}<span className="text-[#00ff9f]">{s.value.includes("+") ? "+" : s.value.includes("%") ? "" : ""}</span>
              </div>
              <div className="text-[11px] text-gray-500 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-sky-500/20 bg-sky-500/5 text-sky-400 text-[11px] px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            Features
          </div>
          <h2 className="font-extrabold text-4xl text-white tracking-tight mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
            Everything you need.<br />
            <span className="text-gray-500">Nothing you don't.</span>
          </h2>
          <p className="text-gray-500 text-[14px] max-w-md mx-auto">
            Built for analysts, operators, and founders who need clarity — not complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: "📊", title: "Real-time Analytics",   color: "bg-[#00ff9f]/10", desc: "Live revenue, sales, and order data refreshed every 30 seconds. Never make decisions on stale numbers." },
            { icon: "👥", title: "User Intelligence",     color: "bg-sky-500/10",   desc: "Track acquisition, retention, and churn. Know exactly who your users are and where they come from." },
            { icon: "📦", title: "Order Management",      color: "bg-orange-500/10",desc: "Full order lifecycle visibility — from placement to fulfillment. Spot bottlenecks instantly." },
            { icon: "🔔", title: "Smart Alerts",          color: "bg-purple-500/10",desc: "Get notified when revenue dips, orders spike, or anomalies appear — before your users notice." },
            { icon: "🌙", title: "Dark Mode First",       color: "bg-[#00ff9f]/10", desc: "Designed for long sessions. Matrix is built dark-first so your eyes stay fresh through every deep-dive." },
            { icon: "🔐", title: "Role-based Access",     color: "bg-sky-500/10",   desc: "Admins, analysts, viewers — granular permissions so the right people see the right data." },
          ].map((f) => (
            <div key={f.title} className="border border-white/5 rounded-xl p-6 bg-[#0d1117]/30 hover:border-[#00ff9f]/20 hover:bg-[#0d1117]/70 transition-all">
              <div className={`w-10 h-10 rounded-lg ${f.color} flex items-center justify-center text-xl mb-4`}>
                {f.icon}
              </div>
              <h3 className="font-bold text-white text-[15px] mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                {f.title}
              </h3>
              <p className="text-gray-500 text-[12px] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="relative z-10 max-w-7xl mx-auto px-6 py-16 pb-28">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 border border-purple-500/20 bg-purple-500/5 text-purple-400 text-[11px] px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            Pricing
          </div>
          <h2 className="font-extrabold text-4xl text-white tracking-tight" style={{ fontFamily: "Syne, sans-serif" }}>
            Simple. Transparent.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">

          {/* Starter */}
          <div className="border border-white/5 rounded-2xl p-6 bg-[#0d1117]/30 hover:border-white/10 transition-all">
            <div className="text-[11px] text-gray-500 uppercase tracking-widest mb-3">Starter</div>
            <div className="font-extrabold text-3xl text-white mb-1" style={{ fontFamily: "Syne, sans-serif" }}>Free</div>
            <div className="text-gray-500 text-[11px] mb-6">Forever. No credit card.</div>
            <ul className="space-y-2 mb-8">
              {["Up to 1K monthly orders","3 team members","7-day data retention"].map(f => (
                <li key={f} className="text-[12px] text-slate-400 flex items-center gap-2">
                  <span className="text-[#00ff9f]">✓</span>{f}
                </li>
              ))}
              <li className="text-[12px] text-gray-600 flex items-center gap-2">
                <span className="text-gray-600">✕</span>No custom reports
              </li>
            </ul>
            <SignUpButton mode="modal">
              <button className="w-full border border-white/10 text-slate-200 text-[12px] py-2.5 rounded-xl tracking-wide hover:border-white/25 hover:bg-white/5 transition-all">
                Get Started
              </button>
            </SignUpButton>
          </div>

          {/* Pro */}
          <div className="border border-[#00ff9f]/30 rounded-2xl p-6 bg-[#00ff9f]/5 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00ff9f] text-black text-[10px] font-extrabold px-4 py-1 rounded-full tracking-widest"
              style={{ fontFamily: "Syne, sans-serif" }}>
              MOST POPULAR
            </div>
            <div className="text-[11px] text-[#00ff9f] uppercase tracking-widest mb-3">Pro</div>
            <div className="font-extrabold text-3xl text-white mb-1" style={{ fontFamily: "Syne, sans-serif" }}>
              $49<span className="text-gray-500 text-base font-normal font-mono">/mo</span>
            </div>
            <div className="text-gray-500 text-[11px] mb-6">Billed monthly.</div>
            <ul className="space-y-2 mb-8">
              {["Unlimited orders","15 team members","1-year data retention","Custom reports & exports"].map(f => (
                <li key={f} className="text-[12px] text-slate-400 flex items-center gap-2">
                  <span className="text-[#00ff9f]">✓</span>{f}
                </li>
              ))}
            </ul>
            <SignUpButton mode="modal">
              <button
                className="w-full bg-[#00ff9f] text-black font-extrabold text-[12px] py-2.5 rounded-xl tracking-widest hover:shadow-[0_0_24px_rgba(0,255,159,0.4)] transition-all"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Start Pro Trial →
              </button>
            </SignUpButton>
          </div>

          {/* Enterprise */}
          <div className="border border-white/5 rounded-2xl p-6 bg-[#0d1117]/30 hover:border-white/10 transition-all">
            <div className="text-[11px] text-gray-500 uppercase tracking-widest mb-3">Enterprise</div>
            <div className="font-extrabold text-3xl text-white mb-1" style={{ fontFamily: "Syne, sans-serif" }}>Custom</div>
            <div className="text-gray-500 text-[11px] mb-6">Talk to our team.</div>
            <ul className="space-y-2 mb-8">
              {["Unlimited everything","SSO & SAML","SLA + dedicated support","On-premise option"].map(f => (
                <li key={f} className="text-[12px] text-slate-400 flex items-center gap-2">
                  <span className="text-[#00ff9f]">✓</span>{f}
                </li>
              ))}
            </ul>
            <button className="w-full border border-white/10 text-slate-200 text-[12px] py-2.5 rounded-xl tracking-wide hover:border-white/25 hover:bg-white/5 transition-all">
              Contact Sales
            </button>
          </div>

        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="relative z-10 border-t border-white/5 bg-[#0d1117]/30 py-20 text-center">
        <h2
          className="font-extrabold text-5xl text-white tracking-tight mb-4"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          Ready to see your data<br />
          <span className="text-[#00ff9f]">clearly?</span>
        </h2>
        <p className="text-gray-500 text-[14px] mb-8">
          Join thousands of teams using Matrix to decode their business.
        </p>
        <SignUpButton mode="modal">
          <button
            className="bg-[#00ff9f] text-black font-extrabold text-[13px] px-10 py-4 rounded-xl tracking-widest hover:shadow-[0_0_32px_rgba(0,255,159,0.5)] hover:-translate-y-px transition-all"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Get Started Free →
          </button>
        </SignUpButton>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6">
            <circle cx="18" cy="18" r="17" stroke="#00ff9f" strokeWidth="1.5" />
            <path d="M9 27V9L18 22L27 9V27" stroke="#00ff9f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span className="font-extrabold text-white text-sm" style={{ fontFamily: "Syne, sans-serif" }}>
            MATRIX
          </span>
        </div>
        <p className="text-gray-600 text-[11px] tracking-widest">© 2026 MATRIX. ALL RIGHTS RESERVED.</p>
      </footer>

    </main>
  );
}
