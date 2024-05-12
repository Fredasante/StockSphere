import Stock from "../../assets/stock.jpg";

const AboutHero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10">
      <div>
        <h1 className="text-4xl font-bold">About Us</h1>

        <p className="mt-8">
          This project was created to empower individuals to make informed
          investment decisions and navigate the complexities of the stock market
          with confidence.
        </p>
        <br />

        <p>
          The mission is to democratize access to financial information and
          provide tools and resources that enable investors of all levels to
          succeed in their financial goals. We believe that by offering
          comprehensive market analysis, educational content, and user-friendly
          investment tools, we can empower our users to take control of their
          financial futures.
        </p>
        <br />

        <p>
          This project offers Comprehensive Market Analysis, Educational
          Resources, Powerful Tools and Community Support.
        </p>
      </div>

      <div>
        <img src={Stock} alt="stock image" className="rounded-md" />
      </div>
    </section>
  );
};

export default AboutHero;
