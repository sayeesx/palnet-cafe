import "./globals.css";
import { Header } from "@/components/Header";
import { Providers } from "@/components/Providers";

export const metadata = {
  title: "Planet Cafe Bistro",
  description:
    "Planet Cafe Bistro — taste made to crave. Fresh plates and chef-crafted flavor.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#34392b",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "Planet Cafe",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport = {
  themeColor: "#f3f1e8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#34392b" />
      </head>
      <body className="min-h-screen min-h-[100dvh] bg-offwhite font-sans text-olive antialiased">
        <Providers>
          <div className="flex min-h-[100dvh] min-h-screen w-full max-w-none min-w-0 flex-col px-3 pt-3 sm:px-4 sm:pt-4 md:px-5 md:pt-5">
            <Header />
            <div className="relative flex min-h-0 min-w-0 flex-1 flex-col">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
