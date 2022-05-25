import { NextPage } from "next";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Provider store={store}>{<Component {...pageProps} />}</Provider>;
};

export default App;
