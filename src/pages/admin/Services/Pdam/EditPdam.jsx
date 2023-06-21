import React, { useState, useEffect } from 'react'
import "./Pdam.css"

import FontBold from '../../../../elements/FontBold/FontBold'
import ModalEdit from '../../../../elements/Modal/ModalEdit'
import Input from '../../../../elements/Input/Input'

import { Link, useParams, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { API_BASE } from '../../../../config/Api'

const EditPdam = () => {

    const authToken = sessionStorage.getItem('Auth Token');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const { id } = useParams()
    const navigate = useNavigate();

    const [values, setValues] = useState({
        id: "",
        product_type: "",
        provider_name: "",
        address: ""
    })

    // get
    useEffect(() => {
        const getPdam = async () => {
            try {
                const responsePdam = await axios.get(`${API_BASE}/pdam/` + id, {
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    }
                });

                const pdamData = responsePdam.data.data
                setValues(pdamData)
                console.log('Pdam data :', pdamData);

            } catch (error) {
                console.log('Error : ', error);
            }
        }
        getPdam()
    }, [])

    // put
    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`${API_BASE}/admin/pdam/` + id, values, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        })
            .then(res => {
                console.log(res);
                ModalEdit();
                navigate('/admin/layanan/pdam')
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='edit-pdam py-4 px-4'>
            <div className='row'>
                <div className='nama-edit mb-3'>
                    <FontBold $26>Edit Produk PDAM</FontBold>
                </div>

                <div className='col-12'>
                    <form onSubmit={handleUpdate} className='kode-product-pdam'>
                        <Input
                            label='Kode PDAM*'
                            type='text'
                            name='product_type'
                            className='form-control mb-3'
                            classLabel='form-label'
                            disabled={true}
                            value={values.product_type}
                            onChange={e => setValues({ ...values, product_type: e.target.value })}
                        />

                        <Input
                            label='Jenis PDAM*'
                            type='text'
                            name='provider_name'
                            className='form-control mb-3'
                            classLabel='form-label'
                            value={values.provider_name}
                            onChange={e => setValues({ ...values, provider_name: e.target.value })}
                        />

                        <Input
                            label='Wilayah*'
                            type='text'
                            name='address'
                            className='form-control mb-3'
                            classLabel='form-label'
                            value={values.address}
                            onChange={e => setValues({ ...values, address: e.target.value })}
                        />

                        <div className='col mt-3 d-flex justify-content-end'>
                            <button className='btn btn-success'
                                style={{ backgroundColor: "#2B3990", borderRadius: "8px" }} >Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditPdam