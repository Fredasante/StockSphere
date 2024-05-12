import React from "react";
import { investmentRisk } from "../../utils/constants";

const InvestmentRisk = () => {
  return (
    <div>
      {investmentRisk.map((section, index) => (
        <div key={index}>
          <h2 className="font-semibold mb-2 text-lg">{section.subtitle}</h2>
          <p className="mb-6">{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default InvestmentRisk;
