import React from "react";
import Swal from 'sweetalert2' 
import imgModal from '../../assets/img/delete.png'

const Modal = () => {
    Swal.fire({
        title: 'Apakah kamu ingin menghapus data ini ?',
        
        imageUrl: imgModal,
        imageWidth: 256,
        imageHeight: 256,

        width: 371,
        height: 451,
                
        showCancelButton: true, 
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Hapus!'

    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Hapus!',
            'Data telah dihapus.',
            
            )
        }
    })
} 

export default Modal