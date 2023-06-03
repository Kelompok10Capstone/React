import { Link, Route, Routes, useNavigate } from "react-router-dom";
import FontBold from "../../../elements/FontBold/FontBold";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_TRANSACTION_URL } from "../../../config/Api";
import {AiOutlineSearch} from "react-icons/ai"
import "./Transaction.css"
import { Nav, Tab } from 'react-bootstrap'
import Search from "../../../elements/Search/Search";
import styles from "./Transaction.module.css"


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

    // search ke 2
    // const [query, setQuery] = useState("");

    // const search = (data) => {
    //     return data.filter((item) => item.nama.toLocaleLowerCase().includes(query));
    // }

    // untuk jenis status 
    // variabel untuk setiap jenis status
    // const semuaStatus = [];
    // const selesaiStatus = [];
    // const gagalStatus = [];

    // Mengelompokan data berdasarkan jenis status 
    // transaction.forEach(transaction => {
    //     if (transaction.status === 'semua') {
    //         semuaStatus.push(transaction);
    //     } else if (transaction.status === 'selesai') {
    //         selesaiStatus.push(transaction);
    //     } else if (transaction.status === 'gagal'){
    //         gagalStatus.push(transaction);
    //     }
    // })

    return(
        <div className="dashboard mx-4 mt-4">
            <div className="row">
                <div className="col-12">
                    
                    <div className="Transaksi">
                        
                        <FontBold $32 className="mb-2">Transaksi</FontBold>

                        <div className="row justify-content-end">
                            <div className="col-5">
                                <form className="search-transaction">
                                    <Search
                                        placeholder='Cari Transaksi'
                                    />
                                </form>
                            </div>
                        </div>

                        <Tab.Container defaultActiveKey="semua">
                            <Nav variant="underline" className="nav-underline">
                                <Nav.Item>
                                    <Nav.Link eventKey="semua" href="#" className="nav-link-underline text-dark">Semua</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="selesai" className="nav-link-underline text-dark">Selesai</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="gagal" className="nav-link-underline text-dark">Gagal</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                {/* tabel semua */}
                                <Tab.Pane eventKey="semua" className="home">
                                    <div className='bg-white shadow-sm justify-content-around rounded mt-2'>
                                    <div className="table-responsive">
                                        <table className="table table-hover mt-2" style={{ borderSpacing: "1em" }} id={styles.tableBorder}>
                                            <thead className="text-dark" style={{ backgroundColor: "#B8BDDA" }} id={styles.thead}>
                                            <tr className="">
                                                <th scope="col" className="col-1 text-center">Kode</th>
                                                <th scope="col" className="col-2">Nama</th>
                                                <th scope="col" className="col-1">Jenis</th>
                                                <th scope="col" className="col-2">Tanggal</th>
                                                <th scope="col" className="col-1">Total</th>
                                                <th scope="col" className="col-1">Status</th>
                                                <th scope="col" className="col-4"></th>
                                            </tr>
                                            </thead>

                                            {transaction.map((transaction) => (
                                                <tbody key={transaction.id} id="table-body">
                                                    <tr style={{ fontSize: "16px" }}  className="row-transaction" id={styles.rowTransaction}>
                                                        <td className="text-center">
                                                            {transaction.id}
                                                        </td>
                                                        <td>{transaction.nama}</td>
                                                        <td>{transaction.product}</td>
                                                        <td>{transaction.createdAt}</td>
                                                        <td>{transaction.total}</td>
                                                        <td className="text-danger">{transaction.status}</td>
                                                        <td className="text-align-justify" style={{ wordWrap: "break-word" }}>{transaction.keterangan}</td>
                                                    </tr>
                                                </tbody>
                                            ))}
                                        </table>
                                    </div>      
                                </div>
                                </Tab.Pane>

                                {/* tabel selesai */}
                                <Tab.Pane eventKey="selesai" className="selesai">
                                <div className='bg-white shadow-sm justify-content-around rounded mt-2'>
                                    <div className="table-responsive">
                                        <table className="table table-hover mt-2 rounded " style={{ borderSpacing: "1em" }} id={styles.tableBorder}>
                                            <thead className="text-dark" style={{ backgroundColor: "#B8BDDA" }} id={styles.thead}>
                                            <tr className="" style={{ fontSize: "16px" }}>
                                            <th scope="col" className="col-1 text-center">Kode</th>
                                                <th scope="col" className="col-2">Nama</th>
                                                <th scope="col" className="col-1">Jenis</th>
                                                <th scope="col" className="col-2">Tanggal</th>
                                                <th scope="col" className="col-1">Total</th>
                                                <th scope="col" className="col-1">Status</th>
                                                <th scope="col" className="col-4"></th>
                                            </tr>
                                            </thead>

                                            {transaction.map((transaction) => (
                                                <tbody key={transaction.id} id="table-body">
                                                    <tr style={{ fontSize: "16px" }} className="row-transaction" id={styles.rowTransaction}>
                                                        <td className="text-center">
                                                            {transaction.id}
                                                        </td>
                                                        <td>{transaction.nama}</td>
                                                        <td>{transaction.product}</td>
                                                        <td>{transaction.createdAt}</td>
                                                        <td>{transaction.total}</td>
                                                        <td className="text-success">{transaction.status}</td>
                                                        <td className="text-align-justify" style={{ wordWrap: "break-word" }}>{transaction.keterangan}</td>                                                       
                                                    </tr>
                                                </tbody>
                                            ))}
                                        </table>
                                    </div>      
                                </div>
                                </Tab.Pane>

                                {/* tabel gagal */}
                                <Tab.Pane eventKey="gagal" className="gagal">
                                <div className='bg-white shadow-sm justify-content-around rounded mt-2'>
                                    <div className="table-responsive">
                                        <table className="table table-hover mt-2 rounded " style={{ borderSpacing: "1em" }} id={styles.tableBorder}>
                                            <thead className="text-dark" style={{ backgroundColor: "#B8BDDA" }} id={styles.thead}>
                                            <tr className="" style={{ fontSize: "16px" }} >
                                            <th scope="col" className="col-1 text-center">Kode</th>
                                                <th scope="col" className="col-2">Nama</th>
                                                <th scope="col" className="col-1">Jenis</th>
                                                <th scope="col" className="col-2">Tanggal</th>
                                                <th scope="col" className="col-1">Total</th>
                                                <th scope="col" className="col-1">Status</th>
                                                <th scope="col" className="col-4"></th>
                                            </tr>
                                            </thead>

                                            {transaction.map((transaction) => (
                                                <tbody key={transaction.id} id="table-body">
                                                    <tr style={{ fontSize: "16px" }}  className="row-transaction" id={styles.rowTransaction}>
                                                        <td className="text-center">
                                                            {transaction.id}
                                                        </td>
                                                        <td>{transaction.nama}</td>
                                                        <td>{transaction.product}</td>
                                                        <td>{transaction.createdAt}</td>
                                                        <td>{transaction.total}</td>
                                                        <td className="text-danger">{transaction.status}</td>
                                                        <td className="text-align-justify" style={{ wordWrap: "break-word" }}>{transaction.keterangan}</td>
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