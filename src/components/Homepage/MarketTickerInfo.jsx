import React from "react";
import stock from "../../assets/stock-market.jpg";

const MarketTickerInfo = () => {
  return (
    <section className="mt-6 md:mt-10 lg:mt-24 mb-6 md:mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h3 className="font-bold text-xl mb-3">
            Understanding Market Tickers
          </h3>
          <p>
            In the world of stock trading, market tickers play a crucial role as
            they serve as unique identifiers for individual companies listed on
            stock exchanges. For example, the market ticker{" "}
            <strong>AAPL</strong> is used to identify Apple Inc., while{" "}
            <strong>MSFT</strong> represents Microsoft Corporation.
          </p>
          <br />
          <p>
            Market tickers are widely used by investors, traders, and financial
            professionals to quickly reference and track the performance of
            specific stocks. They are displayed alongside stock prices and other
            financial data on trading platforms, financial news websites, and
            stock market tracking tools.
          </p>
          <br />
          Understanding market tickers is essential for anyone involved in stock
          trading, as they provide a standardized way to identify and refer to
          stocks in the stock market.
        </div>

        <div>
          <img
            src={stock}
            alt="Market Ticker"
            className="rounded-lg w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default MarketTickerInfo;
