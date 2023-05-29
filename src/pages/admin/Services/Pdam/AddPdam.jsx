import React from 'react'
import FontBold from '../../../../elements/FontBold/FontBold'
import FontReguler from '../../../../elements/FontReguler/FontReguler'
import "./Pdam.css"
import { Link } from 'react-router-dom'
import ModalTambah from '../../../../elements/Modal/ModalTambah'

const AddPdam = () => {

    const handleSimpan = () => {
        ModalTambah()
    }

    return (
        <div className='add-pdam py-4 px-4'>
            <div className='row'>
                <div className='nama-tambah'>
                    <FontBold $26>Tambah Produk PDAM</FontBold>
                </div>

                <div className='col-12'>
                    <form className='kode-product-pdam'>
                        
                        <div className="mb-3">
                            <FontReguler $16><label className="form-label-kode-pdam">Kode*</label> </FontReguler>
                            <input 
                                type="name" 
                                className="form-control"  
                            />
                        </div>

                        <div className="mb-3">
                            <FontReguler $16><label className="form-label-nama-pdam">Nama*</label></FontReguler>
                            <input 
                                type="name" 
                                className="form-control" 
                            />
                        </div>

                        <div className="mb-3">
                            <FontReguler $16><label className="form-label-nama-pdam">Wilayah*</label></FontReguler>
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

export default AddPdam