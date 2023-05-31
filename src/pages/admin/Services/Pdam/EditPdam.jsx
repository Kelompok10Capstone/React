import React from 'react'
import "./Pdam.css"

import FontBold from '../../../../elements/FontBold/FontBold'
import ModalEdit from '../../../../elements/Modal/ModalEdit'
import Input from '../../../../elements/Input/Input'

import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const EditPdam = () => {

    const handleSimpan = () => {
        ModalEdit()
    }

    return (
        <div className='edit-pdam py-4 px-4'>
            <div className='row'>
                <div className='nama-edit mb-3'>
                    <FontBold $26>Edit Produk PDAM</FontBold>
                </div>

                <div className='col-12'>
                    <form className='kode-product-pdam'>
                        <Input 
                            label='Kode PDAM*'
                            type='text'
                            className='form-control mb-3'
                            classLabel='form-label'
                            disabled={true}
                            placeholder='PDAM01'
                        />

                        <Input 
                            label='Jenis PDAM*'
                            type='text'
                            className='form-control mb-3'
                            classLabel='form-label'
                        />

                        <Input 
                            label='Wilayah*'
                            type='text'
                            className='form-control mb-3'
                            classLabel='form-label'
                        />

                        <div className='col mt-3 d-flex justify-content-end'>
                            <Link to='/admin/layanan/pdam'>
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

export default EditPdam