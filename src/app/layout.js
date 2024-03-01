import { Sora } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Navbar from "@/components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const sora = Sora({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: "Yummee",
  description: "Food Recipe App by Philddev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={sora.className} suppressHydrationWarning={true}>
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
      </body>
    </html>
  );
}
