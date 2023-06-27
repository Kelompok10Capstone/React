import FontBold from "../../../../elements/FontBold/FontBold";
import Input from "../../../../elements/Input/Input";
import ModalTambah from "../../../../elements/Modal/ModalTambah";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import api from "../../../../config/https";
import "react-toastify/dist/ReactToastify.css";

const AddBpjs = () => {

  const navigate = useNavigate()  
  const [values, setValues] = useState({
    provider_name: "",
    product_type: ""
  })

     const handleSimpan = (event) => {
          event.preventDefault();

          if (validate()) {               
               api.post(`admin/insurance`, values)
               .then(res => {
                    // console.log(res)
                    ModalTambah();
                    navigate('/admin/layanan/bpjs')
               })
               .catch(err => console.log(err))
          }

     };
	const validate = () => {
          let result = true;

          if (values.provider_name === "" || values.provider_name === null) {
               result = false;
               toast.warning("Masukan Kode BPJS");
          }

          if (values.product_type === "" || values.product_type === null) {
               result = false;
               toast.warning("Masukan Jenis BPJS");
          }
          return result;
     };

     return (
          <div className="add-bpjs px-4 py-4">
               <FontBold $26 className="pb-3">
               Tambah Produk BPJS
               </FontBold>
               <div className="col">
                    <form action="">
                         <div className="mb-3">
                              <Input
                              label="Kode BPJS*"
                              type="text"
                              className="form-control mb-3"
                              classLabel="form-label"
                              onChange={(e) => setValues({ ...values, provider_name: e.target.value})}
                              />
                         </div>
                         <div className="mb-3">
                              <Input
                              label="Jenis BPJS*"
                              type="text"
                              className="form-control mb-3"
                              classLabel="form-label"
                              onChange={(e) => setValues({ ...values, product_type: e.target.value})}
                              />
                         </div>
                    </form>
               </div>
               <ToastContainer/>
               <div className="col mt-3 d-flex justify-content-end">
                    <Link to="/admin/layanan/bpjs">
                         <Button
                         style={{ backgroundColor: "#2B3990", borderRadius: "8px" }}
                         onClick={handleSimpan}
                         >
                         Simpan
                         </Button>
                    </Link>
               </div>
          </div>
     );
};

export default AddBpjs;
