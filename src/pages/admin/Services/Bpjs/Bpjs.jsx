import { IconContext } from "react-icons";
import FontBold from "../../../../elements/FontBold/FontBold";
import { VscDiffAdded, VscEdit, VscTrash } from "react-icons/vsc";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import Modal from "../../../../elements/Modal/Modal";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import styles from "./Bpjs.module.css"

const Bpjs = () => {
  const handleDelete = () => {
    Modal();
  };

  return (
    <div className="bpjs py-4 px-4">
      <FontBold $32>BPJS</FontBold>
      <div className="row">
        <div className="col-9">
          <InputGroup className="py-3">
            <InputGroup.Text
              style={{ backgroundColor: "transparent", borderRight: "none" }}
            >
              <BsSearch />
            </InputGroup.Text>
            <FormControl
              placeholder="Cari BPJS ..."
              aria-label="Search"
              name="search"
              style={{ borderLeft: "none" }}
            />
          </InputGroup>
        </div>
        <div className="col-3">
          <div className="btn-add d-flex justify-content-end pt-3">
            <Link to='/admin/layanan/bpjs/tambah'>
              <Button
                style={{ backgroundColor: "#2B3990", borderRadius: "16px" }}
              >
                + Tambah Produk
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-sm justify-content-around rounded mt-2">
        <table
          className="table text-center table-hover mt-2 rounded"
          style={{ borderSpacing: "1em" }}
        >
          <thead className="text-dark" style={{ backgroundColor: "#B8BDDA" }}>
            <tr>
              <th>ID PDAM</th>
              <th>Jenis</th>
              {/* <th>Biaya</th>
              <th>Periode</th> */}
              <th></th>
            </tr>
          </thead>
          {dataBpjs.map((bpjs) => (
            <tbody key={bpjs.kode}>
              <tr>
                <td>{bpjs.kode}</td>
                <td>{bpjs.nomor}</td>
                {/* <td>{bpjs.biaya}</td>
                <td>{bpjs.periode}</td> */}
                <td>
                  <Link to="/admin/layanan/bpjs/edit">
                    <IconContext.Provider
                      value={{ color: "#1C1B1F", size: "1.5rem" }}
                    >
                      <VscEdit className={styles.editIcon} />
                    </IconContext.Provider>
                  </Link>
                  <Link to="#" onClick={handleDelete}>
                    <IconContext.Provider
                      value={{ color: "#D13217", size: "1.5rem" }}
                    >
                      <VscTrash className={styles.trashIcon} />
                    </IconContext.Provider>
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
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
