import React from "react";
import Swal from 'sweetalert2' 
import imgModal from '../../assets/img/delete.png'

const Modal = () => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",

        imageUrl: imgModal,
        imageWidth: 256,
        imageHeight: 256,

        width: 371,
        height: 451,
                
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yaking hapus nih!'

    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Hapus!',
            'Your file has been deleted.',
            
            )
        }
    })
} 

export default Modal