import MyContext from "./context/page";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'


export const metadata = {
  title: "Movies",
  description: "Discover Millons of Movies and Tv Shows",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning >
        <MyContext>
        {children}
        </MyContext>
      </body>
    </html>
  );
}
