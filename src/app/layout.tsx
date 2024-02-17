import '@/assets/styles/global.scss'

import type { Metadata } from "next";
import Sidebar from "@/layouts/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Onstagram",
  description: "Clone of Instagram",
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <div className="app">
          <Sidebar />
          <div className="page">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
