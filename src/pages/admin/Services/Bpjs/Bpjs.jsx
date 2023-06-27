import { IconContext } from "react-icons";
import FontBold from "../../../../elements/FontBold/FontBold";
import { VscDiffAdded, VscEdit, VscTrash } from "react-icons/vsc";
import { Link } from "react-router-dom";
import ModalDelete from "../../../../elements/Modal/ModalDelete";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import styles from "./Bpjs.module.css";
import Search from "../../../../elements/Search/Search";
import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import api from "../../../../config/https";

const Bpjs = () => {
  const [bpjs, setBpjs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    const getBpjs = async () => {
      try {
        const responseBpjs = await api.get(
          `insurances?page=${page}&limit=${limit}`
        );
        const bpjsData = responseBpjs.data;
        setBpjs(bpjsData);
        console.log("Bpjs :", bpjsData);
      } catch (error) {
        console.log("error :", error);
      }
    };
    getBpjs();
  }, [page]);

  // delete
  const handleDelete = async (id) => {
    try {
      const confirm = await ModalDelete();
      if (confirm) {
        await api.delete(`admin/insurance/` + id);
        location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBpjs = bpjs.data?.filter((bpjs) =>
    bpjs.product_type.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  return (
    <div className="bpjs py-4 px-4">
      <FontBold $32>BPJS</FontBold>
      <div className="row">
        <div className="col-9">
          <form className="search-bpjs">
            <Search placeholder="Cari BPJS..." onChange={handleSearch} />
          </form>
        </div>
        <div className="col-3">
          <div className="btn-add d-flex justify-content-end pt-3">
            <Link to="/admin/layanan/bpjs/tambah">
              <Button
                style={{ backgroundColor: "#2B3990", borderRadius: "16px" }}
              >
                + Tambah BPJS
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white justify-content-around rounded mt-2">
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
                Kode BPJS
              </th>
              <th scope="col" className="col-4">
                Jenis BPJS
              </th>
              <th scope="col" className="col-4"></th>
            </tr>
          </thead>
          {filteredBpjs?.map((bpjs) => (
            <tbody key={bpjs.id}>
              <tr className={styles.rowTable}>
                <td>{bpjs.provider_name}</td>
                <td>{bpjs.product_type}</td>
                <td>
                  <Link to={`/admin/layanan/bpjs/edit/${bpjs.id}`}>
                    <IconContext.Provider
                      value={{ color: "#1C1B1F", size: "1.5rem" }}
                    >
                      <VscEdit className={styles.editIcon} />
                    </IconContext.Provider>
                  </Link>
                  <Link to="#" onClick={(e) => handleDelete(bpjs.id)}>
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
            disabled={bpjs.data?.length < limit - 1}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Berikutnya
            <IoIosArrowForward className="icon-next" />
          </button>
        </div>
      </div>
    </div>
  );

export default Bpjs;
