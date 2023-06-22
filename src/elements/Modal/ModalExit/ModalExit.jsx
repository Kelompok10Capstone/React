import Swal from 'sweetalert2' 
import imgModal from '../../../assets/img/exit.png'
import './ModalExit.css'

const ModalExit = () => {    

    Swal.fire({
        title: 'Apakah kamu yakin ingin keluar ?',                     
        imageUrl: imgModal,                    
        showCancelButton: true,                 
        confirmButtonText: 'Keluar',
        cancelButtonText: 'Batal',
        reverseButtons: true,
        customClass: {
            popup: 'sweet-popup',
            title: 'sweet-title',
            image: 'sweet-image',
            confirmButton: 'sweet-confirmButton',
            cancelButton: 'sweet-cancelButton'
        }        
    }).then((result) => {
        if (result.isConfirmed) {
            sessionStorage.removeItem("Auth Token")
            location.replace('/login-admin')
        }
    })
} 

export default ModalExit