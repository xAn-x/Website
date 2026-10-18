import "./globals.css";
import "@fontsource-variable/newsreader";
import "@fontsource-variable/space-grotesk";
import "@fontsource/ibm-plex-mono/400.css";

export const metadata = {
  title: "Deepanshu Bhatt — Systems Engineer",
  description:
    "Systems Engineer working across GenAI, big data, and event-driven systems. Exploring backend engineering, AWS, Linux, and football analytics.",
  icons: {
    icon: "/images/profile.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
