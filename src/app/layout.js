import { Poppins } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Navbar from "@/components/Navbar";
import { ThemeContextProvider } from "./context/ThemeContext";
import ThemeProvider from "./providers/ThemeProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: "Yummee",
  description: "Food Recipe App by Philddev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="main_body">
              <Contact />
              <Navbar />
              <div className="in_body margin-150">
                <div className="wrapper">
                  {children}
                  <Footer />
                </div>
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
