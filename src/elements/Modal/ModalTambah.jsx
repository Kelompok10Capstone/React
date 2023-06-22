import React, { useEffect } from 'react'
import Swal from 'sweetalert2' 
import imgmodalsimpan from '../../assets/img/ModalSimpan/simpan.png'
import './ModalTambah.css'

const ModalTambah = () => {

    Swal.fire({
        title: 'Produk berhasil di tambahkan',
        // text: 'Produk Berhasil di tambahkan',
        imageUrl: imgmodalsimpan,
        imageWidth: 165,
        imageHeight: 165,
        imageAlt: 'Custom image',
        showConfirmButton: false,
        timer: 3000,
        customClass: {
            popup: 'tambah-popup',
            title: 'tambah-title'
        }
    })
}

export default ModalTambah