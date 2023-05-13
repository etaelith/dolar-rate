import "./globals.css";
import {Instrument_Serif} from "next/font/google";

import frontweb from "./frontweb.png";
const instrumentSerif = Instrument_Serif({subsets: ["latin"], weight: ["400"]});

export const metadata = {
  title: "Dolar Cotizaciones",
  description: "Exchange-rate, Dolar, Peso argentino",
  authors: {
    name: "Etaelith",
    url: "https://github.com/etaelith",
  },
  creator: "Etaelith",
  openGraph: {
    title: "ImagenTitle",
    description: "ImagenDescription",
    images: frontweb,
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={instrumentSerif.className}>
        <main className="flex h-screen items-center sm:items-center sm:justify-center">
          <div
            className="sm:m-auto max-w-screen-md  flex-1 h-full sm:max-h-96 flex flex-col justify-end items-center sm:justify-center"
            id="background-view"
          >
            <div className="pb-8 sm:pb-16 my-auto text-textnumbers text-2xl">
              Exchange Rate Dolar
            </div>
            <div
              className="h-2/3 sm:h-full w-full rounded-t-3xl sm:rounded-3xl bg-white dark:bg-gray-600 p-8 shadow-2xl text-white"
              id="background-card"
            >
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
