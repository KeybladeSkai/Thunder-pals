import { CiSearch } from "react-icons/ci";
import thunder from "../../assets/img/thunder.jpeg";
import "./logosearch.css";
import { Link } from "react-router-dom";
const Logosearch = () => {
  return (
    <div className="logoSearch">
      <div className="image-container">
        <Link to="/">
          <img src={thunder} alt="eyes" />
        </Link>
      </div>

      <div className="search bg-gray-100 rounded-full">
        <div className="icon-container rounded-full">
          <CiSearch className="text-black text-2xl" />
        </div>
        <input
          type="text"
          className="text-black rounded-full bg-gray-100"
          placeholder="#Explore"
        />
      </div>
    </div>
  );
};

export default Logosearch;
