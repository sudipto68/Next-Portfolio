import "../styles/globals.css";
import Layout from "../components/Layout/Layout";

export const metadata = {
  title: "Sudipto Kumar Mitra | Frontend Developer",
  description:
    "Sudipto Kumar Mitra — Frontend Developer specializing in React, Next.js, and modern web technologies. Building responsive, performant web applications.",
  keywords: [
    "Sudipto Kumar Mitra",
    "Frontend Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "JavaScript Developer",
    "Shopify Developer",
    "React Native",
    "Tailwind CSS",
    "Drupal Developer",
    "Portfolio",
  ],
  authors: [{ name: "Sudipto Kumar Mitra" }],
  creator: "Sudipto Kumar Mitra",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    title: "Sudipto Kumar Mitra | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and modern web technologies.",
    siteName: "Sudipto Kumar Mitra Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Sudipto Kumar Mitra | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and modern web technologies.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
