// app/layout.js
import { Montserrat } from "next/font/google";
import "./globals.css";
import SessionWrapper from './SessionWrapper';

// Import Montserrat font from Google
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // Define a CSS variable for Montserrat
  weight: ["100", "400", "700"], // Specify the weights you want to use
});

export const metadata = {
  title: "CoupleUp",
  description: "Love each other",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <SessionWrapper>
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
