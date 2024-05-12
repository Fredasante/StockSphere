import React from "react";
import MarketSummary from "./MarketSummary";
import EquityTabs from "./EquityTabs";

const EquityMarket = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6 md:mt-10 lg:mt-24 mb-6 md:mb-10">
      <div>
        <h6 className="text-2xl font-bold mb-4">What We Offer?</h6>
        <div className="bg-slate-700 p-5 rounded-lg">
          <EquityTabs />
        </div>
      </div>

      <MarketSummary />
    </section>
  );
};

export default EquityMarket;
