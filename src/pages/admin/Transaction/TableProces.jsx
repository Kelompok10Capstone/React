import React from 'react'
import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { Nav, NavItem, Tab } from 'react-bootstrap'
import { AiOutlineSearch } from "react-icons/ai"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

import axios from "axios";
import { API_BASE, API_TRANSACTION_URL } from "../../../config/Api";
import api from '../../../config/https';

import "./Transaction.css"
import styles from "./Transaction.module.css"

import FontBold from "../../../elements/FontBold/FontBold";
import Search from "../../../elements/Search/Search";


const TableProces = () => {

    const [proses, setProses] = useState();
    
    const authToken = sessionStorage.getItem('Auth Token');

    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState([]);
    const [resposePage, setResponsePage] = useState('');
    const [resposeLimit, setResponseLimit] = useState('');

    const [pageProses, setPageProses] = useState(1);
    const limitProses = 10;
    const statusP = 'unpaid';
    const productP = '';

    const formatter = new Intl.DateTimeFormat("id", {
        year: "numeric",
        month: "long",
        day: "2-digit",
    });
    
        const getProses = async () => {
            try {
                const responseProses = await api.get(`admin/transactions/product/?product=${productP}&status=${statusP}&page=${pageProses}&limit=${limitProses}`);

                const statusProses = responseProses.data.data
                setProses(statusProses)
                console.log('Status Proses :', statusProses);
                setFilter(statusProses);
            } catch (error) {
                console.log('Error : ', error);
            }
        }
        
    // search 
    const getTransactionByStatusQuery = async () => {
        try {
            const responseProses = await api.get(`admin/transactions/status/search/?status=${statusP}&query=${query}&page=${pageProses}&limit=${limitProses}`);

            const prosesData = responseProses.data.data
            setProses(prosesData)
            setResponsePage(responseProses.data.pagination)
            console.log(responseProses);
            console.log('Pagination :', resposePage);
            console.log('Tabel success :', prosesData);
            setFilter(prosesData);

        } catch (error) {
            console.log('Error : ', error);
        }
    }

    useEffect(() => {
        console.log('ini Query: ', query);
        if (query.length > 0) {
            getTransactionByStatusQuery();
        } else {
            getProses();
        }

    }, [pageProses, query]);

    return (
        <div className='tb justify-content-around'>
            <div className="row justify-content-end mb-5">
                <form className="search-transaction">
                    <Search
                        placeholder='Cari berdasarkan Nama, dan Jenis'
                        className='form-control'
                        type="text"
                        onChange={(e) => setQuery(e.target.value.toLowerCase()) || setPageProses(1)}
                    />
                </form>
            </div>
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

                    {proses?.length == 0 && (
                        <tr>
                            <td colSpan="7" className="text-center fst-italic fs-5 py-3">
                                Transaksi tidak ada
                            </td>
                        </tr>
                    )}

                    {proses?.map((transaction) => (
                        <tbody key={transaction.id} id="table-body">
                            <tr style={{ fontSize: "16px" }} className="row-transaction" id={styles.rowTransaction}>
                                <td className="text-center">
                                    {transaction.id.slice(0, 9)}
                                </td>
                                <td>{transaction.product_detail.name}</td>
                                <td>{transaction.product_type}</td>
                                <td>{formatter.format(new Date(transaction.created_at))}</td>
                                <td>Rp. {transaction.total_price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</td>
                                <td style={{ color: "orange" }}>{transaction.status}</td>
                                <td className="text-align-justify" style={{ wordWrap: "break-word" }}>{transaction.description}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>

            <div className="row d-flex align-items-center pagination pt-3">
                <div className="col-4 text-start">
                    <button
                        className="btn-pagination"
                        disabled={pageProses == 1}
                        type="button"
                        onClick={() => setPageProses((prev) => prev - 1)}
                    >
                        <IoIosArrowBack className="icon-prev" />
                        Sebelumnya
                    </button>
                </div>
                <div className="col-4">
                    <p className="text-center my-auto page-title">Halaman {pageProses}</p>
                </div>
                <div className="col-4 text-end">
                    <button
                        className="btn-pagination"
                        type="button"
                        disabled={proses < limitProses - 1}
                        onClick={() => setPageProses((prev) => prev + 1)}
                    >
                        Berikutnya
                        <IoIosArrowForward className="icon-next" />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default TableProces