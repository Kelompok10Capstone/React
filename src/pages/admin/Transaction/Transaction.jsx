import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import FontBold from "../../../elements/FontBold/FontBold";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_TRANSACTION_URL } from "../../../config/Api";
import { AiOutlineSearch } from "react-icons/ai"
import "./Transaction.css"
import { Nav, NavItem, Tab } from 'react-bootstrap'
import Search from "../../../elements/Search/Search";
import styles from "./Transaction.module.css"


const Transaction = () => {

    const [transaction, setTransactions] = useState([])

    // Sorting 
    const [collection, setCollection] = useState();

    // Search
    const [search, setSearch] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        // fetch dari api
        const getData = async () => {
            try {
                const responseTransaction = await axios.get(API_TRANSACTION_URL)
                const transactionsData = responseTransaction.data
                setTransactions(transactionsData)
                console.log('transaksi:', transactionsData)

                // search
                setSearch(transactionsData);

                // Sorting 
                setCollection([... new Set(transaction.map((item) => item.status))])

            } catch (error) {
                console.log('Error : ', error)
            }
        }


        getData()

    }, [])

    // Sorting 
    const filter = (itemStatus) => {
        const filterData = transaction.filter((item) => item.status === itemStatus)
        setTransactions(filterData)
    }

    console.log(collection)

    // Searching
    const handleSearch = (event) => {
        const getSearch = event.target.value;
        setQuery(getSearch);
        // console.log(getSearch);

        if (getSearch.length > 0) {
            const getSearch = event.target.value;
            const searchData = transaction.filter((item) => item.nama.toLowerCase().includes(getSearch) || item.status.toLowerCase().includes(getSearch));
            // const searchData = userData.filter(item => item.name.toLowerCase().includes() || item.email.toLowerCase().includes(e.target.value.toLowerCase()))
            setUserData(searchData);
        } else {
            setUserData(filter);
        }
        setQuery(getSearch);
    }


    // const navigate = useNavigate();

    // search 
    // const [searchTerm, setSearchTerm] = useState('');
    // const [searchResults, setSearchResults] = useState([]);

    // // Fungsi untuk melakukan pencarian pada tabel
    // const searchTable = (event) => {
    //     const { value } = event.target;
    //     setSearchTerm(value);

    //     // Lakukan pencarian pada tabel mock API (data)
    //     const results = value.filter((transaction) =>
    //         transaction.name.toLowerCase().includes(value.toLowerCase())
    //     );
    //     setSearchResults(results);
    // };

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

    return (
        <div className="dashboard mx-4 mt-4">
            <div className="row">
                <div className="col-12">

                    <div className="Transaksi">

                        <FontBold $32 className="mb-2">Transaksi</FontBold>

                        <div className="row justify-content-end">
                            <div className="col-5">
                                <form className="search-transaction">
                                    <Search
                                        placeholder='Cari Transaksi...'
                                        className='form-control'
                                        type="text"
                                        value={query}
                                        onChange={(e) => handleSearch(e)}
                                    />
                                </form>
                            </div>
                        </div>

                        <Tab.Container defaultActiveKey="semua">
                            <Nav variant="underline" className="nav-underline">

                                {/* percobaan lagi */}
                                {/* <Nav.Item>
                                    <Nav.Link>
                                        <button
                                            onClick={() => setTransactions(transaction)}
                                        >Semua
                                        </button>

                                        {
                                            collection?.map((transaction) => (
                                                <button onClick={() => { filter(transaction) }}>{transaction}</button>
                                            ))
                                        }
                                    </Nav.Link>
                                </Nav.Item> */}
                                {/* akhir */}

                                {/* percobaan lagi dan lagi */}
                                {/* <Nav.Item>
                                    <Nav.Link onClick={() => setTransactions(transaction)} eventKey="semua" href="#" className="nav-link-underline text-dark">Semua</Nav.Link>
                                </Nav.Item>

                                {
                                    collection?.map((item) => (
                                        <Nav.Item>
                                            <Nav.Link onClick={() => { filter(item) }} eventKey="selesai" className="nav-link-underline text-dark">{item}</Nav.Link>
                                        </Nav.Item>
                                    ))
                                }

                                {
                                    collection?.map((item) => (
                                        <Nav.Item>
                                            <Nav.Link onClick={() => { filter(item) }} eventKey="gagal" className="nav-link-underline text-dark">{item}</Nav.Link>
                                        </Nav.Item>
                                    ))
                                } */}
                                {/* akhir */}

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
                                    <div className='tb justify-content-around'>
                                        <div className="table-responsive table-wrapper mt-3">
                                            <table className="table table-hover" style={{ borderSpacing: "1em" }} id={styles.tableBorder}>
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

                                                {transaction?.map((transaction) => (
                                                    <tbody key={transaction.id} id="table-body">
                                                        <tr style={{ fontSize: "16px" }} className="row-transaction" id={styles.rowTransaction}>
                                                            <td className="text-center">
                                                                {transaction.id}
                                                            </td>
                                                            <td>{transaction.nama}</td>
                                                            <td>{transaction.product}</td>
                                                            <td>{transaction.createdAt}</td>
                                                            <td>{transaction.total}</td>
                                                            <td className="text-danger">{transaction.status}</td>
                                                            {/* <td className={transaction.status === 'Berhasil' ? 'success' : 'failure'}>{transaction.status}</td> */}
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
                                    <div className='tb justify-content-around'>
                                        <div className="table-responsive table-wrapper mt-3">
                                            <table className="table table-hover" style={{ borderSpacing: "1em" }} id={styles.tableBorder}>
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

                                                {transaction?.map((transaction) => (
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
                                    <div className='tb justify-content-around'>
                                        <div className="table-responsive table-wrapper mt-3">
                                            <table className="table table-hover" style={{ borderSpacing: "1em" }} id={styles.tableBorder}>
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

                                                {transaction?.map((transaction) => (
                                                    <tbody key={transaction.id} id="table-body">
                                                        <tr style={{ fontSize: "16px" }} className="row-transaction" id={styles.rowTransaction}>
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