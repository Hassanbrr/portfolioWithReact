import { Link } from "react-router-dom";
import "../../Css/Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div style={{ fontSize: "70px" }}>
          Hello Guys <br />
          Im Musician
        </div>
        <Link to="myMusic" className="button">
          listen to Music
        </Link>
      </div>
    </>
  );
};

export default Hero;
