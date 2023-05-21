import { MdSpaceDashboard, MdLogout, MdOutlineHomeRepairService } from "react-icons/md";
import {GrTransaction} from "react-icons/gr"
import {FaUser} from "react-icons/fa"
import {FiSettings} from "react-icons/fi"
import FontReguler from "../../../elements/FontReguler/FontReguler";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {


  return (
    <div className="sidebar p-2 text-center" >
      <div className="logo d-flex justify-content-center py-4">
        <Link to="/">
          <img src="src/assets/img/logo.png" alt="Logo Skuypay" width={40} />
          <img src="src/assets/img/Skuypay.png" alt="Skuypay" width={80} />
        </Link>
      </div>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to='/admin' className="nav-link" aria-current="page" style={{color:'white', backgroundColor:'#2B3990', borderRadius:'27px'}}>
            <MdSpaceDashboard />
            Beranda
          </Link>
        </li>
        <li>
          <Link to='/admin/transaksi' className="nav-link link-body-emphasis" style={{color:'black'}}>
            <GrTransaction />
            Transaksi
          </Link>
        </li>
        <li>
          <Link to='/admin/layanan' className="nav-link link-body-emphasis" style={{color:'black'}}>
            <MdOutlineHomeRepairService />
            Layanan
          </Link>
        </li>
        <li>
          <Link to='/admin/pengguna' className="nav-link link-body-emphasis" style={{color:'black'}}>
            <FaUser />
            Pengguna
          </Link>
        </li>
        <li>
          <Link to='/admin/pengaturan' className="nav-link link-body-emphasis" style={{color:'black'}}>
            <FiSettings />
            Pengaturan
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Sidebar;

const style = {
    active : {
        backgroundColor: '#2B3990',
    }
}