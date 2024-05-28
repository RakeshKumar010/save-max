import AboutBanner from "../assets/bg/aboutBanner.jpg";

const About = () => {
  return (
    <div
      style={{
        background: `url(${AboutBanner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
      className="text-center "
    >
      <div className="add-google-font w-[70%] mx-auto text-lg py-10">
        <p className="text-3xl">About Save Max</p> <br />
        <div className="text-lg">
        <p>
          At Save Max, we are passionate about People and Property. We do not
          just help people buy and sell homes but believe in establishing
          lifelong relationships.
        </p>{" "}
        <br />
        <p>
          Save Max is a technology-powered organization backed by
          best-in-industry human expertise. With over 18,250 happy clients and a
          $15+ Billion total sales volume, we are a fast-growing Global Brand.
        </p>{" "}
        <br />
        <p>
          Contact our team of 1000+ realtors in over 80+ offices, and we will
          help you find your dream home!
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
