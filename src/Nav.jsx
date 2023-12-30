import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  return (
    <div className="max-auto sm:w-auto   ">
      <div className=" w-auto h-20 flex justify-evenly items-center  shadow-xl  ">
        <div className="w-full  sm:w-36 flex justify-evenly gap-32 ">
          <img
            src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
            alt=""
                  />
      <span className=" hidden sm:inline-block md:hidden lg:hidden xl:hidden hover:text-orange-500 "  ><MenuIcon/></span> 
        </div>
        <div className="hidden md:flex gap-4 text-xs items-center   ">
          <div>Home</div>
          <div>How it works</div>
          <button className="w-[150px] h-[30px]  bg-blue-600 text-white rounded hover:bg-orange-500  ">
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;

