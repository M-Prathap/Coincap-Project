import React from "react";
import "./MarketHead.css";

export const MarketHead = () => {
  return (
    <section>
      <div>
        <div className="marketInfo">
          <div className="market_details flex_col">
            <span>MARKET CAP</span>
            <span>$1.33T</span>
          </div>
          <div className="market_details flex_col">
            <span>EXCHANGE VOL</span>
            <span>$74.50B</span>
          </div>
          <div className="market_details flex_col">
            <span>ASSETS</span>
            <span>2,295</span>
          </div>
          <div className="market_details flex_col">
            <span>EXCHANGES</span>
            <span>73</span>
          </div>
          <div className="market_details flex_col">
            <span>MARKETS</span>
            <span>14,759</span>
          </div>
          <div className="market_details flex_col">
            <span>BTC DOM INDEX</span>
            <span>33.4%</span>
          </div>
        </div>
      </div>
    </section>
  );
};
