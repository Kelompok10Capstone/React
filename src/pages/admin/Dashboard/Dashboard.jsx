import axios from "axios";
// import ChartLine from "../../../elements/Chart/Chart";
import FontBold from "../../../elements/FontBold/FontBold";
import FontReguler from "../../../elements/FontReguler/FontReguler";
import styles from "./Dashboard.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import iconPdam from "../../../../src/assets/img/iconPdam.png";
import iconPendidikan from "../../../../src/assets/img/iconPendidikan.png";
import iconPln from "../../../../src/assets/img/iconPln.png";
import iconPulsa from "../../../../src/assets/img/iconPulsa.png";
import iconTopup from "../../../../src/assets/img/iconTopup.png";
import iconTransfer from "../../../../src/assets/img/iconTransfer.png";
import iconWifi from "../../../../src/assets/img/iconWifi.png";
import iconBpjs from "../../../../src/assets/img/iconBpjs.png";
import userDummy from "../../../assets/img/userDummy.png";
import api from "../../../config/https";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const iconMap = {
  pdam: iconPdam,
  pendidikan: iconPendidikan,
  plnpost: iconPln,
  plnpre: iconPln,
  pulsa: iconPulsa,
  paket_data: iconPulsa,
  telkom: iconPulsa,
  topup: iconTopup,
  bpjsks: iconBpjs,
  wifi: iconWifi,
};

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [transaction, setTransaction] = useState(0);
  const [lastTransactions, setLastTransactions] = useState([]);
  const [userCount, setUserCount] = useState(0);
  const [transactionToday, setTransactionToday] = useState([]);
  const [topTransaction, setTopTransaction] = useState([]);
  const [totalTransactionPrice, setTotalTransactionPrice] = useState(0);
  const [transactionTodayCount, setTransactionTodayCount] = useState(0);
  const [incomeData, setIncomeData] = useState([]);

  const limit = 500;
  const page = 1;

  useEffect(() => {
    //fetch dari api
    const getUser = async () => {
      try {
        const responseUser = await api.get(
          `admin/users?page=${page}&limit=${limit}`
        );
        const usersData = responseUser.data;
        setUsers(usersData);
        setUserCount(usersData.data.length);
        console.log("pengguna :", usersData);
        console.log("jumlah pengguna: ", userCount);
      } catch (error) {
        console.log("error :", error);
      }
    };

    const getTransactionToday = async () => {
      try {
        const response = await api.get(`admin/transactions?page=1&limit=50`);

        const transactionToday = response.data.data;
        console.log("transaction : ", transactionToday);

        const today = new Date().toISOString().split("T")[0];
        // console.log("today:", today);
        const filteredTransactions = transactionToday.filter(
          (cekTransaction) =>
            cekTransaction.created_at.substring(0, 10) === today
        );
        console.log("filtered transactions: ", filteredTransactions);

        setTransactionToday(filteredTransactions);
        setTransactionTodayCount(filteredTransactions.length);
        console.log("Transaction Hari ini :", filteredTransactions);
        console.log(
          "Count Transaction Hari ini :",
          filteredTransactions.length
        );
      } catch (error) {
        console.log("Error : ", error);
      }
    };

    const getLastTransaction = async () => {
      try {
        const response = await api.get(`admin/transactions?page=1&limit=7`);

        const transactionData = response.data.data;
        setLastTransactions(transactionData);
        console.log("Transaction data :", transactionData);
      } catch (error) {
        console.log("Error : ", error);
      }
    };

    const getTopTranscation = async () => {
      try {
        const response = await api.get(
          "/admin/transactions/price/product/count"
        );

        const topTransactionData = response.data;
        setTopTransaction(topTransactionData);

        const totalPrice = topTransactionData.data.reduce(
          (total, transaction) => total + transaction.count_price,
          0
        );
        setTotalTransactionPrice(totalPrice);

        console.log("Transaksi teratas: ", topTransactionData);
        console.log("Total Transaksi: ", totalPrice);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    const getIncomeData = async () => {
      try {
        const responseIncome = await api.get(
          "/admin/transactions/price/month/count"
        );
        console.log("income data:", responseIncome);

        const incomeCountPrice = responseIncome.data.data?.map(item => item.count_price);
        setIncomeData(incomeCountPrice);
        console.log('data income bulanan:', incomeData)
      } catch (error) {
        console.log("ErrorL:", error);
      }
    };

    getUser();
    getTransactionToday();
    getLastTransaction();
    getTopTranscation();
    getIncomeData();
  }, []);

  const ChartLine = () => {
    const heightChart = 80;
  
    // const incomeData = [
    //   2000, 1200, 1500, 2500, 2000, 1800, 900, 2800, 1700, 3200, 3500, 2800,
    // ];
    // const expenseData = [
    //   1200, 900, 1000, 1300, 1000, 2300, 1400, 1900, 900, 3800, 1800, 2200,
    // ];
  
    const chartData = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Des",
      ],
      datasets: [
        {
          label: "Pendapatan",
          data: incomeData,
          borderColor: "#235FE5",
          backgroundColor: "#235FE5",
          fill: false,
        },
      ],
    };
  
    const options = {
      scales: {
        y: {
          ticks: {
            maxTicksLimit: 5,
            stepSize: 5000000,
          },
        },
      },
    };
  
    return <Line data={chartData} options={options} height={heightChart} />;
  };

  return (
    <div
      className="dashboard py-2 mx-4"
      style={{ overflow: "hidden", height: "100vh " }}
    >
      <div className="row">
        <div className="col-9">
          {/* card jumlah pengguna, transaksi hari ini, dan total transaksi */}
          <div className="row text-center my-2">
            <div className="col-4">
              <div className={styles.card1}>
                <FontReguler $16>Jumlah Pengguna</FontReguler>
                <FontBold $32>{userCount}</FontBold>
              </div>
            </div>
            <div className="col-4">
              <div className={styles.card2}>
                <FontReguler $16>Transaksi Hari Ini</FontReguler>
                <FontBold $32>{transactionTodayCount}</FontBold>
              </div>
            </div>
            <div className="col-4">
              <div className={styles.card3}>
                <FontReguler $16>Total Transaksi</FontReguler>
                <FontBold $32>
                  {totalTransactionPrice.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  })}
                </FontBold>
              </div>
            </div>
          </div>

          {/* Top Transaksi  */}
          <div className="statistik mt-2">
            <div className="row">
              <div className="col">
                <FontBold $16>Statistik Pendapatan Transaksi</FontBold>
              </div>
            </div>
            <ChartLine />
          </div>

          {/* Daftar Teratas Layanan Pembelian */}
          <div className="layanan mt-2" id={styles.tableWripperTop}>
            <FontBold $16>Daftar Teratas Layanan Pembelian</FontBold>
            <div className={styles.tableWrapper}>
              <table
                className="table table-hover rounded shadow-sm"
                id={styles.tableBorder}
              >
                <thead
                  className="text-dark"
                  style={{ backgroundColor: "#B8BDDA" }}
                  id={styles.thead}
                >
                  <tr>
                    <th scope="col" className="col-6">
                      Kode
                    </th>
                    <th scope="col" className="col-3">
                      Nama
                    </th>
                    <th scope="col" className="col-3">
                      Total
                    </th>
                  </tr>
                </thead>
                {topTransaction.data
                  ?.sort((a, b) => b.count_price - a.count_price)
                  .map((transaction) => (
                    <tbody key={transaction.id}>
                      <tr className={styles.rowUser}>
                        <td>{transaction.id}</td>
                        <td>{transaction.product}</td>
                        <td>
                          {transaction.count_price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                          })}
                        </td>
                      </tr>
                    </tbody>
                  ))}
              </table>
            </div>
          </div>
        </div>

        <div className="col-3">
          {/* Pengguna baru */}
          <div className="pengguna">
            <div className="row">
              <div className="col-9">
                <FontBold $16>Pengguna Baru</FontBold>
              </div>
              <div className={styles.imgContainer}>
                {users.data?.slice(0, 7).map((user, index) => (
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
              {lastTransactions?.map((transaction) => (
                <tbody key={transaction.id}>
                  <tr>
                    <td scope="col" className="col-2">
                      <img
                        src={iconMap[transaction.product_type]}
                        alt={transaction.product_type}
                        height={24}
                      />
                    </td>
                    <td
                      scope="col"
                      className="col-4"
                      style={{ textAlign: "left" }}
                    >
                      {transaction.product_type}
                    </td>
                    <td
                      scope="col"
                      className="col-6"
                      style={{ textAlign: "right", fontWeight: "700" }}
                    >
                      {transaction.total_price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      })}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div className="row m-2">
              <Link to="/admin/transaksi" style={{ textDecoration: "none" }}>
                <div
                  className="col text-center"
                  style={{ border: "1px solid #2B3990", borderRadius: "8px" }}
                >
                  <FontReguler $16 style={{ color: "#2B3990" }}>
                    Lihat lainnya
                  </FontReguler>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
