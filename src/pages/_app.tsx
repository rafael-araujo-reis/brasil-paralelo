import { AppProps } from "next/app";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import '../styles/global.scss';

import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  return (
    <NextAuthSessionProvider session={session}>
      <Component {...pageProps} />
    </NextAuthSessionProvider>
  );
}

export default MyApp;
