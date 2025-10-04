import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import '@mantine/core/styles.css';
import "./globals.css";
import FetchFromServerComponent from "./FetchFromServerComponent";
import { defaultMetadata } from "@/utils/metadata";

const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: "Solar Components",
  ...defaultMetadata,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={roboto.className}>
        <FetchFromServerComponent>
          {children}
        </FetchFromServerComponent>
      </body>
    </html>
  );
}
