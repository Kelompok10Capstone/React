import FontBold from "../../../../elements/FontBold/FontBold";
import Input from "../../../../elements/Input/Input";
import ModalTambah from "../../../../elements/Modal/ModalTambah";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { API_BASE } from "../../../../config/Api";

const AddPromo = () => {

  const navigate = useNavigate()
  const authToken = sessionStorage.getItem("Auth Token")
  const [values, setValues] = useState({
    discount_code: "",
    image: "",
    description:"",
    discount_price: ""
  })

  const handleSimpan = (event) => {
    
    event.preventDefault()

    axios.post(
      `${API_BASE}/admin/discount`, values,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${authToken}`,
        }
      }
    )
    .then(res => {
      console.log(res)
      ModalTambah()
      navigate('/admin/layanan/promo')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="add-promo px-4 py-4">
      <FontBold $26 className="pb-3">Tambah Produk Promo</FontBold>
      <div className="col">
        <form action="">
          <Input 
            label="Kode Promo*" 
            type="text" 
            className="form-control mb-3"
            classLabel='form-label' 
            onChange={(e) => setValues({ ...values, discount_code: e.target.value})}
          />
          <Input 
            label="Desckripsi*" 
            type="text" 
            className="form-control mb-3"
            classLabel='form-label' 
            style={{height:'8rem'}}
            onChange={(e) => setValues({ ...values, description: e.target.value})}
          />
          <Input 
            label="Gambar Promo*" 
            type="file" 
            className="form-control mb-3"
            classLabel='form-label' 
            onChange={(e) => setValues({ ...values, image: e.target.files[0] })}
          />
          <Input 
            label="Nominal Promo*" 
            type="text" 
            className="form-control mb-3"
            classLabel='form-label' 
            onChange={(e) => setValues({ ...values, discount_price: e.target.value})}
          />
        </form>
      </div>
      <div className="col mt-3 d-flex justify-content-end">
        <Link to="/admin/layanan/promo">
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

export default AddPromo;
