import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Completed from "./completed";
import Design from "./design";
import Home from "./home";
import Letters from "./letters";
import Login from "./login";
import Mailbox from "./mailbox";
import Write from "./write";

const RoutesComponent = () => {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Login />} />
          {token ? (
            <>
              <Route path="/mailbox" element={<Mailbox />} />
              <Route path="/letters" element={<Letters />} />
            </>
          ) : (
            <>
              <Route path="/mailbox" element={<Navigate to="/" />} />
              <Route path="/letters" element={<Navigate to="/" />} />
            </>
          )}

          <Route path="/home" element={<Home />} />
          <Route path="/letters" element={<Letters />} />
          <Route path="/design" element={<Design />} />
          <Route path="/write" element={<Write />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RoutesComponent;
