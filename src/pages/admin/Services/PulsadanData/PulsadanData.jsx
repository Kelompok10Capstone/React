import api from "../../../../config/https";

import "./PulsadanData.css"
import styles from "./PulsadanData.module.css"

import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { VscEdit, VscTrash } from "react-icons/vsc"
import { AiOutlinePlus } from "react-icons/ai"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { IconContext } from "react-icons";
import { Button } from "react-bootstrap";

import FontBold from "../../../../elements/FontBold/FontBold";
import ModalDelete from "../../../../elements/Modal/ModalDelete";
import Search from "../../../../elements/Search/Search";

const PulsadanData = () => {

    // search
    const [filter, setFilter] = useState([]);
    const [query, setQuery] = useState('');
    
    const [data, setData] = useState();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const navigate = useNavigate()

    // Get
        useEffect(() => {
            const getData = async () => {
                try {
                    const response = await api.get(`admin/ppd?type=&page=${page}&limit=${limit}`);
    
                    const dataTopup = response.data.data
                    setData(dataTopup)
                    console.log('Data Topup :', dataTopup);
                    
                } catch (error) {
                    console.log('Error : ', error);
                }
            }
            getData();
        },[page, limit]);

    

    // Delete
    const handleDelete = async (id, event) => {
        event.preventDefault();
        const confirm = await ModalDelete();
        if (confirm) {
          await api.delete(`admin/ppd/` + id)
          .then(res =>{
            // navigate("/admin/layanan/pulsadandata");
            location.reload();
          }).catch (err => console.log(err));  
      }
    }


    // search 
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const filteredPpd = data?.filter((ppd) =>
      ppd.provider.toLowerCase().includes 
      (searchQuery.toLocaleLowerCase())
    );

    return(
        <div className="pulsa-dan-data py-4 px-4">
                        <div className="row">              
                            <FontBold $32>Pulsa & Data</FontBold>
                                <div className="col-9">
                                    <Search 
                                        placeholder='Cari Provider...'
                                        onChange={handleSearch}
                                    />
                                </div>

                            <div className="col-3 d-md-flex justify-content-md-end pt-3">
                                <Link to={"/admin/layanan/pulsadandata/tambah"}>
                                    <Button
                                        style={{ backgroundColor: "#2B3990", borderRadius: "16px" }}
                                    >
                                        <AiOutlinePlus /> Tambah Provider
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="table-responsive shadow-sm table-wriper-ppd">
                            <table className="table table-hover mt-2 text-center" id={styles.tableBorder}>
                                <thead className="text-dark" style={{ backgroundColor: "#B8BDDA" }} id={styles.thead}>
                                    <tr className="" style={{ fontSize: "16px" }}>
                                        <th scope="col" className="col-2">Kode Pulsa & Data</th>
                                        <th scope="col" className="col-1">Provider</th>
                                        <th scope="col" className="col-1">Tipe</th>
                                        <th scope="col" className="col-1">Nama</th>
                                        <th scope="col" className="col-2">Harga</th>
                                        <th scope="col" className="col-2">Deskripsi produk</th>
                                        <th scope="col" className="col-1">Status Aktif</th>
                                        <th scope="col" className="col-2"></th>
                                    </tr>
                                </thead>
                                { filteredPpd?.map((ppd) => (
                                        <tbody key={ppd.id} id="table-body">
                                        <tr style={{ fontSize: "16px" }} className={styles.rowTable}>
                                            <td>{ppd.code}</td>
                                            <td>{ppd.provider}</td>
                                            <td>{ppd.type}</td>
                                            <td>{ppd.name}</td>
                                            <td>Rp. {ppd.price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</td>
                                            <td>{ppd.description}</td>
                                            <td>{ppd.is_active? "Aktif" : "Tidak Aktif"}</td>
                                        
                                            <td className="btn-hide-pulsadata btn-show-pulsadata">
                                                <Link to={`edit/${ppd.id}`}>
                                                    <IconContext.Provider value={{color:'#1C1B1F', size:'1.5rem'}}>
                                                        <VscEdit className={styles.editIcon}/>
                                                    </IconContext.Provider> 
                                                </Link>
                                                
                                                <Link to='#' onClick={(e) => handleDelete(ppd.id, e)}>
                                                    <IconContext.Provider value={{color:'#D13217', size:'1.5rem'}}>
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
                                className="btn-pagination "
                                disabled={page == 1}
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
                                        onClick={() => setPage((prev) => prev + 1)}
                                        disabled={data?.length < limit - 1}
                                    >
                                        Berikutnya
                                        <IoIosArrowForward className="icon-next" />
                                    </button>
                            </div>

                        </div>    
        </div>
    )
}

export default PulsadanData;