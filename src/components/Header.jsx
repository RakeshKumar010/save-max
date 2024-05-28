import HeaderImg from "../assets/image/banner_img.jpeg";

const Header = () => {
  return (
    <div
      style={{  background: `url(${HeaderImg})`,
      backgroundSize: 'cover', backgroundRepeat:'no-repeat',backgroundPosition:'center'}}
      className="md:h-[82vh] h-[260px] w-full flex justify-center items-center mt-10"
    >
      <div className="backdrop-blur-lg text-center mt-20 text-white bg-black/20 md:text-3xl text-2xl font-bold md:p-8 p-6 md:px-16 rounded-2xl  ">
        Your Trusted Real Estate Partner
      </div>
    </div>
  );
};

export default Header;
