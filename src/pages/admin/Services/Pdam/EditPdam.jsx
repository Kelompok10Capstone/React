import React from 'react'
import FontBold from '../../../../elements/FontBold/FontBold'
import FontReguler from '../../../../elements/FontReguler/FontReguler'
import "./Pdam.css"
import { Link } from 'react-router-dom'
import ModalEdit from '../../../../elements/Modal/ModalEdit'

const EditPdam = () => {

    const handleSimpan = () => {
        ModalEdit()
    }

    return (
        <div className='edit-pdam py-4 px-4'>
            <div className='row'>
                <div className='nama-edit'>
                    <FontBold $26>Edit Produk PDAM</FontBold>
                </div>

                <div className='col-12'>
                    <form className='kode-product-pdam'>
                        <fieldset disabled>
                            <div className="mb-3">
                                <FontReguler $16><label className="form-label-kode-pdam">Kode*</label> </FontReguler>
                                <input 
                                    type="name" 
                                    className="form-control"  
                                    placeholder='PDAM01'
                                />
                            </div>
                        </fieldset>

                        <div className="mb-3">
                            <FontReguler $16><label className="form-label">Nama*</label></FontReguler>
                            <input 
                                type="name" 
                                className="form-control" 
                            />
                        </div>

                        <div className="mb-3">
                            <FontReguler $16><label className="form-label">Wilayah*</label></FontReguler>
                            <input 
                                type="name" 
                                className="form-control" 
                            />
                        </div>

                        <Link to='/admin/layanan/pdam'>
                        <button
                            className="button-simpan-pdam float-end mt-4"
                            type="button"
                            onClick={handleSimpan}
                            >
                            Simpan
                        </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditPdam