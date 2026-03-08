"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type BusinessShellProps = {
  children: React.ReactNode;
};

type ThemeMode = "light" | "dark";

const THEME_KEY = "business-theme";

export function BusinessShell({ children }: BusinessShellProps) {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(THEME_KEY);
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
      return;
    }

    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    setTheme(preferredTheme);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const vars = useMemo(() => {
    if (theme === "dark") {
      return {
        "--biz-bg": "#090d1a",
        "--biz-bg-soft": "#11172a",
        "--biz-surface": "rgba(17, 23, 42, 0.72)",
        "--biz-border": "rgba(148, 163, 184, 0.24)",
        "--biz-text": "#e7ecff",
        "--biz-text-muted": "#b7c1df",
        "--biz-chip": "rgba(56, 189, 248, 0.2)",
        "--biz-chip-text": "#99f6e4",
      } as React.CSSProperties;
    }

    return {
      "--biz-bg": "#f6f8fc",
      "--biz-bg-soft": "#edf2ff",
      "--biz-surface": "rgba(255, 255, 255, 0.86)",
      "--biz-border": "rgba(30, 41, 59, 0.16)",
      "--biz-text": "#0f172a",
      "--biz-text-muted": "#334155",
      "--biz-chip": "rgba(37, 99, 235, 0.1)",
      "--biz-chip-text": "#1d4ed8",
    } as React.CSSProperties;
  }, [theme]);

  return (
    <div style={vars} className="min-h-screen bg-[var(--biz-bg)] text-[var(--biz-text)] transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <header className="sticky top-0 z-20 border-b border-[var(--biz-border)] bg-[var(--biz-surface)]/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/business" className="text-sm font-semibold tracking-[0.2em] text-[var(--biz-text-muted)] uppercase">
            Business Notes
          </Link>

          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm text-[var(--biz-text-muted)] transition hover:text-[var(--biz-text)]">
              Back Home
            </Link>
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--biz-border)] bg-[var(--biz-bg-soft)] px-3 py-1.5 text-sm text-[var(--biz-text)]"
              aria-label="Toggle light and dark mode"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">{children}</main>
    </div>
  );
}
