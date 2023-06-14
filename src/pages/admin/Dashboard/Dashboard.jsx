import axios from "axios";
import ChartLine from "../../../elements/Chart/Chart";
import FontBold from "../../../elements/FontBold/FontBold"
import FontReguler from "../../../elements/FontReguler/FontReguler";
import styles from "./Dashboard.module.css"
import { useEffect, useState } from "react";
import { API_BASE, API_TRANSACTION_URL, API_USERS_URL } from "../../../config/Api";
import { Link } from "react-router-dom";
import iconPdam from "../../../../src/assets/img/iconPdam.png";
import iconPendidikan from "../../../../src/assets/img/iconPendidikan.png";
import iconPln from "../../../../src/assets/img/iconPln.png";
import iconPulsa from "../../../../src/assets/img/iconPulsa.png";
import iconTopup from "../../../../src/assets/img/iconTopup.png";
import iconTransfer from "../../../../src/assets/img/iconTransfer.png";
import iconWifi from "../../../../src/assets/img/iconWifi.png";
import userDummy from "../../../assets/img/userDummy.png"

const Dashboard = () => {

    const [users, setUsers] = useState([])
    const [transactions, setTransactions] = useState([])
    const [userCount, setUserCount] = useState(0)
    const [transactionCount, setTransactionCount] = useState(0)

    const limit = 100;
    const page = 1;

    const authToken = sessionStorage.getItem("Auth Token")
    // console.log(authToken);

    useEffect(() => {
        //fetch dari api
        const getUser = async () => {
            try {
                const responseUser = await axios.get(API_BASE.concat(`/admin/users?page=${page}&limit=${limit}`), {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    }
                })
                const usersData = responseUser.data
                setUsers(usersData)
                setUserCount(usersData.data.length)
                console.log('pengguna :', usersData)
                console.log('jumlah pengguna: ', userCount)
            } catch (error) {
                console.log('error :', error)
            }
        }

        getUser()

    }, [])

    return(
        <div className="dashboard py-2 mx-4" style={{overflow:'hidden',height:'100vh '}}>
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
                    <div className="statistik mt-2">
                        <div className="row">
                            <div className="col">
                                <FontBold $16>Statistik Transaksi</FontBold>
                            </div>
                        </div>
                        <ChartLine/>
                    </div>

                    {/* Daftar Teratas Layanan Pembelian */}
                    <div className="layanan mt-2">
                        <FontBold $16>Daftar Teratas Layanan Pembelian</FontBold>
                        <div className={styles.tableWrapper}>
                            <table className="table table-hover rounded shadow-sm" id={styles.tableBorder}>
                                <thead className="text-dark" style={{ backgroundColor: "#B8BDDA" }} id={styles.thead}>
                                    <tr>
                                        <th>Kode</th>
                                        <th>Nama</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                {transaksiTerakhir.map((transaction) => (
                                    <tbody key={transaction.kode}>
                                    <tr className={styles.rowUser}>
                                        <td>{transaction.kode}</td>
                                        <td>{transaction.layanan}</td>
                                        <td>{transaction.nominal}</td>
                                    </tr>
                                </tbody>
                                ))}
                            </table>
                        </div>
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
                                {users.data?.slice(0,7).map((user, index) => (
                                    <div key={index} className={styles.imgWrapper}>
                                        {user.image ? (
                                            <img
                                            className={styles.imgUser}
                                            src={user.image}
                                            alt={user.name}
                                            title={user.name}
                                            />
                                        ) : (
                                            <img
                                            className={styles.imgUser}
                                            src={userDummy}
                                            alt="User Image"
                                            />
                                        )}
                                        {/* <img className={styles.imgUser} src={user.image} alt={user.name} /> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Transaksi terakhir */}
                    <div className="transaksi mt-2 border rounded px-1">
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
    { kode: 'L1', icon: iconTopup, layanan: 'Top Up', nominal: 'Rp 20.000.000'},
    { kode: 'L2', icon: iconPulsa, layanan: 'Pulsa', nominal: 'Rp 20.000'},
    { kode: 'L3', icon: iconPln, layanan: 'PLN', nominal: 'Rp 20.000'},
    { kode: 'L4', icon: iconWifi, layanan: 'Wifi', nominal: 'Rp 200.000.000'},
    { kode: 'L5', icon: iconPdam, layanan: 'PDAM', nominal: 'Rp 20.000'},
    { kode: 'L6', icon: iconPendidikan, layanan: 'Pendidikan', nominal: 'Rp 520.000.000'},
    { kode: 'L7', icon: iconTransfer, layanan: 'Transfer', nominal: 'Rp 20.000'},
]

export default Dashboard;