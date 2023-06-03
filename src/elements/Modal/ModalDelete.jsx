import React from "react";
import Swal from 'sweetalert2' 
import imgModal from '../../assets/img/delete.png'

const ModalDelete = () => {
    Swal.fire({
        title: 'Apakah kamu ingin menghapus data ini ?',
        
        imageUrl: imgModal,
        imageWidth: 130,
        imageHeight: 127,

        width: 485,
        height: 327,
                
        reverseButtons: true,
        confirmButtonText: 'Hapus!',
        showCancelButton: true, 
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
    })
} 

export default ModalDelete