import { Outlet } from "react-router-dom";
import Navbar from "./shared/navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* main outlet */}
      <Outlet />
    </div>
  );
};

export default App;
