import { Link } from "react-router-dom";
import FontBold from "../../../../elements/FontBold/FontBold";
import {VscDiffAdded, VscEdit, VscTrash} from "react-icons/vsc" 
import { IconContext } from "react-icons";
import Modal from "../../../../elements/Modal/Modal";

const Wifi = () => {

  const handleDelete = () => {
    Modal()
  }

  return (
    <div className="bpjs py-4 px-4">
      <div className="row">
        <div className="col-10">
          <FontBold $26>WIFI</FontBold>
        </div>
        <div className="col-2 d-flex justify-content-end">
          <Link to='/admin/layanan/wifi/tambah'>
            <IconContext.Provider value={{color:'#2B3990', size:'2rem', style:{marginTop:'8px'}}}>
              <VscDiffAdded />
            </IconContext.Provider>
          </Link>
        </div>
      </div>
      <table className="table text-center">
        <thead className="table-primary">
          <tr>
            <th>ID Produk</th>
            <th>No.Pengguna</th>
            <th>Produk</th>
            <th>Status</th>
            <th>Total Biaya</th>
            <th>Action</th>
          </tr>
        </thead>
        {dataWifi.map((wifi) => (
          <tbody key={wifi.id}>
            <tr>
              <td>{wifi.id}</td>
              <td>{wifi.nomor}</td>
              <td>{wifi.jenis}</td>
              <td>{wifi.status}</td>
              <td>{wifi.biaya}</td>
              <td>
                <Link to='/admin/layanan/wifi/edit'>
                  <IconContext.Provider value={{color:'#1C1B1F', size:'1.5rem'}}>
                    <VscEdit/>
                  </IconContext.Provider>
                </Link>
                <Link to='#' onClick={handleDelete}>
                  <IconContext.Provider value={{color:'#D13217', size:'1.5rem'}}>
                    <VscTrash/>
                  </IconContext.Provider>
                </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Wifi;

const dataWifi = [
  {
    id: "WIFI01",
    nomor: "00234123",
    biaya: "150.000",
    jenis: "Indihome",
    status: "Selesai",
  },
  {
    id: "WIFI05",
    nomor: "00258178",
    biaya: "180.000",
    jenis: "Indihome",
    status: "Gagal",
  },
  {
    id: "WIFI06",
    nomor: "00274742",
    biaya: "230.000",
    jenis: "Indihome",
    status: "Selesai",
  },
  {
    id: "WIFI07",
    nomor: "00234126",
    biaya: "200.000",
    jenis: "Indihome",
    status: "Gagal",
  },
  {
    id: "WIFI24",
    nomor: "00754146",
    biaya: "250.000",
    jenis: "Indihome",
    status: "Selesai",
  },
];
