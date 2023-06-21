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
import { API_BASE } from '../../../../config/Api'

const EditPln = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const authToken = sessionStorage.getItem('Auth Token');

    const [values, setValues] = useState({
        id: '',
        product_type: '',
        provider_name: ''
    })

    // get
    useEffect(() => {
        const getPln = async () => {
            try {
                const responsePln = await axios.get(`${API_BASE}/electricity/` + id, {
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    }
                });

                const plnData = responsePln.data.data
                setValues(plnData)
                console.log('Pln data :', plnData);

            } catch (error) {
                console.log('Error : ', error);
            }
        }
        getPln()
    }, [])

    // put
    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`${API_BASE}/admin/electricity/` + id, values, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        })
            .then(res => {
                console.log(res);
                ModalEdit();
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
                    <form onSubmit={handleUpdate} className='kode-product-pln'>
                        <div className='mb-3'>
                            <Input
                                label='Kode PLN*'
                                type='text'
                                name='nama'
                                className='form-control mb-3'
                                classLabel='form-label'
                                disabled={true}
                                value={values.product_type}
                                onChange={e => setValues({ ...values, product_type: e.target.value })}
                            />
                        </div>

                        <div className='mb-3'>
                            <Input
                                label='Jenis PLN*'
                                type='text'
                                name='layanan'
                                className='form-control mb-3'
                                classLabel='form-label'
                                value={values.provider_name}
                                onChange={e => setValues({ ...values, provider_name: e.target.value })}
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