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
        "--biz-bg": "#0f1115",
        "--biz-bg-soft": "#171a20",
        "--biz-surface": "#16191f",
        "--biz-border": "#2a2f38",
        "--biz-text": "#f3f4f6",
        "--biz-text-muted": "#9ca3af",
        "--biz-chip": "#22262e",
        "--biz-chip-text": "#d1d5db",
      } as React.CSSProperties;
    }

    return {
      "--biz-bg": "#f7f7f5",
      "--biz-bg-soft": "#efefec",
      "--biz-surface": "#ffffff",
      "--biz-border": "#e1e1db",
      "--biz-text": "#161616",
      "--biz-text-muted": "#5f6368",
      "--biz-chip": "#f1f1ee",
      "--biz-chip-text": "#33383f",
    } as React.CSSProperties;
  }, [theme]);

  return (
    <div
      style={{ ...vars, fontFamily: "Satoshi-Variable, 'Geist Sans', sans-serif" }}
      className="min-h-screen bg-[var(--biz-bg)] text-[var(--biz-text)] transition-colors duration-300"
    >
      <header className="sticky top-0 z-20 border-b border-[var(--biz-border)] bg-[var(--biz-bg)]/96 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-8">
          <Link href="/business" className="text-sm font-semibold tracking-[0.2em] text-[var(--biz-text-muted)] uppercase">
            Blog
          </Link>

          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm text-[var(--biz-text-muted)] transition hover:text-[var(--biz-text)]">
              Back Home
            </Link>
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--biz-border)] bg-[var(--biz-bg-soft)] px-3 py-1.5 text-sm text-[var(--biz-text)]"
              aria-label="Toggle light and dark mode"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-8 sm:py-12">{children}</main>
    </div>
  );
}
