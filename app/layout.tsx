import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "ABCLU - Our Land, Our Rights, Our Community",
   description:
      "Protecting the rights and interests of Barbudans, Antiguans, and all who care about these islands. Find resources for land rights, civil liberties, and community support.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
         <body className="antialiased">
            <div className="page-transition-wrapper">{children}</div>
         </body>
      </html>
   );
}
