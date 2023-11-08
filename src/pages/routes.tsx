import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RoutesComponent;
