import '@/assets/styles/global.scss'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onstagram",
  description: "Clone of Instagram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
