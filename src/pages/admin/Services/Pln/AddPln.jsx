import React, { useState } from 'react'

import FontBold from '../../../../elements/FontBold/FontBold'
import ModalTambah from '../../../../elements/Modal/ModalTambah'
import Input from '../../../../elements/Input/Input'

import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import api from '../../../../config/https'

const AddPln = () => {

    const navigate = useNavigate();    

    const [values, setValues] = useState({
        product_type: '',
        provider_name: ''
    })

    // alert tambah
    const [error, setError] = useState(false);

    const handleSimpan = (event) => {
        event.preventDefault();

        if (validate()) {
            api.post(`admin/electricity`, values)
                .then(res => {
                    console.log(res);
                    ModalTambah();
                    navigate('/admin/layanan/pln')
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
            toast.warning("Masukan Kode PLN");
        }

        if (values.provider_name === '' || values.provider_name === null) {
            result = false;
            toast.warning("Masukan Jenis PLN");
        }

        return result;
    }

    return (
        <div className='add-pln py-4 px-4'>
            <div className='row'>
                <div className='nama-tambah pb-3'>
                    <FontBold $26>Tambah Produk PLN</FontBold>
                </div>

                <div className='col-12'>
                    <form onSubmit={handleSimpan} className='kode-product-pln'>
                        <Input
                            label='Kode PLN*'
                            type='text'
                            className='form-control mb-3'
                            classLabel='form-label'
                            onChange={e => setValues({ ...values, product_type: e.target.value })}
                        />

                        <Input
                            label='Jenis PLN*'
                            type='text'
                            className='form-control mb-3'
                            classLabel='form-label'
                            onChange={e => setValues({ ...values, provider_name: e.target.value })}
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

export default AddPln