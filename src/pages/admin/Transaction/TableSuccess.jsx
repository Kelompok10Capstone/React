import React from "react";
import { useEffect, useState } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import api from "../../../config/https";

import "./Transaction.css";
import styles from "./Transaction.module.css";

import Search from "../../../elements/Search/Search";

const TableSuccess = () => {
  const [berhasil, setBerhasil] = useState();

  const authToken = sessionStorage.getItem("Auth Token");

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState([]);
  const [resposePage, setResponsePage] = useState("");
  const [resposeLimit, setResponseLimit] = useState("");

  const [pageSuccess, setPageSuccess] = useState(1);
  const limitSuccess = 10;
  const status = "successful";
  const product = "";

  const formatter = new Intl.DateTimeFormat("id", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  const getBerhasil = async () => {
    try {
      const responseBerhasil = await api.get(
        `admin/transactions/product/?product=${product}&status=${status}&page=${pageSuccess}&limit=${limitSuccess}`
      );

      const statusBerhasil = responseBerhasil.data.data;
      setBerhasil(statusBerhasil);
      // console.log("Status Berhasil :", statusBerhasil);
      setFilter(statusBerhasil);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  // search
  const getTransactionByStatusQuery = async () => {
    try {
      const responseStatus = await api.get(
        `admin/transactions/status/search/?status=${status}&query=${query}&page=${pageSuccess}&limit=${limitSuccess}`
      );

      const successData = responseStatus.data.data;
      setBerhasil(successData);
      setResponsePage(responseStatus.data.pagination);
      // console.log(responseStatus);
      // console.log("Pagination :", resposePage);
      // console.log("Tabel success :", successData);
      setFilter(successData);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    // console.log("ini Query: ", query);
    if (query.length > 0) {
      getTransactionByStatusQuery();
    } else {
      getBerhasil();
    }
  }, [pageSuccess, query]);

  return (
    <div className="tb justify-content-around">
      <div className="row justify-content-end mb-5">
        <form className="search-transaction">
          <Search
            placeholder="Cari berdasarkan Nama, dan Jenis"
            className="form-control"
            type="text"
            onChange={(e) =>
              setQuery(e.target.value.toLowerCase()) || setPageSuccess(1)
            }
          />
        </form>
      </div>
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
            <tr className="" style={{ fontSize: "16px" }}>
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

          {berhasil?.length == 0 && (
            <tr>
              <td colSpan="7" className="text-center fst-italic fs-5 py-3">
                Transaksi tidak ada
              </td>
            </tr>
          )}

          {berhasil?.map((transaction) => (
            <tbody key={transaction.id} id="table-body">
              <tr
                style={{ fontSize: "16px" }}
                className="row-transaction"
                id={styles.rowTransaction}
              >
                <td className="text-center">{transaction.id.slice(0, 9)}</td>
                <td>{transaction.product_detail.name}</td>
                <td>{transaction.product_type}</td>
                <td>{formatter.format(new Date(transaction.created_at))}</td>
                <td>
                  Rp.{" "}
                  {transaction.total_price.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </td>
                <td className="text-success">{transaction.status}</td>
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
            disabled={pageSuccess == 1}
            type="button"
            onClick={() => setPageSuccess((prev) => prev - 1)}
          >
            <IoIosArrowBack className="icon-prev" />
            Sebelumnya
          </button>
        </div>
        <div className="col-4">
          <p className="text-center my-auto page-title">
            Halaman {pageSuccess}
          </p>
        </div>
        <div className="col-4 text-end">
          <button
            className="btn-pagination"
            type="button"
            disabled={berhasil < limitSuccess - 1}
            onClick={() => setPageSuccess((prev) => prev + 1)}
          >
            Berikutnya
            <IoIosArrowForward className="icon-next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableSuccess;
