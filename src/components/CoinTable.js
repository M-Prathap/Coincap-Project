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
      <section className="crypto_container">
        <table className="crypto_table">
          <thead>
            <tr className="crypto_header_row">
              <td className="Cypto_Info">Rank</td>
              <td className="Cypto_Info crypto_name">Name</td>
              <td className="Cypto_Info">Price</td>
              <td className="Cypto_Info">Market Cap</td>
              <td className="Cypto_Info">VWAP (24Hr) </td>
              <td className="Cypto_Info">Supply</td>
              <td className="Cypto_Info">Volume (24Hr) </td>
              <td className="Cypto_Info">Change (24Hr)</td>
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
