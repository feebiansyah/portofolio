import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Portofolio Ananda Febiansyah",
  description: "Portofolio Ananda Febiansyah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body id="beranda" className={`${inter.variable} font-sans antialiased bg-zinc-900 text-white`}>
        {children}
      </body>
    </html>
  );
}
