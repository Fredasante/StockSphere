import React from "react";
import CoinsTable from "../components/cryptoTracker/CoinsTable";
import AboutCrypto from "../components/cryptoTracker/AboutCrypto";

const CryptoTracker = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5">
      <CoinsTable />
      <AboutCrypto />
    </div>
  );
};

export default CryptoTracker;
