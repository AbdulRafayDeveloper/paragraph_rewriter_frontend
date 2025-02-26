import localFont from "next/font/local";
import "./globals.css";
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

export const metadata = {
  title: "Free AI Paragraph Rewriter | Improve Your Paragraphs with AI",
  description: "Enjoy our paragraph rewriting tool for free. Improve the quality of your paragraphs and make them easier to read. Pick from six different rewriting modes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
        {/* Add Font Awesome CDN link */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta name="robots" content="noindex"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
