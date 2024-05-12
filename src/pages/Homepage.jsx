import React from "react";
import Hero from "../components/Homepage/Hero";
import Markets from "../components/Homepage/Markets";
import HomeNews from "../components/Homepage/HomeNews";
import EquityMarket from "../components/Homepage/EquityMarket";
import MarketTickerInfo from "../components/Homepage/MarketTickerInfo";
import Movers from "../components/Homepage/Movers";

const Homepage = () => {
  return (
    <div className="mx-auto max-w-screen-xl p-5">
      <Hero />
      <Markets />
      <MarketTickerInfo />
      <Movers />
      <HomeNews />
      <EquityMarket />
    </div>
  );
};

export default Homepage;
