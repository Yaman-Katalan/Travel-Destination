import { useParams } from "react-router-dom";
import "./TourDetails.css";
import { useState } from "react";
const jsonData = require("../../data/db.json");

function TourDetails() {
  // State
  const [flag, setFlag] = useState(true);
  // Functions
  function moreLess() {
    let div = document.querySelector("#myDiv");
    let button = document.querySelector("#myButton");
    // Condition
    if (flag === true) {
      div.style.height = "100%";
      button.textContent = "Less Info";
      setFlag(false);
    } else {
      div.style.height = "200px";
      button.textContent = "More Info";
      setFlag(true);
    }
  }
  //
  const { id } = useParams();
  let result = jsonData.filter((element) => {
    return element.id === id;
  })[0];
  console.log(result);
  return (
    <>
      <div className="moreInfo">
        <div id="myDiv">
          <h1>{result.name}</h1>
          <p>{result.info}</p>
        </div>

        <button onClick={moreLess} id="myButton">
          More Info
        </button>
      </div>
    </>
  );
}
export default TourDetails;
