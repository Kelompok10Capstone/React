import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { Nav, NavItem, Tab } from 'react-bootstrap'
import { AiOutlineSearch } from "react-icons/ai"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

import axios from "axios";
import { API_BASE, API_TRANSACTION_URL } from "../../../config/Api";

import "./Transaction.css"
import styles from "./Transaction.module.css"

import FontBold from "../../../elements/FontBold/FontBold";
import Search from "../../../elements/Search/Search";

const Transaction = () => {

    // const [transaction, setTransactions] = useState([])

    // Sorting 
    // const [collection, setCollection] = useState();

    // Search
    // const [search, setSearch] = useState([]);
    // const [query, setQuery] = useState('');

    // useEffect(() => {
    //     // fetch dari api
    //     const getData = async () => {
    //         try {
    //             const responseTransaction = await axios.get(API_TRANSACTION_URL)
    //             const transactionsData = responseTransaction.data
    //             setTransactions(transactionsData)
    //             console.log('transaksi:', transactionsData)

    //             // search
    //             setSearch(transactionsData);

    //             // Sorting 
    //             setCollection([... new Set(transaction.map((item) => item.status))])

    //         } catch (error) {
    //             console.log('Error : ', error)
    //         }
    //     }


    //     getData()

    // }, [])

    // Sorting 
    // const filter = (itemStatus) => {
    //     const filterData = transaction.filter((item) => item.status === itemStatus)
    //     setTransactions(filterData)
    // }

    // console.log(collection)

    // Searching
    // const handleSearch = (event) => {
    //     const getSearch = event.target.value;
    //     setQuery(getSearch);
    //     // console.log(getSearch);

    //     if (getSearch.length > 0) {
    //         const getSearch = event.target.value;
    //         const searchData = transaction.filter((item) => item.nama.toLowerCase().includes(getSearch) || item.status.toLowerCase().includes(getSearch));
    //         // const searchData = userData.filter(item => item.name.toLowerCase().includes() || item.email.toLowerCase().includes(e.target.value.toLowerCase()))
    //         setUserData(searchData);
    //     } else {
    //         setUserData(filter);
    //     }
    //     setQuery(getSearch);
    // }


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

    // get

    const [data, setDataTransaction] = useState();
    const [proses, setProses] = useState();
    const [berhasil, setBerhasil] = useState();
    const [gagal, setGagal] = useState();

    const authToken = sessionStorage.getItem('Auth Token');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState([]);
    const [resposePage, setResponsePage] = useState('');
    const [resposeLimit, setResponseLimit] = useState('');
    const [status, setStatus] = useState('');
    const [product, setProduct] = useState('');

    const getTransaction = async () => {
        try {
            const response = await axios.get(`${API_BASE}/admin/transactions/?page=${page}&limit=${limit}`, {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });

            const transactionData = response.data.data
            setDataTransaction(transactionData)
            setResponsePage(response.data.pagination);
            console.log(response);
            console.log('Pagination :', resposePage);
            console.log('Transaction data :', transactionData);
            setFilter(transactionData);

        } catch (error) {
            console.log('Error : ', error);
        }
    }

    const getTransactionByQuery = async () => {
        try {
            const response = await axios.get(`${API_BASE}/admin/transactions/search/?query=${query}&page=${page}&limit=${limit}`, {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });

            const transactionData = response.data.data
            setDataTransaction(transactionData)
            setResponsePage(response.data.pagination);
            console.log(response);
            console.log('Pagination :', resposePage);
            console.log('Transaction status :', transactionData);
            setFilter(transactionData);

        } catch (error) {
            console.log('Error : ', error);
        }
    }

    useEffect(() => {
        console.log('ini Query: ', query);
        if (query.length > 0) {
            getTransactionByQuery();
        } else {
            getTransaction();
        }


    }, [page])

    const handleSearch = (event) => {
        const getSearch = event.target.value;
        setQuery(event.target.value.toLowerCase())
        console.log('Query :', getSearch);
        if (getSearch.length > 0) {
            getTransactionByQuery();
        } else {
            getTransaction();
        }
    }

    // tabel berhasil 
    useEffect(() => {
        const getBerhasil = async () => {
            try {
                const responseBerhasil = await axios.get(`${API_BASE}/admin/transactions/product/?product=topup&status=successful&page=1&limit=10`, {
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    }
                });

                const statusBerhasil = responseBerhasil.data.data
                setBerhasil(statusBerhasil)
                console.log('Status Berhasil :', statusBerhasil);
                setFilter(statusBerhasil);
            } catch (error) {
                console.log('Error : ', error);
            }
        }
        getBerhasil();
    });

    // tabel proses
    useEffect(() => {
        const getProses = async () => {
            try {
                const responseProses = await axios.get(`${API_BASE}/admin/transactions/product/?product=topup&status=processing&page=1&limit=10`, {
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    }
                });

                const statusProses = responseProses.data.data
                setProses(statusProses)
                console.log('Status Proses :', statusProses);
                setFilter(statusProses);
            } catch (error) {
                console.log('Error : ', error);
            }
        }
        getProses();
    });

    // tabel gagal
    useEffect(() => {
        const getGagal = async () => {
            try {
                const responseGagal = await axios.get(`${API_BASE}/admin/transactions/product/?product=&status=unpaid&page=1&limit=10`, {
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    }
                });

                const statusGagal = responseGagal.data.data
                setGagal(statusGagal)
                console.log('Status Proses :', statusGagal);
                setFilter(statusGagal);
            } catch (error) {
                console.log('Error : ', error);
            }
        }
        getGagal();
    });


    // const search = (data) => {
    //     return data.filter((item) => item.name.toLowerCase().includes(query));
    // };

    // const handleSearch = (event) => {
    //     const getSearch = event.target.value;
    //     setQuery(getSearch);

    //     if (getSearch.length > 0) {
    //         const getSearch = event.target.value;
    //         const searchData = data.filter((item) => item.product_type.toLowerCase().includes(getSearch) ||
    //             item.status.toLowerCase().includes(getSearch));
    //         // setDataTransaction(searchData);
    //     } else {
    //         setDataTransaction(filter);
    //     }
    //     setQuery(getSearch);
    //     getTransaction();
    // }

    // const cari = (e) => {
    //     if (e.target.value == '') {
    //         setDataTransaction(filter)
    //     } else {
    //         const filterResult = setDataTransaction.filter(item => item.product_type.toLowerCase().includes(e.target.value.toLowerCase()))
    //         setDataTransaction(filterResult);
    //     }
    //     setQuery(e.target.value);
    // }

    const formatter = new Intl.DateTimeFormat("id", {
        year: "numeric",
        month: "long",
        day: "2-digit",
    });

    // color status
    const getStatusColor = (status) => {
        switch (status) {
            case 'successful':
                return 'green';
            case 'processing':
                return 'blue';
            case 'unpaid':
                return 'red';
            default:
                return 'black';
        }
    };

    // mengelompokan status di tabel
    // const berhasil = data && data.filter((transaction) => transaction.status === 'successful');
    // const gagal = data && data.filter((transaction) => transaction.status === 'unpaid');
    // const diproses = data && data.filter((transaction) => transaction.status === 'processing');

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
                                        // onChange={(e) => setQuery(e.target.value)}
                                        // value={query}
                                        onChange={(e) => handleSearch(e)}
                                    // onInput={handleSearch}
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
                                    <Nav.Link eventKey="proses" className="nav-link-underline text-dark">Proses</Nav.Link>
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

                                                {data?.map((transaction) => (
                                                    <tbody key={transaction.id} id="table-body">
                                                        <tr style={{ fontSize: "16px" }} className="row-transaction" id={styles.rowTransaction}>
                                                            <td className="text-center">
                                                                {transaction.id.slice(0, 9)}
                                                            </td>
                                                            <td>{transaction.product_detail.customer_name}</td>

                                                            <td>{transaction.product_type}</td>

                                                            <td>{formatter.format(new Date(transaction.created_at))}</td>
                                                            <td>Rp. {transaction.total_price}</td>

                                                            <td style={{ color: getStatusColor(transaction.status) }}>{transaction.status}</td>

                                                            <td className="text-align-justify" style={{ wordWrap: "break-word" }}>{transaction.product_detail.description}</td>
                                                        </tr>
                                                    </tbody>
                                                ))}
                                            </table>
                                        </div>

                                        {/* <div className="row d-flex align-items-center pagination">
                                            <div className="col-4 text-start">
                                                <button
                                                    className="btn-pagination"
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
                                                >
                                                    Berikutnya
                                                    <IoIosArrowForward className="icon-next" />
                                                </button>
                                            </div>
                                        </div> */}

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

                                                {berhasil?.map((transaction) => (
                                                    <tbody key={transaction.id} id="table-body">
                                                        <tr style={{ fontSize: "16px" }} className="row-transaction" id={styles.rowTransaction}>
                                                            <td className="text-center">
                                                                {transaction.id.slice(0, 9)}
                                                            </td>
                                                            <td>{transaction.product_detail.customer_name}</td>
                                                            <td>{transaction.product_type}</td>
                                                            <td>{formatter.format(new Date(transaction.created_at))}</td>
                                                            <td>Rp. {transaction.total_price}</td>
                                                            <td className="text-success">{transaction.status}</td>
                                                            <td className="text-align-justify" style={{ wordWrap: "break-word" }}>{transaction.keterangan}</td>
                                                        </tr>
                                                    </tbody>
                                                ))}
                                            </table>
                                        </div>
                                    </div>
                                </Tab.Pane>

                                {/* tabel proses */}
                                <Tab.Pane eventKey="proses" className="proses">
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

                                                {proses?.map((transaction) => (
                                                    <tbody key={transaction.id} id="table-body">
                                                        <tr style={{ fontSize: "16px" }} className="row-transaction" id={styles.rowTransaction}>
                                                            <td className="text-center">
                                                                {transaction.id.slice(0, 9)}
                                                            </td>
                                                            <td>{transaction.product_detail.customer_name}</td>
                                                            <td>{transaction.product_type}</td>
                                                            <td>{formatter.format(new Date(transaction.created_at))}</td>
                                                            <td>Rp. {transaction.total_price}</td>
                                                            <td style={{ color: "blue" }}>{transaction.status}</td>
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

                                                {gagal?.map((transaction) => (
                                                    <tbody key={transaction.id} id="table-body">
                                                        <tr style={{ fontSize: "16px" }} className="row-transaction" id={styles.rowTransaction}>
                                                            <td className="text-center">
                                                                {transaction.id.slice(0, 9)}
                                                            </td>
                                                            <td>{transaction.product_detail.customer_name}</td>
                                                            <td>{transaction.product_type}</td>
                                                            <td>{formatter.format(new Date(transaction.created_at))}</td>
                                                            <td>Rp. {transaction.total_price}</td>
                                                            <td style={{ color: "#ff0000" }}>{transaction.status}</td>
                                                            <td className="text-align-justify" style={{ wordWrap: "break-word" }}>{transaction.keterangan}</td>
                                                        </tr>
                                                    </tbody>
                                                ))}
                                            </table>
                                        </div>
                                    </div>
                                </Tab.Pane>

                                <div className="row d-flex align-items-center pagination">
                                    <div className="col-4 text-start">
                                        <button
                                            className="btn-pagination"
                                            disabled={resposePage.page == 1}
                                            type="button"
                                            onClick={() => setPage((prev) => prev - 1)}
                                        >
                                            <IoIosArrowBack className="icon-prev" />
                                            Sebelumnya
                                        </button>
                                    </div>

                                    <div className="col-4">
                                        <p className="text-center my-auto page-title">Halaman {resposePage.page}</p>
                                    </div>
                                    <div className="col-4 text-end">
                                        <button
                                            className="btn-pagination"
                                            type="button"
                                            onClick={() => setPage((prev) => prev + 1)}
                                        >
                                            Berikutnya
                                            <IoIosArrowForward className="icon-next" />
                                        </button>
                                    </div>
                                </div>

                            </Tab.Content>
                        </Tab.Container>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transaction;