import Swal from "sweetalert2";
import imgModal from "../../../../assets/img/login/berhasilLogin.png";
import "./ModalSuccess.css";

const ModalSuccess = () => {
     Swal.fire({
          title: "Selamat! <br/> Kamu sudah bisa mengakses",
          imageUrl: imgModal,
          showConfirmButton: false,
          timer: 3000,
          customClass: {
               popup: "sweet-popup",
               title: "sweet-title",
               image: "sweet-image",
          },
     });
};

export default ModalSuccess;
