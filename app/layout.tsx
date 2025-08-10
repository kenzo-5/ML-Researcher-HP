import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "研究者氏名 | ポートフォリオ",
  description: "Text-to-Motion / VLMを専門とする研究者、〇〇のウェブサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark" style={{ colorScheme: 'dark' }}>
      <body className="font-sans antialiased">
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
