import { MdPersonOutline, MdOutlineHomeRepairService, MdOutlinePeopleAlt } from "react-icons/md";
import { RiLogoutBoxRLine, RiDashboardLine } from "react-icons/ri";
import { ImStatsBars } from "react-icons/im";
import FontReguler from "../../../elements/FontReguler/FontReguler";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import Logo from '../../../assets/img/logo.png'
import Skuypay from "../../../assets/img/skuypay.png";
import ModalExit from "../../../elements/Modal/ModalExit/ModalExit";
import "./Sidebar.css";

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
    <div className="sidebar p-2 d-flex flex-column justify-content-between">
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
        <li className="nav-item beranda-sidebar" style={{marginBottom:'24px'}}>
          <Link
            to="/admin"
            className={`nav-link text-dark ${
              activeLink === "/admin" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("/admin")}
          >
            <RiDashboardLine className="me-2" size={20} />
            Beranda
          </Link>
        </li>

        <li style={{marginBottom:'24px'}} className="transaksi-sidebar">
          <Link
            to="/admin/transaksi"
            className={`nav-link text-dark ${
              activeLink === "/admin/transaksi" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("/admin/transaksi")}
          >
            <ImStatsBars className="me-2" size={20} />
            Transaksi
          </Link>
        </li>

        <li style={{marginBottom:'24px'}} className="layanan-sidebar">
          <Link
            to="/admin/layanan"
            className={`nav-link text-dark ${
              activeLink === "/admin/layanan" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("/admin/layanan")}
          >
            <MdOutlineHomeRepairService className="me-2" size={20} />
            Layanan
          </Link>
        </li>

        <li style={{marginBottom:'24px'}} className="pengguna-sidebar">
          <Link
            to="/admin/pengguna"
            className={`nav-link text-dark ${
              activeLink === "/admin/pengguna" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("/admin/pengguna")}
          >
            <MdOutlinePeopleAlt className="me-2" size={20} />
            Pengguna
          </Link>
        </li>
      </ul>

      <a className="keluar text-center coba list-group-item text-danger py-4">
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
