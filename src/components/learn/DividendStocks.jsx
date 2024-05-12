import React from "react";
import { dividendPayingStocks } from "../../utils/constants";

const DividendStocks = () => {
  return (
    <div>
      {dividendPayingStocks.map((section, index) => (
        <div key={index}>
          <h2 className="font-semibold mb-2 text-lg">{section.subtitle}</h2>
          <p className="mb-6">{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default DividendStocks;
