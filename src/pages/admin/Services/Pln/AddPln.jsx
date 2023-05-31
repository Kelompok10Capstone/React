import React from 'react'

import FontBold from '../../../../elements/FontBold/FontBold'
import ModalTambah from '../../../../elements/Modal/ModalTambah'
import Input from '../../../../elements/Input/Input'

import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const AddPln = () => {

    const handleSimpan = () => {
        ModalTambah()
    }

    return (
        <div className='add-pln py-4 px-4'>
            <div className='row'>
                <div className='nama-tambah pb-3'>
                    <FontBold $26>Tambah Produk PLN</FontBold>
                </div>

                <div className='col-12'>
                    <form className='kode-product-pln'>
                        <Input 
                            label='Kode PLN*'
                            type='text'
                            className='form-control mb-3'
                            classLabel='form-label'
                        />

                        <Input 
                            label='Jenis PLN*'
                            type='text'
                            className='form-control mb-3'
                            classLabel='form-label'
                        />

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

export default AddPln