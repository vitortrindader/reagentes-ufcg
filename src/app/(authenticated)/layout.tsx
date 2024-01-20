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
      <body className="flex">
        <Sidebar />
        <div className="ml-[200px] p-6">{children}</div>
      </body>
    </html>
  );
}
