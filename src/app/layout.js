import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  icons: {
    icon: "/images/favicon.ico",
  },
  title: "Scholar | Cambodia's Leading Bookshop & Publishing Platform",
  description:
    "Discover Scholar, Cambodia's online book shop! Authors, publishers, & bookshops sell & distribute books, eBooks, audiobooks.",
  keywords: [
    "Online book shop Cambodia",
    "Cambodian bookshop platform",
    "Authors and publishers selling books",
    "eBooks and audiobooks Cambodia",
    "Sell books online Cambodia",
  ],
  openGraph: {
    title: "Scholar | Cambodia's Leading Bookshop & Publishing Platform",
    description:
      "Discover Scholar, Cambodia's online book shop! Authors, publishers, & bookshops sell & distribute books, eBooks, audiobooks, & get ISBNs easily.",
    url: "https://books.scholarlibrary.com", // replace with the actual Scholar URL
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
    card: "/images/logo.png",
    title: "Scholar | Cambodia's Leading Bookshop & Publishing Platform",
    description:
      "Discover Scholar, Cambodia's premier online book marketplace! Authors, publishers, & bookshops sell & distribute books, eBooks, audiobooks, & get ISBNs easily.",
    site: "@scholar_com", 
    creator: "@scholar_com", 
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`antialiased`}
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
