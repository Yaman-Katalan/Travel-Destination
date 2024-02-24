import "./App.css";
import Header from "./components/header/Header";
import ReZero from "./components/rezero/ReZero";
import Home from "./components/home/Home";
import TourDetails from "./components/TourDetails/TourDetails";
import Footer from "./components/footer/Footer";
import { Routes, Route, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  // const params = useParams();
  // const userId = params.userId;
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ReZero />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/city/:id" element={<TourDetails />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
