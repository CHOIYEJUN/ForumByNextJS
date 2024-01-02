import { Html, Head, Main, NextScript } from 'next/document'
import RootLayout from "@/pages/layout";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <RootLayout />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
