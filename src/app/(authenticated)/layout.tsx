import Link from "next/link";
import Sidebar from "../../components/sidebar.tsx";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="md:flex">
        <Sidebar />
        <div className="md:pl-[224px] p-6 pt-12 w-screen">{children}</div>
      </body>
    </html>
  );
}
