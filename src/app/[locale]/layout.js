import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import { Kantumruy_Pro } from 'next/font/google'
 
const kantumruyPro = Kantumruy_Pro({
  weight: ["100", "200", "300", '400', "500", "600", "700"],
  subsets: ['khmer'],
})


export const metadata = {
  icons: {
    icon: "/images/thnal_logo.png",
  },
  title: "Thnal | Cambodia's Leading Bookshop & Publishing Platform",
  description:
    "Discover Thnal, Cambodia's online book shop! Authors, publishers, & bookshops sell & distribute books, eBooks, audiobooks.",
  keywords: [
    "Online book shop Cambodia",
    "Cambodian bookshop platform",
    "Authors and publishers selling books",
    "eBooks and audiobooks Cambodia",
    "Sell books online Cambodia",
  ],
  openGraph: {
    title: "Thnal | Cambodia's Leading Bookshop & Publishing Platform",
    description:
      "Discover Thnal, Cambodia's online book shop! Authors, publishers, & bookshops sell & distribute books, eBooks, audiobooks, & get ISBNs easily.",
    url: "https://books.Thnallibrary.com", // replace with the actual Thnal URL
    type: "website",
    images: [
      {
        url: "/images/thnal_logo.png", // replace with the actual image URL
        width: 500,
        height: 500,
        alt: "Thnal Cambodia's Leading Bookshop",
      },
    ],
  },
  twitter: {
    card: "/images/thnal_logo.png",
    title: "Thnal | Cambodia's Leading Bookshop & Publishing Platform",
    description:
      "Discover Thnal, Cambodia's premier online book marketplace! Authors, publishers, & bookshops sell & distribute books, eBooks, audiobooks, & get ISBNs easily.",
    site: "@Thnal_com",
    creator: "@Thnal_com",
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    console.log("Available locales:", routing.locales);
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <>
      <html lang={locale} suppressHydrationWarning>
        <body className={`${kantumruyPro.className}`}>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  );
}
