import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center  text-blck p-10">
      <aside>
        <div>
          <a className=" cursor-pointer text-2xl font-semibold text-[#003EA4]">
            Auction <span className="text-[#FFD337]">Gallery</span>
          </a>
        </div>
        <p className="text-sm font-semibold">
          <i>
            <a href="">Bid.</a>
          </i>{" "}
          <i>
            <a href="">Win.</a>
          </i>{" "}
          <i>
            <a href="">Own.</a>
          </i>{" "}
          <br />
        </p>
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
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Developer Manjur
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
