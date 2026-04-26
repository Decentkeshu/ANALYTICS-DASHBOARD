"use client";

import Link from "next/link";
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) router.push("/dashboard");
  }, [isSignedIn, router]);

  return (
    <main className="min-h-screen bg-[#060910] text-slate-200 font-mono overflow-x-hidden  flex-1">

      
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,159,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,159,0.018) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 50% 20%, rgba(0,255,159,0.055) 0%, transparent 70%)",
        }}
      />

    
      <nav className="relative z-50 sticky top-0 border-b border-white/[0.05] backdrop-blur-xl bg-[#060910]/90">
        <div className="max-w-7xl mx-auto px-8 h-[58px] flex items-center justify-between">

        
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 36 36" fill="none" className="w-[30px] h-[30px] flex-shrink-0">
              <circle cx="18" cy="18" r="17" stroke="#00ff9f" strokeWidth="1.5" />
              <circle cx="18" cy="18" r="14.5" stroke="#00ff9f" strokeWidth="0.5" opacity="0.25" />
              <path
                d="M9 27V9L18 22L27 9V27"
                stroke="#00ff9f"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <span
              className="text-white text-[14px] font-extrabold tracking-[0.2em] uppercase"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              MATRIX
            </span>
          </div>

      
          <div className="hidden md:flex items-center gap-10 text-[10px] text-gray-600 tracking-[0.2em] uppercase">
            <a href="#features" className="hover:text-gray-300 transition-colors duration-300">Features</a>
            <a href="#stats"    className="hover:text-gray-300 transition-colors duration-300">Stats</a>
          </div>

     
          <div className="flex items-center gap-2.5">
            <SignInButton mode="modal">
              <button className="border border-white/[0.07] text-gray-500 text-[10px] px-5 py-[7px] rounded-lg tracking-[0.15em] uppercase hover:border-white/15 hover:text-gray-300 transition-all duration-300">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button
                className="bg-[#00ff9f] text-black font-extrabold text-[10px] px-5 py-[7px] rounded-lg tracking-[0.2em] uppercase hover:brightness-105 transition-all duration-200"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Get Started →
              </button>
            </SignUpButton>
          </div>
        </div>
      </nav>

     
      <section className="relative z-10 max-w-7xl mx-auto px-8 pt-36 pb-20 text-center">

        <div className="flex items-center justify-center gap-3 mb-24">
       
        </div>


      </section>

    
      <section id="features" className="relative z-10 max-w-7xl mx-auto px-8 py-28">
        <div className="text-center mb-20">
          <h1 className="inline-flex items-center gap-2 border border-sky-500/[0.12] bg-sky-500/[0.04] text-sky-500 text-[9px] px-4 py-[5px] rounded-full mb-7 tracking-[0.25em] uppercase">
            MATRIX
          </h1>
          <h2
            className="font-extrabold text-[42px] text-white tracking-[-1.2px] mb-5 leading-[1.1]"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Everything you need.<br />
            <span className="text-gray-600">Nothing you don't.</span>
          </h2>
          <p className="text-gray-600 text-[13px] max-w-[380px] mx-auto leading-[1.9] font-sans font-normal tracking-normal">
            Built for analysts, operators, and founders who need clarity — not complexity.
          </p>
        </div>

  
      </section>

    
      <section className="relative z-10 border-t border-white/[0.05] bg-[#080c13]/50 py-28 text-center">
        <h2
          className="font-extrabold text-[54px] text-white tracking-[-1.5px] mb-4 leading-[1.08]"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          Ready to see your data<br />
          <span className="text-[#00ff0d]">clearly?</span>
        </h2>
        <p className="text-gray-600 text-[13px] mb-10 font-sans font-normal leading-[1.9] tracking-normal">
          Join thousands of teams using Matrix to decode their business.
        </p>
        <SignUpButton mode="modal">
          <button
            className="bg-[#00ff1e] text-black font-extrabold text-[10.5px] px-10 py-[13px] rounded-xl tracking-[0.22em] uppercase hover:brightness-105 hover:-translate-y-px transition-all duration-200"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Get Started Free →
          </button>
        </SignUpButton>
      </section>

   
      <footer className="relative z-10 border-t border-white/[0.05] py-9 text-center">
        <div className="flex items-center justify-center gap-2.5 mb-5">
          <svg viewBox="0 0 36 36" fill="none" className="w-[22px] h-[22px]">
            <circle cx="18" cy="18" r="17" stroke="#00ff9f" strokeWidth="1.5" />
            <path d="M9 27V9L18 22L27 9V27" stroke="#00ff9f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span className="font-extrabold text-white text-[12px] tracking-[0.2em] uppercase" style={{ fontFamily: "Syne, sans-serif" }}>
            MATRIX
          </span>
        </div>
        <div className="flex items-center justify-center gap-9 mb-6 text-[9.5px] text-gray-700 tracking-[0.2em] uppercase">
          <Link href="/dashboard" className="hover:text-[#00ff9f] transition-colors duration-300">Dashboard</Link>
          <Link href="/analytics" className="hover:text-[#00ff9f] transition-colors duration-300">Analytics</Link>
          <Link href="/users"     className="hover:text-[#00ff9f] transition-colors duration-300">Users</Link>
          <Link href="/revenue"   className="hover:text-[#00ff9f] transition-colors duration-300">Revenue</Link>
          <Link href="/reports"   className="hover:text-[#00ff9f] transition-colors duration-300">Reports</Link>
          <Link href="/settings"  className="hover:text-[#00ff9f] transition-colors duration-300">Settings</Link>
        </div>
        <p className="text-gray-700 text-[9.5px] tracking-[0.2em] uppercase">© 2026 MATRIX. ALL RIGHTS RESERVED.</p>
      </footer>

    </main>
  );
}
