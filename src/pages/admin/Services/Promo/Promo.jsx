import { Link } from "react-router-dom";
import FontBold from "../../../../elements/FontBold/FontBold";
import {VscDiffAdded, VscEdit, VscTrash} from "react-icons/vsc" 
import { IconContext } from "react-icons";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import styles from "./Promo.module.css"
import ModalDelete from "../../../../elements/Modal/ModalDelete";

const Promo = () => {

  const handleDelete = () => {
    ModalDelete()
  }

  return (
    <div className="promo py-4 px-4">
      <FontBold $32>Promo</FontBold>
      <div className="row">
        <div className="col-9">
          <InputGroup className="py-3">
            <InputGroup.Text
              style={{ backgroundColor: "transparent", borderRight: "none" }}
            >
              <BsSearch />
            </InputGroup.Text>
            <FormControl
              placeholder="Cari Promo ..."
              aria-label="Search"
              name="search"
              style={{ borderLeft: "none" }}
            />
          </InputGroup>
        </div>
        <div className="col-3">
          <div className="btn-add d-flex justify-content-end pt-3">
            <Link to='/admin/layanan/promo/tambah'>
              <Button
                style={{ backgroundColor: "#2B3990", borderRadius: "16px" }}
              >
                + Tambah Promo
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-sm justify-content-around rounded mt-2">
        <table
          className="table text-center table-hover mt-2 rounded"
          style={{ borderSpacing: "1em" }}
          id={styles.tableBorder}
        >
          <thead className="text-dark" style={{ backgroundColor: "#B8BDDA" }} id={styles.thead}>
            <tr>
              <th scope="row" className="col-2">Kode</th>
              <th scope="row" className="col-2">Jenis Promo</th>
              <th scope="row" className="col-2">Periode</th>
              <th scope="row" className="col-4">Deskripsi</th>
              <th scope="row" className="col-2"></th>
            </tr>
          </thead>
          {dataPromo.map((promo) => (
            <tbody key={promo.id}>
              <tr className={styles.rowTable}>
                <td>{promo.kode}</td>
                <td>{promo.jenis}</td>
                <td>{promo.periode}</td>
                <td>{promo.deskripsi}</td>
                <td>
                  <Link to="/admin/layanan/promo/edit">
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

export default Promo;

const dataPromo = [
  {
    kode: "PROMO01",
    jenis: "00234123",
    periode: "150.000",
    deskripsi: "Selesai",
  },
  {
    kode: "PROMO05",
    jenis: "00258178",
    periode: "180.000",
    deskripsi: "Gagal",
  },
  {
    kode: "PROMO06",
    jenis: "00274742",
    periode: "230.000",
    deskripsi: "Selesai",
  },
  {
    kode: "PROMO07",
    jenis: "00234126",
    periode: "200.000",
    deskripsi: "Gagal",
  },
  {
    kode: "PROMO24",
    jenis: "00754146",
    periode: "250.000",
    deskripsi: "Selesai",
  },
];
