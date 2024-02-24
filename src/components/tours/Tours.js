import "./Tours.css";
import Tour from "./tour/Tour";
//
function Tours(props) {
  return (
    <>
      {/* <div className="box">
        <h2 className="boxHeader">{props.cityName}</h2>
        <img className="image" src={props.cityImage} alt="countryImage"></img>
      </div> */}
      <Tour
        cityName={props.cityName}
        cityImage={props.cityImage}
        id={props.id}
      />
    </>
  );
}
// Export
export default Tours;
