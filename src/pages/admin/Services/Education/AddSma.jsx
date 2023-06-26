// import FontBold from "../../../../elements/FontBold/FontBold";
// import Input from "../../../../elements/Input/Input";
// import ModalTambah from "../../../../elements/Modal/ModalTambah";

// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import React, { useState } from "react";

// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";

// const AddSma = () => {
//   const navigate = useNavigate();

//   const [values, setValues] = useState({
//     id: "",
//     name: "",
//     coba: "",
//   });

//   // alert tambah
//   const [error, setError] = useState(false);

//   const handleSimpan = (event) => {
//     event.preventDefault();
//     axios
//       .post("https://642e1dab2b883abc640747d3.mockapi.io/transaction/", values)
//       .then((res) => {
//         console.log(res);
//         ModalTambah();
//         navigate("/admin/layanan/pendidikan");
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="add-pendidikan px-4 py-4">
//       <FontBold $26 className="pb-3">
//         Tambah Produk Pendidikan
//       </FontBold>
//       <div className="col">
//         <form onSubmit={handleSimpan}>
//           <div className="mb-3">
//             <Input
//               label="Kode Institusi*"
//               type="text"
//               className="form-control"
//               classLabel="form-label"
//               onChange={(e) => setValues({ ...values, id: e.target.value })}
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Kategori*</label>
//             <select
//               label="Kategori*"
//               type="text"
//               className="form-control"
//               classLabel="form-label"
//               onChange={(e) => setValues({ ...values, coba: e.target.value })}
//             >
//               <option value="" hidden>
//                 Pilih Kategori
//               </option>
//               <option value="Perguruan Tinggi">Perguruan Tinggi</option>
//               <option value="SMA">SMA</option>
//               <option value="SMP">SMP</option>
//             </select>
//           </div>

//           <div className="mb-3">
//             <Input
//               label="Nama Institusi*"
//               type="text"
//               className="form-control"
//               classLabel="form-label"
//               onChange={(e) => setValues({ ...values, name: e.target.value })}
//             />
//           </div>

//           <ToastContainer />

//           <div className="col mt-3 d-flex justify-content-end">
//             <button
//               className="btn text-white ms-3"
//               style={{ backgroundColor: "#2B3990" }}
//             >
//               Simpan
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddSma;
