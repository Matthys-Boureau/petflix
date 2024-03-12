import type { Metadata } from "next";
import "@/scss/reset.scss";
import "@/scss/styles.scss";
import { PropsWithChildren } from "react";
import style from './layout.module.scss'
import Header from "@/components/Header/Header";
import { AuthContextProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "Petflix",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fr">
      <body>
        <AuthContextProvider>
          <Header />
          <main className={style.container}>{children}</main>
        </AuthContextProvider>
      </body>
    </html>
  );
}
