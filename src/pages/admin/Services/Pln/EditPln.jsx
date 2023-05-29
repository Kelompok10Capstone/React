import React from 'react'
import FontBold from '../../../../elements/FontBold/FontBold'
import FontReguler from '../../../../elements/FontReguler/FontReguler'
import "./Pln.css"
import ModalEdit from '../../../../elements/Modal/ModalEdit'
import { Link } from 'react-router-dom'

const EditPln = () => {

    const handleSimpan = () => {
        ModalEdit()
    }

    return (
        <div className='edit-pln py-4 px-4'>
            <div className='row'>
                <div className='nama-edit'>
                    <FontBold $26>Edit Produk PLN</FontBold>
                </div>

                <div className='col-12'>
                    <form className='kode-product-pln'>
                        <fieldset disabled>
                            <div className="mb-3">
                                <FontReguler $16><label className="form-label-kode-pln">Kode Produk*</label> </FontReguler>
                                <input 
                                    type="name" 
                                    className="form-control"  
                                    placeholder='PLN01'
                                />
                            </div>
                        </fieldset>
                        <div className="mb-3">
                            <FontReguler $16><label className="form-label">Jenis Produk*</label></FontReguler>
                            <input 
                                type="name" 
                                className="form-control" 
                            />
                        </div>

                        <Link to='/admin/layanan/pln'>
                            <button
                                className="button-simpan-pln float-end mt-4"
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

export default EditPln