import Tours from "../tours/Tours";
//
import "./Home.css";
//
const jsonData = require("../../data/db.json");
//
function Home() {
  return (
    <>
      <div className="container">
        {jsonData.map((ele) => {
          return (
            <Tours cityName={ele.name} cityImage={ele.image} id={ele.id} />
          );
        })}
      </div>
    </>
  );
}
// Explort
export default Home;
