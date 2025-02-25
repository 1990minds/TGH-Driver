import React from "react";
import styled from "styled-components";
import { MdDashboard } from "react-icons/md";
import { BsBoxFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LuArrowDownUp } from "react-icons/lu";
import AiFillHome from "../../assets/TGH logo_Mesa de trabajo 1.png"
import { MdCreateNewFolder } from "react-icons/md";
import { LiaHotelSolid } from "react-icons/lia";
import { FcCollaboration } from "react-icons/fc";
import { FaRoute } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";


import { PiShoppingCartFill } from "react-icons/pi";
import { useSelector } from "react-redux";



function Footer() {
 

  return (
    <FooterWrap>
      {/* <ScrollToTop smooth top="50" /> */}
      <div className="flex justify-around items-center mx-auto py-2 footer md:hidden sm:block fixed bottom-0 left-0 right-0 bg-[#030712]" style={{  }}>
        <Link to="/collabs " className="flex flex-col items-center justify-center w-16">
          <FcCollaboration className="text-xl text-white" />
          <span className="text-xs text-white">Rides</span>
        </Link>

        <Link to="/payments" className="flex flex-col items-center justify-center w-16">
          <MdPayments className="text-xl text-[#FFA726]" />
          <span className="text-xs text-white">Payments </span>
        </Link>

        <Link to="/" className="flex flex-col items-center justify-center w-16 mb-5">
          <img className="w-10 h-10 bg-white p-1 rounded-full shadow-xl border border-[#030712]" src={AiFillHome} alt="Home" />
          <span className="text-xs text-white">Home</span>
        </Link>

        <Link to="/routes" className="relative flex flex-col items-center justify-center w-16">
          <FaRoute className="text-xl text-[#91C1FA]" />
        
          <span className="text-xs text-white">Routes</span>
        </Link>

        <Link to="/profile" className="flex flex-col items-center justify-center w-16">
          <FaUserCircle className="text-xl text-[#55B4DE]" />
          <span className="text-xs text-white">Profile</span>
        </Link>
      </div>
    </FooterWrap>
  );
}

const FooterWrap = styled.div`
  .footer {
    width: 100%;
    height: 3.0rem;
    position: fixed;
    bottom: 0%;
    left: 0%;
    margin-Top: 0px;
    z-index: 40;
  }

  .dropdown:hover .dropdown-menu {
    display: block;
  }

  .navbtn {
    li {
      list-style: none;
      height: 2px;
      background-color: grey;
      margin: 4px 0;
    }
  }

  .badge,
  .notification {
    position: absolute;
    z-index: auto;
    min-width: 15px;
    height: 15px;
    padding: 0 3px;
    color: #f9f9f9;
    font-size: 10px;
    line-height: 16px;
    white-space: nowrap;
    text-align: center;
    background: #ff4d4f;
    font-weight: bold;
    border-radius: 10px;
    -webkit-box-shadow: 0 0 0 1px #fff;
    box-shadow: 0 0 0 1px #fff;
  }

  .badge {
    transform: translate(14px, -28px);
  }

  .notification {
    transform: translate(11px, -26px);
  }
`;

export default Footer;
