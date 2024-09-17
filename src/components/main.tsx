import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Proyectos from "../pages/proyectos";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Proyectos />} />
    </Routes>
  );
};

export default Main;
