import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import React from "react";
import AppLayout from "../components/AppLayout";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }: AppProps) {
  // const router = useRouter();
  // const pathRouter = router.pathname.split("/");
  // const removeLayout = ["admin"].includes(pathRouter[1]);
  // const LayoutComponent = removeLayout ? React.Fragment : AppLayout;
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
