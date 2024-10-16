import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Proyectos from "../pages/proyectos";

interface MainProps {
  isDarkMode: boolean; // Define el tipo aquí
}

const Main: React.FC<MainProps> = ({isDarkMode}: { isDarkMode: boolean }) => {
  return (
    <Routes>
      <Route path="/" element={<Home isDarkMode={isDarkMode}/>}/>
      <Route path="/projects" element={<Proyectos />} />
    </Routes>
  );
};

export default Main;
