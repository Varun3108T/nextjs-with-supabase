// app/page.tsx
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { HeroWave } from "@/components/head";
import { hasEnvVars } from "@/lib/utils";
import { Suspense } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-[#0a0a0f] text-white">
      {/* Top Navbar Header with Supabase Auth */}
      <header className="w-full flex justify-center border-b border-white/10 h-16 fixed top-0 left-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md">
        <div className="w-full max-w-7xl flex justify-between items-center px-5 text-sm">
          <div className="flex gap-5 items-center font-semibold">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              Next.js Supabase Starter
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {!hasEnvVars ? (
              <EnvVarWarning />
            ) : (
              <Suspense fallback={<div className="h-8 w-20 bg-white/10 animate-pulse rounded-md" />}>
                <AuthButton />
              </Suspense>
            )}
          </div>
        </div>
      </header>

      {/* Hero Interactive Canvas Section */}
      <div className="w-full pt-16">
        <HeroWave />
      </div>
    </main>
  );
}
