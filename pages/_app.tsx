import React from "react";
import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store";

import "../styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Head>
            <title>DevGames</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>

          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp;
