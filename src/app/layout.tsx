import "@/styles/globals.css";
import "@/styles/lines.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import {
  Open_Sans,
  Birthstone,
  Inter,
  Sofia_Sans_Extra_Condensed,
  Poppins,
  Pathway_Gothic_One,
} from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Ephesus Restaurant Brighton | Authentic Turkish Cuisine",
  description:
    "Ephesus was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality.",
  icons: [{ rel: "icon", url: "/images/logo.png" }],
};

const birthstone = Birthstone({
  subsets: ["latin"],
  variable: "--font-birthstone",
  weight: ["400"],
});

const pathway = Pathway_Gothic_One({
  subsets: ["latin"],
  variable: "--font-pathway",
  weight: ["400"],
});

const sofia_sans = Sofia_Sans_Extra_Condensed({
  subsets: ["latin"],
  variable: "--font-sofia_sans",
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom flex min-h-screen font-inter antialiased",
          open_sans.variable,
          inter.variable,
          poppins.variable,
          birthstone.variable,
          sofia_sans.variable,
          pathway.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
