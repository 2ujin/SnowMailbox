import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Mailbox from "./mailbox";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mailbox" element={<Mailbox />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RoutesComponent;
