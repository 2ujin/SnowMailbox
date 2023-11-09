import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Letters from "./letters";
import Login from "./login";
import Mailbox from "./mailbox";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/mailbox" element={<Mailbox />} />
          <Route path="/home" element={<Home />} />
          <Route path="/letters" element={<Letters />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RoutesComponent;
