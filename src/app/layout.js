import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-1",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  weight: "100 900",
});

export const metadata = {
  icons: {
    icon: "/images/logo.png",
  },
  title: "Scholar | Cambodia's Leading Bookshop & Publishing Platform",
  description:
    "Discover Scholar, Cambodia's premier online book marketplace! Authors, publishers, & bookshops sell & distribute books, eBooks, audiobooks, & get ISBNs easily.",
  keywords: [
    "Online book marketplace Cambodia",
    "Cambodian bookshop platform",
    "Authors and publishers selling books",
    "ISBN services Cambodia",
    "eBooks and audiobooks Cambodia",
    "Sell books online Cambodia",
  ],
  openGraph: {
    title: "Scholar | Cambodia's Leading Bookshop & Publishing Platform",
    description:
      "Discover Scholar, Cambodia's premier online book marketplace! Authors, publishers, & bookshops sell & distribute books, eBooks, audiobooks, & get ISBNs easily.",
    url: "https://scholar.com", // replace with the actual Scholar URL
    type: "website",
    images: [
      {
        url: "/images/logo.png", // replace with the actual image URL
        width: 500,
        height: 500,
        alt: "Scholar Cambodia's Leading Bookshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scholar | Cambodia's Leading Bookshop & Publishing Platform",
    description:
      "Discover Scholar, Cambodia's premier online book marketplace! Authors, publishers, & bookshops sell & distribute books, eBooks, audiobooks, & get ISBNs easily.",
    site: "@scholar_com", // replace with actual Twitter handle
    creator: "@scholar_com", // replace with actual Twitter handle
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
