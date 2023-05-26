import { IconContext } from "react-icons";
import FontBold from "../../../../elements/FontBold/FontBold";
import {VscDiffAdded, VscEdit, VscTrash} from "react-icons/vsc"
import { Link } from "react-router-dom";
import Modal from "../../../../elements/Modal/Modal";

const Bpjs = () => {

  const handleDelete = () => {
    Modal()
  }

  return (
    <div className="bpjs py-4 px-4">
      <div className="row">
        <div className="col-10">
          <FontBold $26>BPJS (Badan Penyelenggara Jaminan Kesehatan)</FontBold>
        </div>
        <div className="col-2 d-flex justify-content-end">
        <Link to='/admin/layanan/bpjs/tambah'>
            <IconContext.Provider value={{color:'#2B3990', size:'2rem', style:{marginTop:'8px'}}}>
              <VscDiffAdded />
            </IconContext.Provider>
          </Link>
        </div>
      </div>
      <table className="table text-center">
        <thead className="table-primary">
          <tr>
            <th>Kode Produk</th>
            <th>Nomor Pelanggan</th>
            <th>Biaya</th>
            <th>Periode</th>
            <th>Jumlah Keluarga</th>
            <th>Action</th>
          </tr>
        </thead>
        {dataBpjs.map((bpjs) => (
          <tbody key={bpjs.kode}>
            <tr>
              <td>{bpjs.kode}</td>
              <td>{bpjs.nomor}</td>
              <td>{bpjs.biaya}</td>
              <td>{bpjs.periode}</td>
              <td>{bpjs.jumlah}</td>
              <td>
                <Link to='/admin/layanan/bpjs/edit'>
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

export default Bpjs;

const dataBpjs = [
  {
    kode: "BPJS01",
    nomor: "00234123",
    biaya: "150.000",
    periode: "Maret",
    jumlah: "4 Orang",
  },
  {
    kode: "BPJS05",
    nomor: "00258178",
    biaya: "180.000",
    periode: "April",
    jumlah: "3 Orang",
  },
  {
    kode: "BPJS06",
    nomor: "00274742",
    biaya: "230.000",
    periode: "Maret",
    jumlah: "6 Orang",
  },
  {
    kode: "BPJS07",
    nomor: "00234126",
    biaya: "200.000",
    periode: "Juni",
    jumlah: "1 Orang",
  },
  {
    kode: "BPJS24",
    nomor: "00754146",
    biaya: "250.000",
    periode: "Maret",
    jumlah: "9 Orang",
  },
];
