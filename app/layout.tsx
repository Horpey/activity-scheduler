import Sidebar from "@/components/Sidebar";
import { GlobalContextProvider } from "@/context/store";
import "./globals.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Activity Scheduler",
  description: "Schedule activities for your day.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <div>
          <Sidebar />

          <main className="py-10 lg:pl-72">
            <div className="px-4 sm:px-6 lg:px-8">
              <GlobalContextProvider>{children}</GlobalContextProvider>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
