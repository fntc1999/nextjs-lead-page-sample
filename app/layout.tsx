import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free website and SEO audit",
  description: "A sample Next.js landing page with a validated lead form, built with the App Router, TypeScript and Tailwind CSS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
