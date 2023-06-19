import React from 'react'
import "./Pln.css"

import FontBold from '../../../../elements/FontBold/FontBold'
import ModalEdit from '../../../../elements/Modal/ModalEdit'
import Input from '../../../../elements/Input/Input'

import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const EditPln = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        id: '',
        layanan: ''
    })

    useEffect(() => {
        axios.get('https://642e1dab2b883abc640747d3.mockapi.io/transaction/' + id)
            .then(res => {
                setValues(res.data)
            })
            .catch(err => console.log(err));
    }, [])

    const handleSimpan = (event) => {
        event.preventDefault();
        axios.put('https://642e1dab2b883abc640747d3.mockapi.io/transaction/' + id, values)
            .then(res => {
                console.log(res);
                navigate('/admin/layanan/pln')
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='edit-pln py-4 px-4'>
            <div className='row'>
                <div className='nama-edit'>
                    <FontBold $26 className='pb-3'>Edit Produk PLN</FontBold>
                </div>

                <div className='col-12'>
                    <form onSubmit={handleSimpan} className='kode-product-pln'>
                        <div className='mb-3'>
                            <Input
                                label='Kode PLN*'
                                type='text'
                                name='nama'
                                className='form-control mb-3'
                                classLabel='form-label'
                                disabled={true}
                                value={values.id}
                                onChange={e => setValues({ ...values, id: e.target.value })}
                            />
                        </div>

                        <div className='mb-3'>
                            <Input
                                label='Jenis PLN*'
                                type='text'
                                name='layanan'
                                className='form-control mb-3'
                                classLabel='form-label'
                                value={values.layanan}
                                onChange={e => setValues({ ...values, layanan: e.target.value })}
                            />
                        </div>

                        <div className='col mt-3 d-flex justify-content-end'>
                            <button className='btn text-white ms-3' style={{ backgroundColor: "#2B3990" }}>Simpan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditPln