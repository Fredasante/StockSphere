import AboutHero from "../components/About/AboutHero";

const About = () => {
  return (
    <div className="max-w-screen-xl min-h-[71vh] mx-auto p-5 flex">
      <div className="flex justify-center items-center">
        <AboutHero />
        {/* <TeamMembers /> */}
      </div>
    </div>
  );
};

export default About;
