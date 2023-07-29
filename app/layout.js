import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const MenuItems = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
];
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
