import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/state";
import CartMenu from "@/components/cartMenu/cartMenu";

const store = configureStore({
  reducer: { cart: cartReducer },
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <CartMenu />
      </Layout>
    </Provider>
  );
}
