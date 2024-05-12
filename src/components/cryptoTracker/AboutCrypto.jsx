import crypto from "../../assets/crypto1.jpg";

const AboutCrypto = () => {
  return (
    <section className="mt-6 md:mt-10 lg:mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <h3 className="font-bold text-xl mb-3">What's CoinDesk About?</h3>
          <p>
            CoinDesk gives you price data of all cryptocurrencies. Here, you can
            check for real-time prices, market caps and historical price data.
            Also, we put cryptocurrencies into many different categories. In
            this way, you can track which category is performing well and in
            which one you could invest your money.
          </p>
          <br />
          <p>
            Essentially, CoinDesk makes it easier for you to spot investment
            opportunities in the cryptocurrency market.
          </p>
        </div>

        <div>
          <img
            src={crypto}
            alt="Crypto Currency"
            className="rounded-lg w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCrypto;
