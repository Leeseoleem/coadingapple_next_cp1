import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="sticky top-0 w-full z-50 p-6 bg-white/70 backdrop-blur-md space-x-4 text-xl shadow-md">
          <Link href="/">홈</Link>
          <Link href="/list">list</Link>
          <Link href="/cart">cart</Link>
        </div>
        {children}
        <footer className="flex w-full justify-center items-center p-6 bg-black">
          <p className="text-[white]">by seoleem</p>
        </footer>
      </body>
    </html>
  );
}
