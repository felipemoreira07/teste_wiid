import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogoutComp from "./components/Logout";
import PrincipalBox from "./components/PrincipalBox";

export const NavRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrincipalBox />} />
        <Route path="/logout" element={<LogoutComp />} />
      </Routes>
    </BrowserRouter>
  );
};
