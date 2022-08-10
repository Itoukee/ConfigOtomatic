import "../styles/globals.css";
import config from "../stores/config/useConfig";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={config}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
