import store from "@/redux/store/store";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }) {
  let persistor = persistStore(store)
  const [dark, setDark] = useState("");

  useEffect(() => {
    const theme = localStorage.getItem("dark-mode");
    if (dark === "") {
      setDark(Boolean(theme));
    }
    if (!theme) {
      localStorage.setItem("dark-mode", true);
    } else {
      if (theme === "false") {
        setDark(false);
        document.body.classList.remove("dark-mode");

      } else {
        setDark(true);
        document.body.classList.add("dark-mode");
      }
    }
  }, [dark]);

  return (
    <>
      {/* {!loading && ( */}
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      {/* )} */}
    </>
  );
}
