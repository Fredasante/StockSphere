import React from "react";
import { investingApproaches } from "../../utils/constants";

const InvestingApproaches = () => {
  return (
    <div>
      {investingApproaches.map((approach, index) => (
        <div key={index}>
          <h3 className="font-bold mb-3 mt-4 text-lg">{approach.type}</h3>
          <p>{approach.description}</p>
          <h4 className="font-bold mt-3 mb-1">Key Benefits:</h4>
          <ul>
            {approach.keyBenefits.map((benefit, idx) => (
              <li key={idx}>-&nbsp;{benefit}</li>
            ))}
          </ul>
          <h4 className="font-bold mt-3 mb-1 ">Key Considerations:</h4>
          <ul>
            {approach.keyConsiderations.map((consideration, idx) => (
              <li key={idx}>-&nbsp;{consideration}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default InvestingApproaches;
