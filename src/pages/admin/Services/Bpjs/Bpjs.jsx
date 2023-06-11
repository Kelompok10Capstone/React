import { IconContext } from "react-icons";
import FontBold from "../../../../elements/FontBold/FontBold";
import { VscDiffAdded, VscEdit, VscTrash } from "react-icons/vsc";
import { Link } from "react-router-dom";
import ModalDelete from "../../../../elements/Modal/ModalDelete";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import styles from "./Bpjs.module.css"
import Search from "../../../../elements/Search/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../../../../config/Api";

const Bpjs = () => {
  
  const handleDelete = () => {
    ModalDelete();
  };

  const [bpjs, setBpjs] = useState([])
  const authToken = sessionStorage.getItem("Auth Token")

  useEffect(() => {

    const getBpjs = async () => {
      try {
        const responseBpjs = await axios.get(
          `${API_BASE}/insurance?page=1&limit=10`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            }
          }
        )
        const bpjsData = responseBpjs.data
        setBpjs(bpjsData)
        console.log('Bpjs :', bpjsData)
      } catch (error) {
        console.log('error :', error)
      }
    }
    getBpjs()
  }, [])

  return (
    <div className="bpjs py-4 px-4">
      <FontBold $32>BPJS</FontBold>
      <div className="row">
        <div className="col-9">
          <Search 
          placeholder='Cari BPJS...'
          />
        </div>
        <div className="col-3">
          <div className="btn-add d-flex justify-content-end pt-3">
            <Link to='/admin/layanan/bpjs/tambah'>
              <Button
                style={{ backgroundColor: "#2B3990", borderRadius: "16px" }}
              >
                + Tambah BPJS
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-sm justify-content-around rounded mt-2">
        <table
          className="table text-center table-hover mt-2 rounded" id={styles.tableBorder}
          style={{ borderSpacing: "1em" }}
        >
          <thead className="text-dark" id={styles.thead} style={{ backgroundColor: "#B8BDDA" }}>
            <tr>
              <th scope="col" className="col-4">Kode BPJS</th>
              <th scope="col" className="col-4">Jenis BPJS</th>
              <th scope="col" className="col-4"></th>
            </tr>
          </thead>
          {bpjs.data?.map((bpjs) => (
            <tbody key={bpjs.id}>
              <tr className={styles.rowTable}>
                <td>{bpjs.provider_name}</td>
                <td>{bpjs.product_type}</td>
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
