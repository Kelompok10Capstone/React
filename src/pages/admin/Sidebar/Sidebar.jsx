import { MdPersonOutline, MdOutlineHomeRepairService } from "react-icons/md";
import {RiLogoutBoxRLine, RiDashboardLine} from "react-icons/ri"
import {ImStatsBars} from "react-icons/im"
import FontReguler from "../../../elements/FontReguler/FontReguler";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
     const navigate = useNavigate();

     const handleLogout = () => {
          sessionStorage.removeItem("Auth Token");
          navigate("/login-admin");
     };

     return (
          <div className="sidebar p-2 text-center">
               <div className="logo d-flex justify-content-center py-4">
                    <Link to="/">
                         <img
                              src="src/assets/img/logo.png"
                              alt="Logo Skuypay"
                              className="me-2"
                              width={40}
                         />
                         <img src="src/assets/img/Skuypay.png" alt="Skuypay" width={80} />
                    </Link>
               </div>

               <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                         <NavLink
                              exact
                              to="/admin"
                              className="sidlink nav-link text-dark"
                              style={{ borderRadius: "27px" }}
                         >
                              <RiDashboardLine className="me-2 fs-5" />
                              Beranda
                         </NavLink>
                    </li>

                    <li>
                         <NavLink
                              to="/admin/transaksi"
                              className="sidlink nav-link link-body-emphasis text-dark"
                              style={{ borderRadius: "27px" }}
                         >
                              <ImStatsBars className="me-2 fs-5" />
                              Transaksi
                         </NavLink>
                    </li>

                    <li>
                         <NavLink
                              to="/admin/layanan"
                              className="sidlink nav-link link-body-emphasis text-dark"
                              style={{ borderRadius: "27px" }}
                         >
                              <MdOutlineHomeRepairService className="me-2 fs-5" />
                              Layanan
                         </NavLink>
                    </li>

                    <li>
                         <NavLink
                              to="/admin/pengguna"
                              className="sidlink nav-link link-body-emphasis text-dark"
                              style={{ borderRadius: "27px" }}
                         >
                              <MdPersonOutline className="me-2 fs-5" />
                              Pengguna
                         </NavLink>
                    </li>
               </ul>

               <a className="keluar list-group-item text-danger py-2 my-5">
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