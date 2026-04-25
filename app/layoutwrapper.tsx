"use client";

import { usePathname } from "next/navigation";
import AppLayout from "./components/AppLayout";
import { NAVIGATION } from "@/components/navigation";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isPublicPage =
    pathname === "/" ||
    pathname.includes("sign-in") ||
    pathname.includes("sign-up");

  if (isPublicPage) {
    return (
      <>
        <NAVIGATION />
        <main className="flex items-center justify-center h-screen">
          {children}
        </main>
      </>
    );
  }

  return <AppLayout>{children}</AppLayout>;
}