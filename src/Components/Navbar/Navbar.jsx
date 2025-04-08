import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <a className=" cursor-pointer text-2xl font-semibold text-[#003EA4]">
            Auction <span className="text-[#FFD337]">Gallery</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg ">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Auctions</a>
            </li>
            <li>
              <a>Categories</a>
            </li>
            <li>
              <a>How to works</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center space-x-4">
            <div>
              <img
                src="
            https://img.icons8.com/?size=30&id=Zux1S8Y4NyXe&format=png&color=000000"
                alt=""
              />
            </div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                <img src="https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
