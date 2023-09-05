import Pokeball from "../../components/SearchBar/pokeball.png";
import Project1 from "./project-1.png";
import Chrome from "./Google_Chrome_icon_(February_2022).svg.png";
import Edge from "./Microsoft_Edge_logo_(2019).png";
import Firefox from "./Firefox_logo,_2017.png";
import Opera from "./Opera-Logo-PNG-HD-Isolated.png";
import "./Mobile.css";

const Mobile = () => {
  return (
    <div>
      <div className="mobile-heading">
        <h1 className="mobile-title">PokeInfo</h1>
        <img src={Pokeball} alt="pokeball" className="mobile-pokeball" />
      </div>
      <div className="mobile-body-text">
        <img src={Project1} alt="project1" className="mobile-image2" />
        <h2 className="mobile-title2">PokeInfo Mobile Is Coming Soon!</h2>
        <p className="mobile-p">In the meantime, please use one of the desktop browsers below </p>
        </div>
        <div className="mobile-icon-container">
            <img src={Chrome} alt="Chrome Icon" className="mobile-icon"/>
            <img src={Edge} alt="Edge Icon" className="mobile-icon"/>
            <img src={Firefox} alt="Firefox Icon" className="mobile-icon"/>
            <img src={Opera} alt="Opera Icon" className="mobile-icon"/>
      </div>
    </div>
  );
};

export default Mobile;
