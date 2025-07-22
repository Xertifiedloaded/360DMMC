import Footer from "@/components/Footer";
import "./globals.css";

import type { AppProps } from 'next/app';
import Header from "@/components/Header";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header/>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;