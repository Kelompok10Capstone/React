import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { Nav, NavItem, Tab } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import axios from "axios";
import { API_BASE, API_TRANSACTION_URL } from "../../../config/Api";
import api from "../../../config/https";

import "./Transaction.css";
import styles from "./Transaction.module.css";

import FontBold from "../../../elements/FontBold/FontBold";
import Search from "../../../elements/Search/Search";
import TableSuccess from "./TableSuccess";
import TableProces from "./TableProces";
import TableFail from "./TableFail";
import TableUnpaid from "./TableUnpaid";

const Transaction = () => {
  const [data, setDataTransaction] = useState();

  const authToken = sessionStorage.getItem("Auth Token");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState([]);
  const [resposePage, setResponsePage] = useState("");
  const [resposeLimit, setResponseLimit] = useState("");

  const getTransaction = async () => {
    try {
      const response = await api.get(
        `admin/transactions?page=${page}&limit=${limit}`
      );

      const transactionData = response.data.data;
      setDataTransaction(transactionData);
      setResponsePage(response.data.pagination);
      // console.log(response);
      // console.log("Pagination :", resposePage);
      // console.log("Transaction data :", transactionData);
      setFilter(transactionData);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  // search
  const getTransactionByQuery = async () => {
    try {
      const response = await api.get(
        `admin/transactions/search/?query=${query}&page=${page}&limit=${limit}`
      );

      const transactionData = response.data.data;
      setDataTransaction(transactionData);
      setResponsePage(response.data.pagination);
      // console.log(response);
      // console.log("Pagination :", resposePage);
      // console.log("Transaction status :", transactionData);
      setFilter(transactionData);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    // console.log("ini Query: ", query);
    if (query.length > 0) {
      getTransactionByQuery();
    } else {
      getTransaction();
    }
  }, [page, query]);

  const formatter = new Intl.DateTimeFormat("id", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  // color status
  const getStatusColor = (status) => {
    switch (status) {
      case "successful":
        return "green";
      case "processing":
        return "blue";
      case "unpaid":
        return "orange";
      case "fail":
        return "red";
      default:
        return "black";
    }
  };

  return (
    <div className="dashboard mx-4 mt-4">
      <div className="row">
        <div className="col-12">
          <div className="Transaksi">
            <FontBold $32 className="mb-2">
              Transaksi
            </FontBold>

            <Tab.Container defaultActiveKey="semua">
              <Nav variant="underline" className="nav-underline">
                <Nav.Item>
                  <Nav.Link
                    eventKey="semua"
                    href="#"
                    className="nav-link-underline text-dark"
                  >
                    Semua
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    eventKey="selesai"
                    className="nav-link-underline text-dark"
                  >
                    Sukses
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    eventKey="proses"
                    className="nav-link-underline text-dark"
                  >
                    Proses
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    eventKey="belumbayar"
                    className="nav-link-underline text-dark"
                  >
                    Belum Bayar
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    eventKey="gagal"
                    className="nav-link-underline text-dark"
                  >
                    Gagal
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                {/* tabel semua */}
                <Tab.Pane eventKey="semua" className="home">
                  <div className="row justify-content-end mb-5">
                    <form className="search-transaction">
                      <Search
                        placeholder="Cari berdasarkan Nama, Status, dan Jenis"
                        className="form-control"
                        type="text"
                        onChange={(e) =>
                          setQuery(e.target.value.toLowerCase()) || setPage(1)
                        }
                      />
                    </form>
                  </div>

                  <div className="tb justify-content-around">
                    <div className="table-responsive table-wrapper mt-3">
                      <table
                        className="table table-hover"
                        style={{ borderSpacing: "1em" }}
                        id={styles.tableBorder}
                      >
                        <thead
                          className="text-dark"
                          style={{ backgroundColor: "#B8BDDA" }}
                          id={styles.thead}
                        >
                          <tr className="">
                            <th scope="col" className="col-1 text-center">
                              Kode
                            </th>
                            <th scope="col" className="col-2">
                              Nama
                            </th>
                            <th scope="col" className="col-1">
                              Jenis
                            </th>
                            <th scope="col" className="col-2">
                              Tanggal
                            </th>
                            <th scope="col" className="col-1">
                              Total
                            </th>
                            <th scope="col" className="col-1">
                              Status
                            </th>
                            <th scope="col" className="col-4"></th>
                          </tr>
                        </thead>

                        {data?.length == 0 && (
                          <tr>
                            <td
                              colSpan="7"
                              className="text-center fst-italic fs-5 py-3"
                            >
                              Transaksi tidak ada
                            </td>
                          </tr>
                        )}

                        {data?.map((transaction) => (
                          <tbody key={transaction.id} id="table-body">
                            <tr
                              style={{ fontSize: "16px" }}
                              className="row-transaction"
                              id={styles.rowTransaction}
                            >
                              <td className="text-center">
                                {transaction.id.slice(0, 8)}
                              </td>
                              <td>{transaction.product_detail.name}</td>

                              <td>{transaction.product_type}</td>

                              <td>
                                {formatter.format(
                                  new Date(transaction.created_at)
                                )}
                              </td>
                              <td>
                                Rp.{" "}
                                {transaction.total_price.toLocaleString(
                                  "id-ID",
                                  { styles: "currency", currency: "IDR" }
                                )}
                              </td>

                              <td
                                style={{
                                  color: getStatusColor(transaction.status),
                                }}
                              >
                                {transaction.status}
                              </td>

                              <td
                                className="text-align-justify"
                                style={{ wordWrap: "break-word" }}
                              >
                                {transaction.description}
                              </td>
                            </tr>
                          </tbody>
                        ))}
                      </table>
                    </div>

                    <div className="row d-flex align-items-center pagination pt-3">
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
                        <p className="text-center my-auto page-title">
                          Halaman {resposePage.page}
                        </p>
                      </div>
                      <div className="col-4 text-end">
                        <button
                          className="btn-pagination"
                          type="button"
                          disabled={data < limit - 1}
                          onClick={() => setPage((prev) => prev + 1)}
                        >
                          Berikutnya
                          <IoIosArrowForward className="icon-next" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                {/* tabel selesai */}
                <Tab.Pane eventKey="selesai" className="selesai">
                  <TableSuccess />
                </Tab.Pane>

                {/* tabel proses */}
                <Tab.Pane eventKey="proses" className="proses">
                  <TableProces />
                </Tab.Pane>

                {/* tabel belumbayar */}
                <Tab.Pane eventKey="belumbayar" className="belumbayar">
                  <TableUnpaid />
                </Tab.Pane>

                {/* tabel gagal */}
                <Tab.Pane eventKey="gagal" className="gagal">
                  <TableFail />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
