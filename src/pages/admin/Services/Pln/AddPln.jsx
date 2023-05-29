import React from 'react'
import FontBold from '../../../../elements/FontBold/FontBold'
import FontReguler from '../../../../elements/FontReguler/FontReguler'
import ModalTambah from '../../../../elements/Modal/ModalTambah'
import { Link } from 'react-router-dom'

const AddPln = () => {

    const handleSimpan = () => {
        ModalTambah()
    }

    return (
        <div className='add-pln py-4 px-4'>
            <div className='row'>
                <div className='nama-tambah'>
                    <FontBold $26>Tambah Produk PLN</FontBold>
                </div>

                <div className='col-12'>
                    <form className='kode-product-pln'>
                        
                        <div className="mb-3">
                            <FontReguler $16><label className="form-label-kode-pln">Kode Produk*</label> </FontReguler>
                            <input 
                                type="name" 
                                className="form-control"  
                            />
                        </div>

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

export default AddPln