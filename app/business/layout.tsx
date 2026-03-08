import type { Metadata } from "next";
import { BusinessShell } from "@/components/business/BusinessShell";

export const metadata: Metadata = {
  title: "Business Notes",
  description: "Startup and business strategy notes for software builders.",
};

export default function BusinessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BusinessShell>{children}</BusinessShell>;
}
