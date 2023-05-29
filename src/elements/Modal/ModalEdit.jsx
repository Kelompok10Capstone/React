import React from 'react'
import Swal from 'sweetalert2' 
import imgmodalsimpan from '../../assets/img/ModalSimpan/simpan.png'

const ModalEdit = () => {
    Swal.fire({
        title: 'Berhasil menyimpan perubahan',
        // text: 'Produk Berhasil di tambahkan',
        imageUrl: imgmodalsimpan,
        imageWidth: 165,
        imageHeight: 165,
        imageAlt: 'Custom image',
    })
}

export default ModalEdit