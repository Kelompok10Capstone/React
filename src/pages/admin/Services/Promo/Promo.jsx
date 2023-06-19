import { Link, useNavigate } from "react-router-dom";
import FontBold from "../../../../elements/FontBold/FontBold";
import {VscDiffAdded, VscEdit, VscTrash} from "react-icons/vsc" 
import { IconContext } from "react-icons";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import styles from "./Promo.module.css"
import ModalDelete from "../../../../elements/Modal/ModalDelete";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../../../../config/Api";
import Search from "../../../../elements/Search/Search";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Promo = () => {

  const [promo, setPromo] = useState([])
  const [searchQuery, setSearchQuery] = useState("");

  const [page, setPage] = useState(1);
  const limit = 10;

  const authToken = sessionStorage.getItem("Auth Token")

  useEffect(() => {
    
    const getPromo = async () => {
      try{
        const responsePromo = await axios.get(`${API_BASE}/discounts?page=${page}&limit=${limit}`, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })
        const promoData = responsePromo.data
        setPromo(promoData)
        console.log('data promo :', promoData)
      } catch (error) {
        console.log('error:', error)
      }
    }
    getPromo()
  }, [page])

  const handleDelete = async (id) => {
    console.log('id:', id)
    try{
      const confirm = await ModalDelete()
      if(confirm) {
        await axios.delete(`${API_BASE}/admin/discount/${id}`, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${authToken}`
          }
        })
        location.reload()
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPromo = promo.data?.filter((promo) =>
    promo.discount_code.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  return (
    
    <div className="promo py-4 px-4">
      <FontBold $32>Promo</FontBold>
      <div className="row">
        <div className="col-9">
        <form className="search-promo">
            <Search placeholder="Cari Kode Promo..." onChange={handleSearch} />
          </form>
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
              <th scope="row" className="col-2">Kode Diskon</th>
              <th scope="row" className="col-4">Deskripsi</th>
              <th scope="row" className="col-2">Gambar</th>
              <th scope="row" className="col-2">Nominal Diskon</th>
              <th scope="row" className="col-2"></th>
            </tr>
          </thead>
          {filteredPromo?.map((promo) => (
            <tbody key={promo.id}>
              <tr className={styles.rowTable}>
                <td>{promo.discount_code}</td>
                <td>{promo.description}</td>
                <td><img src={promo.image} alt="Diskon Image" style={{height:'3rem'}}/></td>
                <td>{promo.discount_price}</td>
                <td>
                  <Link to={`/admin/layanan/promo/edit/${promo.id}`}>
                    <IconContext.Provider
                      value={{ color: "#1C1B1F", size: "1.5rem" }}
                    >
                      <VscEdit className={styles.editIcon} />
                    </IconContext.Provider>
                  </Link>
                  <Link to="#" onClick={(e) => handleDelete(promo.id)}>
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
            disabled={promo.data?.length < limit-1}
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

export default Promo;

