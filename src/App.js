import React from "react";
import { Provider } from "react-redux";
import { CoinTable } from "./components/CoinTable";
import { Navbar } from "./components/Navbar";
import { MarketHead } from "./components/MarketHead";
import { store } from "./components/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <MarketHead />
        <CoinTable />
      </div>
    </Provider>
  );
}

export default App;
