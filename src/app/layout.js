import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Deepanshu's Portfolio",
  description: "A website showcasing my projects and experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/profile.jpg" />
      <body className>
        <Navbar/>
        <div className="main h-screen m-2 mt-3 text-black">{children}</div>
      </body>
    </html>
  );
}
