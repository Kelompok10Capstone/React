import React, { useState } from 'react'

import FontBold from '../../../../elements/FontBold/FontBold'
import ModalTambah from '../../../../elements/Modal/ModalTambah'
import Input from '../../../../elements/Input/Input'

import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { API_BASE } from '../../../../config/Api'

const AddPln = () => {

    const navigate = useNavigate();
    const authToken = sessionStorage.getItem('Auth Token');
    const [values, setValues] = useState({
        nama: '',
        layanan: ''
    })

    const handleSimpan = (event) => {
        event.preventDefault();
        axios.post('https://642e1dab2b883abc640747d3.mockapi.io/transaction', values)
            .then(res => {
                console.log(res);
                navigate('/admin/layanan/pln')
            })
            .catch(err => console.log(err));
    }

    // const handleSimpan = (event) => {
    //     event.preventDefault();
    //     axios.post(`${API_BASE}/admin/electricity`, values,
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${authToken}`
    //             }
    //         }
    //     )
    //         .then(res => {
    //             console.log(res);
    //             navigate('/admin/layanan/pln')
    //         })
    //         .catch(err => console.log(err));
    // }

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
                            name='nama'
                            className='form-control mb-3'
                            classLabel='form-label'
                            onChange={e => setValues({ ...values, nama: e.target.value })}
                        />

                        <Input
                            label='Jenis PLN*'
                            type='text'
                            name='layanan'
                            className='form-control mb-3'
                            classLabel='form-label'
                            onChange={e => setValues({ ...values, layanan: e.target.value })}
                        />

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