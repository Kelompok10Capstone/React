import { Link, Route, Routes, useNavigate } from "react-router-dom";
import FontBold from "../../../../elements/FontBold/FontBold";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_TRANSACTION_URL } from "../../../../config/Api";
import {AiOutlineSearch} from "react-icons/ai"
import "./PulsadanData.css"
import { Nav, Tab } from 'react-bootstrap'
import {VscDiffAdded, VscEdit, VscTrash} from "react-icons/vsc"
import { IconContext } from "react-icons";
import Modal from "../../../../elements/Modal/Modal";
import Button from "../../../../elements/Button/Button";
import Input from "../../../../elements/Input/Input";

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
        <div className="dashboard mx-4">
            <div className="row">
                <div className="col-12">
                    
                    <div className="Transaksi">
                        
                        <FontBold $26 className="mb-2 pt-4">Pulsa & Data</FontBold>

                        <div className="d-flex py-3">
                            <div className="input-group">
                                
                                <Input
                                    className="form-control me-5 "
                                    type="search"
                                    placeholder="Cari TSEL, TRI, ..."
                                    ariallabel="Search"
                                    name="search"
                                    value={searchTerm}
                                    onChange={searchTable}
                                    // onChange={(e) => setQuery(e.target.value)}
                                />
                                
                            </div> 
                            <Link to={"/admin/layanan/pulsadandata/tambah"}>
                                <Button $addproduk className="text-white">  
                                        + Tambah Produk 
                                </Button>
                            </Link>
                        </div>


                        <Tab.Container defaultActiveKey="bank">
                            <Tab.Content>
                                {/* tabel bank */}
                                <Tab.Pane eventKey="bank" className="bank">
                                    <div className='bg-white shadow-sm justify-content-around rounded mt-2'>
                                    <div className="table-responsive">
                                        <table className="table table-hover mt-2 text-center"  id="table">
                                            <thead className="text-dark" style={{ backgroundColor: "#B8BDDA" }}>
                                            <tr className="" style={{ fontSize: "16px" }}>
                                                <th scope="col">Kode Produk</th>
                                                <th scope="col">Jenis</th>
                                                <th scope="col">Aksi</th>
                                            </tr>
                                            </thead>

                                            {transaction.map((transaction) => (
                                                <tbody key={transaction.id} id="table-body">
                                                    <tr style={{ fontSize: "16px" }}>
                                                        <td>{transaction.id}</td>
                                                        <td>{transaction.nama}</td>
                                                        <td>
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
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transaction;