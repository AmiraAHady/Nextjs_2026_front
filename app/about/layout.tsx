import Sidemenu from "@/components/sidemenu";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Sidemenu/>
        {children}
        </body>
    </html>
  );
}
