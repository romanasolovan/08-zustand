import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


const montserrat = Montserrat({
   subsets: [ 'latin' ], 
   weight: [ '400' , '700' ],
   variable: '--font-montserrat' , 
   display: 'swap' ,
})

export const metadata: Metadata = {
  title: "Notehub App",
  description: "Small app with notes",
  openGraph: {
    title: `Notehub App`,
    description: "Smaii app with notes",
    url: ``,
    siteName: "NoteHub",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "og notehub",
      },
    ],
    type: "article",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <TanStackProvider>
        <Header/>
          {children}
          {modal}
            <Footer />
        </TanStackProvider>
      </body>
    </html>
  )
}
