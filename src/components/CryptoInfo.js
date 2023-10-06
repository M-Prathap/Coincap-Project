import React from "react";
import "./CoinTable.css";

export const CryptoInfo = ({ cryptoCoin }) => {
  const {
    rank,
    name,
    symbol,
    priceUsd,
    marketCapUsd,
    vwap24Hr,
    supply,
    volumeUsd24Hr,
    changePercent24Hr,
  } = cryptoCoin;

  // Rounding Off values
  const price = Number(priceUsd).toFixed(2);
  const marketCap =
    Math.abs(Number(marketCapUsd)) >= 1.0e9
      ? (Math.abs(Number(marketCapUsd)) / 1.0e9).toFixed(2) + "b"
      : 0;
  const volume =
    Math.abs(Number(volumeUsd24Hr)) >= 1.0e9
      ? (Math.abs(Number(volumeUsd24Hr)) / 1.0e9).toFixed(2) + "b"
      : 0;
  const Supply =
    Math.abs(Number(supply)) >= 1.0e6
      ? (Math.abs(Number(supply)) / 1.0e6).toFixed(2) + "m"
      : 0;
  const changePer24Hr = Number(changePercent24Hr).toFixed(2);
  const vwap24 = Number(vwap24Hr).toFixed(2);

  return (
    <tr className="crypto_row">
      <td className="cypto_info py-3">{rank}</td>
      <td className="cypto_info py-3 crypto_flex">
        <img
          className="crypto__img"
          src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
          alt="logo"
        />
        <div className="crypto_flex_col">
          <span className="bold">{name}</span>
          <small>{symbol}</small>
        </div>
      </td>
      <td className="crypto_info py-3">{`$ ${price}`}</td>
      <td className="crypto_info py-3">{`$ ${marketCap}`}</td>
      <td className="crypto_info py-3">{`$ ${vwap24}`}</td>
      <td className="crypto_info py-3">{Supply}</td>
      <td className="crypto_info py-3">{`$ ${volume}`}</td>
      <td
        className={
          changePer24Hr < 0 ? `crypto_info py-3 red` : `crypto_info py-3 green`
        }
      >
        {`${changePer24Hr} % `}
      </td>
    </tr>
  );
};
