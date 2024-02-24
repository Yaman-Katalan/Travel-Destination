import "./Tours.css";
//
function Tours(props) {
  return (
    <>
      <div className="box">
        <h2>{props.cityName}</h2>
        <img className="image" src={props.cityImage} alt="countryImage"></img>
      </div>
    </>
  );
}
// Export
export default Tours;
