import React from "react";
import TopGainers from "./TopGainers";
import TopLosers from "./TopLosers";

const Movers = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <TopGainers />
      <TopLosers />
    </section>
  );
};

export default Movers;
