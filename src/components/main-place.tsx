import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";

interface MainProps {
  isDarkMode: boolean; // Define el tipo aquí
}

const Main: React.FC<MainProps> = ({isDarkMode}: { isDarkMode: boolean }) => {
  return (
    <Routes>
      <Route path="/" element={<Home isDarkMode={isDarkMode}/>}/>
    </Routes>
  );
};

export default Main;
