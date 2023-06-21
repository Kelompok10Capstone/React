import FontBold from "../../../../elements/FontBold/FontBold"
import Input from "../../../../elements/Input/Input"
import ModalTambah from "../../../../elements/Modal/ModalTambah"
import Textarea from "../../../../elements/Textarea/Textarea"

import { Link, useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"
import React from "react"
import { useState } from "react"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import { API_BASE } from "../../../../config/Api"
import axios from "axios"
import { v4 } from "uuid";


const AddPulsadanData = () => {

    const authToken = sessionStorage.getItem('Auth Token');
    console.log('auth token :', authToken);
    const navigate = useNavigate();

    const [values, setValues] = useState({
        id : v4(),
        code : "",
        name : "" ,
        provider : "",
        type : "",
        price : "",
        description : "",
        is_active : "",
    })

    // Validasi
    const [error, setError] = useState(false);
    const validate = () => {
      let result = true;


      if (values.code === '' || values.code === null) {
          result = false;
          toast.warning("Masukan Kode Pulsa & Data");
      }

      if (values.provider === '' || values.provider === null) {
          result = false;
          toast.warning("Pilih Provider");
      }

      if (values.name === '' || values.name === null) {
        result = false;
        toast.warning("Masukan Nama");
       }

      if (values.type === '' || values.type === null) {
        result = false;
        toast.warning("Pilih Tipe");
      }

      if (values.price === '' || values.price === null) {
        result = false;
        toast.warning("Masukan Harga");
      }

      if (values.description === '' || values.description === null) {
          result = false;
          toast.warning("Masukan Deskripsi");
      }

      if (values.is_active === '' || values.is_active === null) {
        result = false;
        toast.warning("Pilih Status Aktif");
    }

      return result;
        }

     // post
     const handleSubmit = (event) => {
        event.preventDefault();
            console.log("valuse :", values);

        if (validate()) {
        axios.post(`${API_BASE}/admin/ppd`, values,
            {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json'
                }
                
            }
            
        )
            .then(res => {
                console.log(res);
                ModalTambah();
                navigate('/admin/layanan/pulsadandata')
            })
            .catch(err => console.log(err.response));
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
      
        if (name === "price" && (value === "" || isNaN(parseFloat(value)))) {
          setValues({ ...values, [name]: null });
        } else {
          setValues({ ...values, [name]: parseFloat(value) });
        }
      };
      
    
    return (
        <>
        <div className="add-pulsa-data py-4 px-4">
            <FontBold $26 className="pb-3">Tambah Produk Pulsa & Data</FontBold>
            
        <form onSubmit={handleSubmit} className="px-4">
            
                        <Input
                            className="form-control mb-3"
                            classLabel="form-label"
                            label="Kode Pulsa & Data*"
                            type="text"
                            // placeholder='TSEL001'
                            value={values.code}
                            onChange={e => setValues({ ...values, code: e.target.value })}
                        />
                        <ToastContainer />
                    
                    <div className="mb-3">
                        <label className="form-label">Provider*</label>
                            <select
                                className="form-select"
                                value={values.provider}
                                onChange={(e) =>
                                    setValues({ ...values, provider: e.target.value })
                                }
                                >
                                <option value=""hidden>Pilih Provider</option>
                                <option value="Telkomsel">Telkomsel</option>
                                <option value="Indosat">Indosat</option>
                                <option value="XL">XL</option>
                                <option value="Axis">Axis</option>
                                <option value="Three">Three</option>
                            </select>
                            <ToastContainer />
                    </div>

                        <Input
                            className="form-control mb-3"
                            classLabel="form-label"
                            label="Nama*"
                            type="text"
                            value={values.name}
                            onChange={e => setValues({ ...values, name: e.target.value })}
                        />
                        <ToastContainer />

                    <div className="mb-3">
                        <label className="form-label">Tipe*</label>
                        <select
                            className="form-select"
                            value={values.type}
                            onChange={(e) =>
                                setValues({ ...values, type: e.target.value })
                            }
                        >
                            <option value="" hidden>Pilih Tipe</option>
                            <option value="paket_data">Paket Data</option>
                            <option value="pulsa">Pulsa</option>
                        </select>
                        <ToastContainer />
                    </div>
                    
                        <Input
                            className="form-control mb-3"
                            classLabel="form-label"
                            label="Harga*"
                            name="price"
                            type="text"
                            value={values.price}
                            onChange={handleChange}
                        />
                        <ToastContainer />

                        <Textarea
                            className="form-control mb-3"
                            classLabel="form-label"
                            label="Deskripsi*"
                            type="text"
                            rows={3}
                            value={values.description}
                            onChange={e => setValues({ ...values, description: e.target.value })}
                        />
                        <ToastContainer />

                    <div className="mb-3">
                        <label className="form-label">Status Aktif</label>
                            <select
                                className="form-select"
                                value={values.is_active}
                                onChange={(e) => setValues({ ...values, is_active: e.target.value === "true"})}
                            >
                                <option value="" disabled hidden>Pilih Status</option>
                                <option value={true}>Aktif</option>
                                <option value={false}>Tidak Aktif</option>
                            </select>
                            <ToastContainer />
                    </div>
                    

                <div className="mt-3 d-flex justify-content-end">
                        <Button className="btn" type="submit"
                            style={{ backgroundColor: "#2B3990", borderRadius: "8px" }}
                        >
                            Simpan
                        </Button>
                </div>
            </form>
        </div>
        </>
    )
}

export default AddPulsadanData