import { Link } from "react-router-dom";
import FontBold from "../../../../elements/FontBold/FontBold";
import { VscDiffAdded, VscEdit, VscTrash } from "react-icons/vsc";
import { IconContext } from "react-icons";
import ModalDelete from "../../../../elements/Modal/ModalDelete";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import styles from "./Wifi.module.css";
import { useEffect, useState } from "react";
import Search from "../../../../elements/Search/Search";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import api from "../../../../config/https";

const Wifi = () => {
  const [wifi, setWifi] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    const getWifi = async () => {
      try {
        const responseWifi = await api.get(`wifis?page=${page}&limit=${limit}`);
        const wifiData = responseWifi.data;
        setWifi(wifiData);
        console.log("Wifi: ", wifiData);
      } catch (error) {
        console.log("error :", error);
      }
    };
    getWifi();
  }, [page]);

  const handleDelete = async (id) => {
    try {
      const confirm = await ModalDelete();
      if (confirm) {
        await api.delete(`admin/wifi/` + id);
        location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredWifi = wifi.data?.filter((wifi) =>
    wifi.provider_name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  return (
    <div className="wifi py-4 px-4">
      <FontBold $32>WIFI</FontBold>
      <div className="row">
        <div className="col-9">
          <form className="search-wifi">
            <Search placeholder="Cari Wifi..." onChange={handleSearch} />
          </form>
        </div>
        <div className="col-3">
          <div className="btn-add d-flex justify-content-end pt-3">
            <Link to="/admin/layanan/wifi/tambah">
              <Button
                style={{ backgroundColor: "#2B3990", borderRadius: "16px" }}
              >
                + Tambah WIFI
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="justify-content-around rounded mt-2" style={{ height: '490px' }}>
        <table
          className="table text-center table-hover mt-2 rounded"
          id={styles.tableBorder}
          style={{ borderSpacing: "1em" }}
        >
          <thead
            className="text-dark"
            id={styles.thead}
            style={{ backgroundColor: "#B8BDDA" }}
          >
            <tr>
              <th scope="col" className="col-4">
                Kode WIFI
              </th>
              <th scope="col" className="col-4">
                Jenis WIFI
              </th>
              <th scope="col" className="col-4"></th>
            </tr>
          </thead>

          {filteredWifi == 0 && (
            <tr>
                  <td colSpan="3" className="text-center fst-italic fs-5 py-3">
                        Data WIFI tidak ada
                  </td>
            </tr>
          )}
          {filteredWifi?.map((wifi) => (
            <tbody key={wifi.id}>
              <tr className={styles.rowTable}>
                <td>{wifi.provider_name}</td>
                <td>{wifi.product_type}</td>
                <td>
                  <Link to={`/admin/layanan/wifi/edit/${wifi.id}`}>
                    <IconContext.Provider
                      value={{ color: "#1C1B1F", size: "1.5rem" }}
                    >
                      <VscEdit className={styles.editIcon} id="editIcon" />
                    </IconContext.Provider>
                  </Link>
                  <Link to="#" onClick={(e) => handleDelete(wifi.id)}>
                    <IconContext.Provider
                      value={{ color: "#D13217", size: "1.5rem" }}
                    >
                      <VscTrash className={styles.trashIcon} id="deleteIcon" />
                    </IconContext.Provider>
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className="row d-flex align-items-center pagination">
        <div className="col-4 text-start">
          <button
            className="btn-pagination"
            disabled={page === 1}
            type="button"
            onClick={() => setPage((prev) => prev - 1)}
          >
            <IoIosArrowBack className="icon-prev" />
            Sebelumnya
          </button>
        </div>
        <div className="col-4">
          <p className="text-center my-auto page-title">Halaman {page}</p>
        </div>
        <div className="col-4 text-end">
          <button
            className="btn-pagination"
            type="button"
            disabled={wifi.data?.length < limit - 1}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Berikutnya
            <IoIosArrowForward className="icon-next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wifi;
