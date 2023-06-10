import axios from "axios";
import ChartLine from "../../../elements/Chart/Chart";
import FontBold from "../../../elements/FontBold/FontBold"
import FontReguler from "../../../elements/FontReguler/FontReguler";
import styles from "./Dashboard.module.css"
import { useEffect, useState } from "react";
import { API_TRANSACTION_URL, API_USERS_URL } from "../../../config/Api";
import { Link } from "react-router-dom";
import iconPdam from "../../../../src/assets/img/iconPdam.png";
import iconPendidikan from "../../../../src/assets/img/iconPendidikan.png";
import iconPln from "../../../../src/assets/img/iconPln.png";
import iconPulsa from "../../../../src/assets/img/iconPulsa.png";
import iconTopup from "../../../../src/assets/img/iconTopup.png";
import iconTransfer from "../../../../src/assets/img/iconTransfer.png";
import iconWifi from "../../../../src/assets/img/iconWifi.png";

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
                <div className="col-9">

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
                        <table className="table table-hover mt-2 rounded shadow-sm" id={styles.tableBorder}>
                            <thead className="text-dark" style={{ backgroundColor: "#B8BDDA" }} id={styles.thead}>
                                <tr>
                                    <th>Kode</th>
                                    <th>Nama</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            {transactions.slice(0,5).map((transaction) => (
                                <tbody key={transaction.id}>
                                <tr className={styles.rowUser}>
                                    <td>{transaction.id}</td>
                                    <td>{transaction.product}</td>
                                    <td>{transaction.total}</td>
                                </tr>
                            </tbody>
                            ))}
                        </table>
                    </div>

                </div>

                <div className="col-3">

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
                            </div>
                        </div>
                    </div>

                    {/* Transaksi terakhir */}
                    <div className="transaksi mt-3 border rounded px-1">
                        <div className="row px-2">
                            <div className="col">
                                <FontBold $16>Transaksi Terakhir</FontBold>
                            </div>
                        </div>
                        <table className="table table-borderless text-center">
                            {transaksiTerakhir.map((transaction) => (
                                <tbody key={transaction.layanan}>
                                <tr>
                                    <td scope="col" className="col-2" ><img src={transaction.icon} alt={transaction.layanan} height={24} /></td>
                                    <td scope="col" className="col-4" style={{ textAlign: 'left' }}>{transaction.layanan}</td>
                                    <td scope="col" className="col-6" style={{ textAlign: 'right', fontWeight:'700' }}>{transaction.nominal}</td>
                                </tr>
                            </tbody>
                            ))}
                        </table>
                        <div className="row m-2">
                            <Link to='/admin/transaksi' style={{textDecoration:'none'}}>
                                <div className="col text-center" style={{border:'1px solid #2B3990', borderRadius:'8px'}}>
                                    <FontReguler $16 style={{color:'#2B3990'}}>Lihat lainnya</FontReguler>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

const transaksiTerakhir = [
    { icon: iconTopup, layanan: 'Top Up', nominal: 'Rp 20.000.000'},
    { icon: iconPulsa, layanan: 'Pulsa', nominal: 'Rp 20.000'},
    { icon: iconPln, layanan: 'PLN', nominal: 'Rp 20.000'},
    { icon: iconWifi, layanan: 'Wifi', nominal: 'Rp 200.000.000'},
    { icon: iconPdam, layanan: 'PDAM', nominal: 'Rp 20.000'},
    { icon: iconPendidikan, layanan: 'Pendidikan', nominal: 'Rp 520.000.000'},
    { icon: iconTransfer, layanan: 'Transfer', nominal: 'Rp 20.000'},
]

export default Dashboard;