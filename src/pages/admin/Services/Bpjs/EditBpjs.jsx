import FontBold from "../../../../elements/FontBold/FontBold";
import Input from "../../../../elements/Input/Input";
import ModalEdit from "../../../../elements/Modal/ModalEdit"

import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import api from "../../../../config/https";
import "react-toastify/dist/ReactToastify.css";

const EditBpjs = () => {
    
     const { id } = useParams()
     const navigate = useNavigate();

     const [values, setValues] = useState({
          provider_name: "",
          product_type: ""
     })

    // get
     useEffect(() => {
          const getBpjs = async () => {
               try {
                    const responseBpjs = await api.get(`insurance/` + id);

                    const bpjsData = responseBpjs.data.data
                    setValues(bpjsData)
                    // console.log('Bpjs data :', bpjsData);

               } catch (error) {
                    console.log('Error : ', error);
               }
          }
          getBpjs()
     }, [])

    // put
     const handleSimpan = (event) => {
          event.preventDefault();

          if (validate()) {               
               api.put(`admin/insurance/` + id, values)
                    .then(res => {
                         // console.log(res);
                         ModalEdit();
                         navigate('/admin/layanan/bpjs')
                    })
                    .catch(err => console.log(err));
          }
     }

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

    return(
          <div className="edit-bpjs px-4 py-4">
               <FontBold $26 className="pb-3">Edit Produk BPJS</FontBold>
               <div className="col">
                    <form onSubmit={handleSimpan}>
                         <div className="mb-3">
                         <Input
                              label='Kode BPJS*'
                              type='text'
                              className='form-control'
                              classLabel='form-label'
                              disabled={true}
                              value={values.provider_name}
                              onChange={e => setValues({...values, provider_name: e.target.value})}
                         />
                         </div>

                         <div className="mb-3">
                         <Input
                              label='Jenis BPJS*'
                              type='text'
                              className='form-control'
                              classLabel='form-label'
                              value={values.product_type}
                              onChange={e => setValues({...values, product_type: e.target.value})}
                         />
                         </div>
                    </form>
               </div>
               <ToastContainer/>
               <div className="col mt-3 d-flex justify-content-end">
                    <Link to='/admin/layanan/bpjs'>
                         <Button
                         style={{ backgroundColor: "#2B3990", borderRadius: "8px" }}
                         onClick={handleSimpan}
                         >
                         Simpan
                         </Button>
                    </Link>
               </div>
          </div>
    )
}

export default EditBpjs;