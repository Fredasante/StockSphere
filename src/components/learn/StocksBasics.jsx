import React from "react";
import { stockBasics } from "../../utils/constants";

const StocksBasics = () => {
  return (
    <div>
      {stockBasics.map((guide, index) => (
        <div key={index}>
          {guide.sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-semibold mb-2 text-lg">{section.subtitle}</h3>
              <p className="mb-6">{section.content}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default StocksBasics;
