import Swal from "sweetalert2";
import imgModal from '../../../../assets/img/login/salahPassword.png'
import './ModalUnsuccess.css'

const ModalUnsuccess = () => {
     
     Swal.fire({
          title: "Maaf, kata sandi kamu salah!",
          imageUrl: imgModal,
          showConfirmButton: false,
          timer: 1200,          
          customClass: {
               popup: "sweet-popup",
               title: "sweet-title",
               image: "sweet-image",               
          }
     })
}

export default ModalUnsuccess;
