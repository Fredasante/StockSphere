import React from "react";
import { stockEconomicIndicators } from "../../utils/constants";

const EconomicIndicators = () => {
  return (
    <div>
      {stockEconomicIndicators.map((indicator, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-medium mb-2">{indicator.title}</h3>
          <p>{indicator.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EconomicIndicators;
