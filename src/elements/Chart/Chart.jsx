// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { useEffect } from "react";
// import api from "../../config/https";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// useEffect(() => {
//   const getIncomeData = async () => {
//     try {
//       const responseIncome = await api.get(
//         "/admin/transactions/price/month/count"
//       );
//       console.log("income data:", responseIncome);
//     } catch (error) {
//       console.log("ErrorL:", error);
//     }
//   };
//   getIncomeData();
// });

// const ChartLine = () => {
//   const heightChart = 80;

//   const incomeData = [
//     2000, 1200, 1500, 2500, 2000, 1800, 900, 2800, 1700, 3200, 3500, 2800,
//   ];
//   const expenseData = [
//     1200, 900, 1000, 1300, 1000, 2300, 1400, 1900, 900, 3800, 1800, 2200,
//   ];

//   const chartData = {
//     labels: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "Mei",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Okt",
//       "Nov",
//       "Des",
//     ],
//     datasets: [
//       {
//         label: "Pendapatan",
//         data: incomeData,
//         borderColor: "#235FE5",
//         backgroundColor: "#235FE5",
//         fill: false,
//       },
//       {
//         label: "Pengeluaran",
//         data: expenseData,
//         borderColor: "#92C5B5",
//         backgroundColor: "#92C5B5",
//         fill: false,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         ticks: {
//           maxTicksLimit: 5,
//           stepSize: 500,
//         },
//       },
//     },
//   };

//   return <Line data={chartData} options={options} height={heightChart} />;
// };

// export default ChartLine;
