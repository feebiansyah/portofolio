import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Portofolio Ananda Febiansyah",
  description: "Junior Fullstack Web Developer | Laravel & React.js Enthusiast.",
  keywords: [
    "Ananda Febiansyah",
    "Portofolio Web Developer",
    "Fullstack Developer",
    "Laravel",
    "React",
    "Next.js",
  ],
  metadataBase: new URL("https://portofolio-ananda-febiansyah.vercel.app"),
  openGraph: {
    title: "Portofolio Ananda Febiansyah",
    description: "Junior Fullstack Web Developer | Laravel & React.js Enthusiast.",
    url: "https://portofolio-ananda-febiansyah.vercel.app",
    siteName: "Ananda Febiansyah",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Portofolio Ananda Febiansyah",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "P2-TtiYBF1afw7kHSZdfVB2ygD8-B6UuyzQs1ziQB8w", 
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        id="beranda"
        className={`${inter.variable} font-sans antialiased bg-zinc-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
