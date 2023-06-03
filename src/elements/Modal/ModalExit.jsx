import React from "react";
import Swal from 'sweetalert2' 
import imgModal from '../../assets/img/exit.png'

const ModalExit = () => {

    Swal.fire({
        title: 'Apakah kamu ingin keluar ?',
        
        imageUrl: imgModal,
        imageWidth: 186,
        imageHeight: 127,

        width: 485,
        height: 327,
                
        reverseButtons: true,
        confirmButtonText: 'Keluar',
        showCancelButton: true, 
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
    })
} 

export default ModalExit