import { MdPersonOutline, MdOutlineHomeRepairService, MdOutlinePeopleAlt } from "react-icons/md";
import { RiLogoutBoxRLine, RiDashboardLine } from "react-icons/ri";
import { ImStatsBars } from "react-icons/im";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Logo from '../../../assets/img/logo.png'
import Skuypay from "../../../assets/img/Skuypay.png";
import ModalExit from "../../../elements/Modal/ModalExit/ModalExit";
import "./Sidebar.css";

const Sidebar = () => {
	const menuItem = [
	{
		path: "/admin/dashboard",
		name: "Beranda",
		icon: <RiDashboardLine className="me-2" size={20} />
	},
	{
		path: "/admin/transaksi",
		name: "Transaksi",
		icon: <ImStatsBars className="me-2" size={20} />
	},
	{
		path: "/admin/layanan",
		name: "Layanan",
		icon: <MdOutlineHomeRepairService className="me-2" size={20} />
	},
	{
		path: "/admin/pengguna",
		name: "Pengguna",
		icon: <MdOutlinePeopleAlt className="me-2" size={20} />
	},
	]

	const handleLogout = () => {
	ModalExit();
	};

	return (
          <>
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
                    <div className="nav nav-pills mb-auto">
                         <div className="nav-item sidebar d-flex flex-column align-align-items-center">
                              {menuItem.map((item, index) => (
                                   <NavLink
                                        to={item.path}
                                        key={index}
                                        className="link text-dark"
                                        activeclassName="active"
                                        style={{ marginBottom: "30px" }}
                                   >
                                        {item.icon}
                                        {item.name}
                                   </NavLink>
                              ))}
                         </div>
                    </div>				
                    <a className="keluar px-4 text-danger py-4">
                         <RiLogoutBoxRLine className="text-danger me-2 fs-5" />
                         <a
                              className="logout text-danger"                              
                              onClick={handleLogout}
                         >
                              Keluar
                         </a>
                    </a>
               </div>
          </>
     );
}


export default Sidebar;
