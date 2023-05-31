import React from 'react'
import "./Pln.css"

import FontBold from '../../../../elements/FontBold/FontBold'
import ModalEdit from '../../../../elements/Modal/ModalEdit'
import Input from '../../../../elements/Input/Input'

import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const EditPln = () => {

    const handleSimpan = () => {
        ModalEdit()
    }

    return (
        <div className='edit-pln py-4 px-4'>
            <div className='row'>
                <div className='nama-edit'>
                    <FontBold $26 className='pb-3'>Edit Produk PLN</FontBold>
                </div>

                <div className='col-12'>
                    <form className='kode-product-pln'>
                        <div className='mb-3'>
                            <Input 
                                label='Kode PLN*'
                                type='text'
                                className='form-control mb-3'
                                classLabel='form-label'
                                placeholder='PLNPOST'
                                disabled={true}
                            />
                        </div>

                        <div className='mb-3'>
                            <Input 
                                label='Jenis PLN*'
                                type='text'
                                className='form-control mb-3'
                                classLabel='form-label'
                            />  
                        </div>
                        
                        <div className='col mt-3 d-flex justify-content-end'>
                            <Link to='/admin/layanan/pln'>
                                <Button
                                    style={{ backgroundColor: "#2B3990", borderRadius: "8px" }}
                                    onClick={handleSimpan}
                                >
                                    Simpan
                                </Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditPln