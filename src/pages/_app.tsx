import "@/styles/global";
import type { AppProps } from "next/app";
import { GlobalStyles, ResetCSS } from "@/styles/global";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
        <Component {...pageProps} />
        <GlobalStyles/>
        <ResetCSS/>
    </>
  );
}

export default MyApp;
