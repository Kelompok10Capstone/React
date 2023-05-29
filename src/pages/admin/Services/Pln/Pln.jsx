import React from 'react'
import { IconContext } from "react-icons";
import FontBold from '../../../../elements/FontBold/FontBold'
import { Link } from 'react-router-dom'
import { VscEdit, VscTrash } from 'react-icons/vsc'
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from '../../../../elements/Modal/Modal';
import './Pln.css'

const Pln = () => {

    const handleDelete = () => {
        Modal()
    }

    return (
        <div className="bpjs py-4 px-4">
            <div className="row">
                <div className='nama-pln pb-4'>
                    <FontBold $26>PLN</FontBold>
                </div>
                
                <div className='col-10 pb-1'>
                    <form className="d-flex">
                        <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        name="search"
                        /> 
                    </form>
                </div>
                <div class="col-2 d-md-flex justify-content-md-end">
                    <Link to='/admin/layanan/pln/tambah'>
                        <button 
                            className='btn btn-tambah-pln text-white' 
                            style={{ backgroundColor: "#2B3990", borderRadius: "16px" }}
                            type='submit'><AiOutlinePlus /> Tambah Produk
                        </button>
                    </Link>
                </div>
            </div>

            <div className='table-responsive shadow-sm'>
                <table className='table table-hover mt-2'>
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