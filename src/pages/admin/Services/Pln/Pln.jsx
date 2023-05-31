import React from 'react'
import './Pln.css'

import FontBold from '../../../../elements/FontBold/FontBold'
import Modal from '../../../../elements/Modal/Modal';
import Search from '../../../../elements/Search/Search';

import { VscEdit, VscTrash } from 'react-icons/vsc'
import { AiOutlinePlus } from 'react-icons/ai'
import { IconContext } from "react-icons";

import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

const Pln = () => {

    const handleDelete = () => {
        Modal()
    }

    return (
        <div className="bpjs py-4 px-4">
            <div className="row">
                <div className='nama-pln'>
                    <FontBold $32>PLN</FontBold>
                </div>
                
                <div className='col-9 pb-1'>
                    <Search 
                        placeholder='Cari PLN...'
                    />
                </div>
                <div class="col-3 d-md-flex justify-content-md-end pt-3">
                    <Link to='/admin/layanan/pln/tambah'>
                        <Button
                            style={{ backgroundColor: "#2B3990", borderRadius: "16px" }}
                        >
                            <AiOutlinePlus /> Tambah Produk
                        </Button>
                    </Link>
                </div>
            </div>

            <div className='table-responsive shadow-sm'>
                <table className='table text-center table-hover mt-2'>
                    <thead className='text-dark' style={{ backgroundColor: "#B8BDDA" }}>
                        <tr className='' style={{ fontSize: "16px" }}>
                            <th scope="col">ID PLN</th>
                            <th scope="col">Jenis PLN</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>

                    {datapln.map((pln) => (
                    <tbody key={pln.idpln} id='table-body-pln'>
                        <tr style={{ fontSize: "16px" }}>
                            <td>{pln.idpln}</td>
                            <td>{pln.jenispln}</td>
                            <td className='btn-hide-pln btn-show-pln'>
                                <Link to='/admin/layanan/pln/edit'>
                                    <IconContext.Provider value={{color:'#1C1B1F', size:'1.5rem'}}>
                                        <VscEdit/>
                                    </IconContext.Provider>
                                </Link>

                                <Link to='#' onClick={handleDelete}>
                                    <IconContext.Provider value={{color:'#D13217', size:'1.5rem'}}>
                                        <VscTrash/>
                                    </IconContext.Provider>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default Pln

const datapln = [
    {
        idpln: "PLN01",
        jenispln: "POSTPAID"
    },
    {
        idpln: "PLN02",
        jenispln: "POSTPAID"
    },
    {
        idpln: "PLN03",
        jenispln: "POSTPAID"
    },
    {
        idpln: "PLN04",
        jenispln: "POSTPAID"
    },
    {
        idpln: "PLN05",
        jenispln: "POSTPAID"
    },
    {
        idpln: "PLN06",
        jenispln: "POSTPAID"
    },
    {
        idpln: "PLN07",
        jenispln: "POSTPAID"
    },
    {
        idpln: "PLN08",
        jenispln: "POSTPAID"
    },
    {
        idpln: "PLN09",
        jenispln: "POSTPAID"
    },
];