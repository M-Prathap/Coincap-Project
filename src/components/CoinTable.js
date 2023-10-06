import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CryptoInfo } from "./CryptoInfo";
import { fetchCryptoCoins } from "../features/CryptoSlice";
import "./CoinTable.css";

export const CoinTable = () => {
  const dispatch = useDispatch();
  const { cryptoCoins } = useSelector((state) => state.cryptoCoins);
  const isLoading = useSelector((state) => state.cryptoCoins.isLoading);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCryptoCoins(page));
  }, [dispatch, page]);

  return (
    <>
      <section className="crypto__container">
        <table className="crypto__table">
          <thead>
            <tr className="crypto__header__row">
              <td className="Cypto__Info">Rank</td>
              <td className="Cypto__Info crypto__name">Name</td>
              <td className="Cypto__Info">Price</td>
              <td className="Cypto__Info">Market Cap</td>
              <td className="Cypto__Info">VWAP (24Hr) </td>
              <td className="Cypto__Info">Supply</td>
              <td className="Cypto__Info">Volume (24Hr) </td>
              <td className="Cypto__Info">Change (24Hr)</td>
            </tr>
          </thead>
          <tbody>
            {cryptoCoins.map((cryptoCoin) => (
              <CryptoInfo key={cryptoCoin.id} cryptoCoin={cryptoCoin} />
            ))}
          </tbody>
        </table>
      </section>
      <div className="more">
        <button
          onClick={() => setPage((pre) => pre + 1)}
          className="action__btn"
        >
          {isLoading ? "loading..." : "View More"}
        </button>
      </div>
    </>
  );
};
