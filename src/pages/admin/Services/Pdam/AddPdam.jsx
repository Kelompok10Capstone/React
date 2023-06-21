import React from 'react'
import "./Pdam.css"

import FontBold from '../../../../elements/FontBold/FontBold'
import ModalTambah from '../../../../elements/Modal/ModalTambah'
import Input from '../../../../elements/Input/Input'

import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import { useState } from 'react'
import axios from 'axios'
import { API_BASE } from '../../../../config/Api'

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const AddPdam = () => {

    const authToken = sessionStorage.getItem('Auth Token');
    const navigate = useNavigate();

    const [values, setValues] = useState({
        product_type: "",
        provider_name: "",
        address: ""
    })

    // alert tambah
    const [error, setError] = useState(false);

    // post
    const handleSubmit = (event) => {
        event.preventDefault();

        if (validate()) {
            axios.post(`${API_BASE}/admin/pdam`, values,
                {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                }
            )
                .then(res => {
                    console.log(res);
                    ModalTambah();
                    navigate('/admin/layanan/pdam')
                })
                .catch(err => {
                    console.log(err);
                    setError(true)
                });
        }
    };

    const validate = () => {
        let result = true;

        if (values.product_type === '' || values.product_type === null) {
            result = false;
            toast.warning("Masukan Kode PDAM");
        }

        if (values.provider_name === '' || values.provider_name === null) {
            result = false;
            toast.warning("Masukan Jenis PDAM");
        }

        if (values.address === '' || values.address === null) {
            result = false;
            toast.warning("Masukan Alamat");
        }

        return result;
    }


    return (
        <div className='add-pdam py-4 px-4'>
            <div className='row'>
                <div className='nama-tambah pb-3'>
                    <FontBold $26>Tambah Produk PDAM</FontBold>
                </div>

                <div className='col-12'>
                    <form onSubmit={handleSubmit} className='kode-product-pdam'>
                        <Input
                            label='Kode PDAM*'
                            type='text'
                            className='form-control mb-3'
                            classLabel='form-label'
                            onChange={e => setValues({ ...values, product_type: e.target.value })}
                        />

                        <Input
                            label='Jenis PDAM*'
                            type='text'
                            className='form-control mb-3'
                            classLabel='form-label'
                            onChange={e => setValues({ ...values, provider_name: e.target.value })}
                        />

                        <Input
                            label='Wilayah*'
                            type='text'
                            className='form-control mb-3'
                            classLabel='form-label'
                            onChange={e => setValues({ ...values, address: e.target.value })}
                        />

                        <ToastContainer />

                        <div className='col mt-3 d-flex justify-content-end'>
                            <button className='btn text-white ms-3' style={{ backgroundColor: "#2B3990" }}>Simpan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddPdam