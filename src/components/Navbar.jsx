import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import loginStore from "../store/loginStore";

const Navbar = () => {
  const { isLoggedIn, email, logout } = loginStore();
  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="w-full font-poppins bg-primary">
      <section className="container max-w-6xl flex justify-between items-center mx-auto py-5">
        <Link to="/" className="font-bold text-3xl text-black">
          Foodies
        </Link>
        <div className="lg:flex gap-x-4 font-normal items-center xs:hidden">
          <Link to="/menu">Our Menu</Link>
          <a href="#">Serivice</a>
          <a href="#">About Us</a>
          <div className="flex gap-3 items-center ml-6">
            {isLoggedIn ? (
              <Link
                to={"/profile"}
                className="bg-black py-2 px-4 text-primary rounded-full hover:bg-gray-900"
              >
                {email}
              </Link>
            ) : (
              <Link
                to="/register"
                className="bg-black py-2 px-4 text-primary rounded-full hover:bg-gray-900"
              >
                Sign Up
              </Link>
            )}
            {/* <button onClick={handleLogout}>Logout</button> */}
            <Link to="/cart">
              <FaCartShopping size={"1.5em"} />
            </Link>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
