import "./Tour.css";
import { Link } from "react-router-dom";
function Tour(props) {
  return (
    <>
      <Link to={`/city/${props.id}`} className="linky">
        <div className="box">
          <h2 className="boxHeader">{props.cityName}</h2>
          <img className="image" src={props.cityImage} alt="countryImage"></img>
        </div>
      </Link>
    </>
  );
}
export default Tour;
