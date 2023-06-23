import React from 'react'
import Swal from 'sweetalert2' 
import imgmodalsimpan from '../../assets/img/ModalSimpan/simpan.png'
import './ModalEdit.css'

const ModalEdit = () => {
    Swal.fire({
        title: 'Berhasil menyimpan perubahan',
        // text: 'Produk Berhasil di tambahkan',
        imageUrl: imgmodalsimpan,
        imageWidth: 165,
        imageHeight: 165,
        imageAlt: 'Custom image',
        showConfirmButton: false,
        timer: 3000,
        customClass: {
            title: 'edit-title',
            popup: 'edit-popup'
        }
    })
}

export default ModalEdit