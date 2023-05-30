import axios from "axios";
import ChartLine from "../../../elements/Chart/Chart";
import FontBold from "../../../elements/FontBold/FontBold"
import FontReguler from "../../../elements/FontReguler/FontReguler";
import styles from "./Dashboard.module.css"
import { useEffect, useState } from "react";
import { API_TRANSACTION_URL, API_USERS_URL } from "../../../config/Api";
import { Link } from "react-router-dom";

const Dashboard = () => {

    const [users, setUsers] = useState([])
    const [transactions, setTransactions] = useState([])
    const [userCount, setUserCount] = useState(0)
    const [transactionCount, setTransactionCount] = useState(0)

    useEffect(() => {

        //fetch dari api
        const getData = async () => {
            try {
                const responseUser = await axios.get(API_USERS_URL)
                const usersData = responseUser.data
                setUserCount(usersData.length)
                setUsers(usersData)
                console.log('users:', usersData)
                console.log('Jumlah user:', userCount)

                const responseTransaction = await axios.get(API_TRANSACTION_URL)
                const transactionsData = responseTransaction.data
                setTransactionCount(transactionsData.length)
                setTransactions(transactionsData)
                console.log('transaksi:', transactionsData)
                console.log('Jumlah transaksi:', transactionCount)
            } catch (error) {
                console.error('Error : ' , error)
            }
        }

        getData()

    }, [])

    return(
        <div className="dashboard py-4 mx-4">
            <div className="row">
                <div className="col-8">

                    {/* card jumlah pengguna, transaksi hari ini, dan total transaksi */}
                    <div className="row text-center my-2">
                        <div className="col-4">
                            <div className={styles.card1}>
                                <FontReguler $16 >Jumlah Pengguna</FontReguler>
                                <FontBold $32 >{userCount}</FontBold>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={styles.card2}>
                                    <FontReguler $16 >Transaksi Hari Ini</FontReguler>
                                    <FontBold $32 >600</FontBold>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={styles.card3}>
                                <FontReguler $16 >Total Transaksi</FontReguler>
                                <FontBold $32 >{transactionCount}</FontBold>
                            </div>
                        </div>
                    </div>

                    {/* Statistik transaksi */}
                    <div className="statistik mt-3">
                        <div className="row">
                            <div className="col">
                                <FontBold $16>Statistik Transaksi</FontBold>
                            </div>
                        </div>
                        <ChartLine/>
                    </div>

                    {/* Daftar Teratas Layanan Pembelian */}
                    <div className="layanan mt-3">
                        <FontBold $16>Daftar Teratas Layanan Pembelian</FontBold>
                        <table className="table table-hover mt-2 rounded shadow-sm">
                            <thead className="text-dark" style={{ backgroundColor: "#B8BDDA" }}>
                                <tr>
                                    <th>Kode</th>
                                    <th>Nama Produk</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            {transactions.map((transaction) => (
                                <tbody key={transaction.id}>
                                <tr>
                                    <td>{transaction.id}</td>
                                    <td>{transaction.product}</td>
                                    <td>{transaction.total}</td>
                                </tr>
                            </tbody>
                            ))}
                        </table>
                    </div>

                </div>

                <div className="col-4">

                    {/* Pengguna baru */}
                    <div className="pengguna" >
                        <div className="row">
                            <div className="col-9">
                                <FontBold $16>Pengguna Baru</FontBold>
                            </div>
                            <div className={styles.imgContainer}>
                                {users.slice(0,7).map((user, index) => (
                                    <div key={index} className={styles.imgWrapper}>
                                        <img className={styles.imgUser} src={user.avatar} alt={user.name} />
                                    </div>
                                ))}
                                <Link to='/admin/pengguna' style={{textDecoration:'none'}}>
                                    <FontBold $16 style={{color:'#218EBC', marginLeft:'25px'}}>Lainnya</FontBold>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Transaksi terakhir */}
                    <div className="transaksi mt-3 border rounded px-1">
                        <div className="row px-2">
                            <div className="col-8">
                                <FontBold $16>Transaksi Terakhir</FontBold>
                            </div>
                            <div className="col-4 d-flex justify-content-end">
                            <Link to='/admin/transaksi' className={styles.lainnya}>
                                <FontBold $16 style={{color:'#218EBB'}}>Lainnya</FontBold>
                            </Link>
                            </div>
                        </div>
                        <table className="table table-borderless text-center">
                            {transactions.map((transaction) => (
                                <tbody key={transaction.id}>
                                <tr>
                                    <td><img src={transaction.gambar} alt={transaction.nama} width={46} /></td>
                                    <td>{transaction.layanan}</td>
                                    <td>{transaction.total}</td>
                                </tr>
                            </tbody>
                            ))}
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard;