import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";  
import SessionProvider from "./SessionProvider";
// import LoginPage from "./login/page";
// import HomeSession from "./home-session/page";
// import Home from "./home/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "STEI-KLINIK",
  description: "Welcome to STEI-KLINIK",
};

export default async function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}