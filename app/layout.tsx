import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TikTok Comment Lead Extractor",
  description: "Extract business leads from TikTok comments. Scan videos for buying intent keywords and contact info, then export leads with engagement metrics."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3a77f95e-ac06-4c37-bf5b-d55cb9c63864"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
