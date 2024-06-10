import Brand1 from "../assets/brand/fortune.png";
import Brand2 from "../assets/brand/godrej.png";
import Brand3 from "../assets/brand/supreme.png";
import Brand4 from "../assets/brand/koltepatil.png";
import Brand5 from "../assets/brand/kohinoor.png";
import Brand6 from "../assets/brand/psy.jpg";
import Brand7 from "../assets/brand/muktarPark.jpg";
import Brand8 from "../assets/brand/fleetio.png";
import Brand9 from "../assets/brand/gera.png";
import Brand10 from "../assets/brand/mahindra.png";

const Brands = () => {
  return (
    <div className="brands-container">
      <p style={{fontStyle:'unset'}} className=" add-google-font text-center text-3xl font-semibold">Brands We Work With</p>

      <div className="brands-scroll my-16">
        <img src={Brand3} alt="..." className="h-12 " />
        <img src={Brand1} alt="..." className="h-14 " />
        <img src={Brand2} alt="..." className="h-12 " />
        <img src={Brand4} alt="..." className="h-14" />
        <img src={Brand5} alt="..." className="h-14" />
        <img src={Brand6} alt="..." className="h-14" />
        <img src={Brand7} alt="..." className="h-14" />
        <img src={Brand8} alt="..." className="h-14" />
        <img src={Brand9} alt="..." className="h-14" />
        <img src={Brand10} alt="..." className="h-12" />
      </div>
    </div>
  );
};

export default Brands;
