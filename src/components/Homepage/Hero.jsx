import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-center mx-auto pt-10 w-full h-[33vh] md:h-[28vh] lg:h-[40vh] p-4">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl md:text-3xl lg:text-5xl  font-bold">
          Stay ahead of the curve
        </h1>
        <p className="my-7 text-sm md:text-lg lg:text-xl">
          StockSphere is the fastest way to track the stock market and trends
          that matter to you.
        </p>

        <div className="flex gap-5">
          <Link to="/learn">
            <button className="ml-10 bg-gray-300 text-black text-sm px-4 py-3 font-bold rounded-md">
              LEARN MORE
            </button>
          </Link>
          <Link to="/crypto-tracker">
            <button className="text-gray-100 border border-gray-500 text-sm px-4 py-3 font-bold rounded-md">
              CRYPTO TRACKER
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
