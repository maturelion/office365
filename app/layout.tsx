import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sign in to your account",
  description: "Sign in with your Microsoft account",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
