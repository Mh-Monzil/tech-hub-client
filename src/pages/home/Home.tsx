import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <h3>This is home</h3>
      <Link to={"/blogs"}>Blogs</Link>
      <Link to={"/signup"}>SignUp</Link>
      <Link to={"/signin"}>SignIn</Link>
    </div>
  );
};

export default Home;
