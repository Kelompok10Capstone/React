import { MdPersonOutline, MdOutlineHomeRepairService } from "react-icons/md";
import { RiLogoutBoxRLine, RiDashboardLine } from "react-icons/ri";
import { ImStatsBars } from "react-icons/im";
import FontReguler from "../../../elements/FontReguler/FontReguler";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import Logo from '../../../assets/img/logo.png'
import Skuypay from "../../../assets/img/Skuypay.png";
import "./Sidebar.css";
import ModalExit from "../../../elements/Modal/ModalExit";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    ModalExit();
  };

  const [activeLink, setActiveLink] = useState("/admin");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="sidebar p-2 text-center d-flex flex-column justify-content-between">
      <div className="logo d-flex justify-content-center py-4">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo Skuypay"
            className="rounded me-2"
            width={40}
          />
          <img src={Skuypay} alt="Skuypay" width={80} />
        </Link>
      </div>

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" style={{marginBottom:'24px'}}>
          <Link
            to="/admin"
            className={`nav-link text-dark ${
              activeLink === "/admin" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("/admin")}
          >
            <RiDashboardLine />
            Beranda
          </Link>
        </li>
        <li style={{marginBottom:'24px'}}>
          <Link
            to="/admin/transaksi"
            className={`nav-link text-dark ${
              activeLink === "/admin/transaksi" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("/admin/transaksi")}
          >
            <ImStatsBars />
            Transaksi
          </Link>
        </li>
        <li style={{marginBottom:'24px'}}>
          <Link
            to="/admin/layanan"
            className={`nav-link text-dark ${
              activeLink === "/admin/layanan" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("/admin/layanan")}
          >
            <MdOutlineHomeRepairService />
            Layanan
          </Link>
        </li>
        <li style={{marginBottom:'24px'}}>
          <Link
            to="/admin/pengguna"
            className={`nav-link text-dark ${
              activeLink === "/admin/pengguna" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("/admin/pengguna")}
          >
            <MdPersonOutline />
            Pengguna
          </Link>
        </li>
      </ul>

      <a className="keluar list-group-item text-danger py-4">
        <RiLogoutBoxRLine className="text-danger me-2 fs-5" />
        <a
          className="logout text-danger"
          style={{ textDecoration: "none", cursor: "pointer" }}
          onClick={handleLogout}
        >
          Keluar
        </a>
      </a>

      <Outlet />
    </div>
  );
};

export default Sidebar;

// const style = {
//     active : {
//         backgroundColor: '#2B3990',
//     }
// }
