import { Link } from "react-router-dom";
import FontBold from "../../../../elements/FontBold/FontBold";
import {VscDiffAdded, VscEdit, VscTrash} from "react-icons/vsc" 
import { IconContext } from "react-icons";
import ModalDelete from "../../../../elements/Modal/ModalDelete";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import styles from "./Wifi.module.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../../../../config/Api";

const Wifi = () => {

  const handleDelete = () => {
    ModalDelete()
  }

  const [wifi, setWifi] = useState([])
  const authToken = sessionStorage.getItem("Auth Token")

  useEffect(() => {

    const getWifi = async () => {
      try {
        const responseWifi = await axios.get(
          `${API_BASE}/wifis?page=1&limit=10`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`
            }
          }
        )
        const wifiData = responseWifi.data
        setWifi(wifiData)
        console.log('Wifi: ', wifiData)
      } catch (error) {
        console.log('error :', error)
      }
    }
    getWifi()
  }, [])

  return (
    <div className="wifi py-4 px-4">
      <FontBold $32>WIFI</FontBold>
      <div className="row">
        <div className="col-9">
          <InputGroup className="py-3">
            <InputGroup.Text
              style={{ backgroundColor: "transparent", borderRight: "none" }}
            >
              <BsSearch />
            </InputGroup.Text>
            <FormControl
              placeholder="Cari WIFI ..."
              aria-label="Search"
              name="search"
              style={{ borderLeft: "none" }}
            />
          </InputGroup>
        </div>
        <div className="col-3">
          <div className="btn-add d-flex justify-content-end pt-3">
            <Link to='/admin/layanan/wifi/tambah'>
              <Button
                style={{ backgroundColor: "#2B3990", borderRadius: "16px" }}
              >
                + Tambah WIFI
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
              <th scope="col" className="col-4">Kode WIFI</th>
              <th scope="col" className="col-4">Jenis WIFI</th>
              {/* <th>Biaya</th>
              <th>Periode</th> */}
              <th scope="col" className="col-4"></th>
            </tr>
          </thead>
          {wifi.data?.map((wifi) => (
            <tbody key={wifi.id}>
              <tr className={styles.rowTable}>
                <td>{wifi.code}</td>
                <td>{wifi.provider_name}</td>
                {/* <td>{bpjs.biaya}</td>
                <td>{bpjs.periode}</td> */}
                <td>
                  <Link to="/admin/layanan/wifi/edit">
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
