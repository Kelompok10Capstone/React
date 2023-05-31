import { Link, Route, Routes, useNavigate } from "react-router-dom";
import FontBold from "../../../../elements/FontBold/FontBold";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_TRANSACTION_URL } from "../../../../config/Api";

import "./PulsadanData.css"

import { VscEdit, VscTrash } from "react-icons/vsc"
import { AiOutlinePlus } from "react-icons/ai"
import { IconContext } from "react-icons";
import Modal from "../../../../elements/Modal/Modal";

import Search from "../../../../elements/Search/Search";
import { Button } from "react-bootstrap";

const Transaction = () => {

    const [transaction, setTransactions] = useState([])

    useEffect(() => {
        // fetch dari api
        const getData = async () => {
            try {
                const responseTransaction = await axios.get(API_TRANSACTION_URL)
                const transactionsData = responseTransaction.data
                setTransactions(transactionsData)
                console.log('transaksi:', transactionsData)
            } catch (error) {
                console.log('Error : ', error)
            }
        }

        getData()

    }, [])

    // const navigate = useNavigate();

    // search 
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // Fungsi untuk melakukan pencarian pada tabel
    const searchTable = (event) => {
        const { value } = event.target;
        setSearchTerm(value);

        // Lakukan pencarian pada tabel mock API (data)
        const results = value.filter((transaction) =>
        transaction.name.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(results);
    };

    const handleDelete = () => {
        Modal()
    }

    return(
        <div className="pulsa-dan-data py-4 px-4">
                <div className="row">              
                    <FontBold $32>Pulsa & Data</FontBold>
                    <div className="col-9">
                        <Search 
                            placeholder='Cari Pulsa & Data...'
                        />
                    </div>

                    <div className="col-3 d-md-flex justify-content-md-end pt-3">
                        <Link to={"/admin/layanan/pulsadandata/tambah"}>
                            <Button
                                style={{ backgroundColor: "#2B3990", borderRadius: "16px" }}
                            >
                                <AiOutlinePlus /> Tambah Produk
                            </Button>
                        </Link>
                    </div>
                </div>

                        <div className="table-responsive shadow-sm">
                            <table className="table table-hover mt-2 text-center">
                                <thead className="text-dark" style={{ backgroundColor: "#B8BDDA" }}>
                                    <tr className="" style={{ fontSize: "16px" }}>
                                        <th scope="col">Kode Pulsa & Data</th>
                                        <th scope="col">Jenis Pulsa & Data</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>

                                {transaction.map((transaction) => (
                                    <tbody key={transaction.id} id="table-body">
                                        <tr style={{ fontSize: "16px" }}>
                                            <td>{transaction.id}</td>
                                            <td>{transaction.nama}</td>
                                            <td className="btn-hide-pulsadata btn-show-pulsadata">
                                                <Link to='/admin/layanan/pulsadandata/edit'>
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
        </div>
    )
}

export default Transaction;