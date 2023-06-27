import React from "react";
import { useState, useEffect } from "react";

import FontBold from "../../../../elements/FontBold/FontBold";
import FontReguler from "../../../../elements/FontReguler/FontReguler";
import Input from "../../../../elements/Input/Input";
import ModalTambah from "../../../../elements/Modal/ModalTambah";
import unduhgambar from "../../../../assets/img/unduhgambar.png"

import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import { v4, validate } from "uuid";
import api from "../../../../config/https";

const AddTopup = () => {
  
    const navigate = useNavigate();

    const [values, setValues] = useState({
        id : v4(),
        bank_code: "",
        image: null ,
        name: "",
        
    })
    // Validasi
    const validate = () => {
      let result = true;

      if (values.bank_code === '' || values.bank_code === null) {
          result = false;
          toast.warning("Masukkan Kode Bank");
      } 

      if (values.name === '' || values.name === null) {
          result = false;
          toast.warning("Masukan Nama Bank");
      }

      if (values.image === '' || values.image === null) {
          result = false;
          toast.warning("Masukan Gambar");
      }

      

      return result;
    }

    // post
    const handleSubmit = (event) => {
      event.preventDefault();
        const formData = new FormData();
        formData.append("id", values.id);
        formData.append("bank_code", values.bank_code);
        formData.append("image", values.image);
        formData.append("name", values.name);

      if (validate()) {
      api.post(`admin/bank`, formData, {
        headers : {
          "Content-Type" : "multipart/form-data"
        }
      })
          .then(res => {
              // console.log(res);
              setExistingBankCodes([...existingBankCodes, values.bank_code]);
              ModalTambah();
              navigate('/admin/layanan/topup')
          })
          .catch(err => console.log(err.response));
        }
  }

    // File onChange
    const handleFileChange = (event) => {
      if (event.target && event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        setValues({ ...values, image: file });
        setUploadedFile(file);
      }
    };
    // Drop File 
    const handleDragOver = (event) => {
      event.preventDefault();
    };
    const handleDrop = (event) => {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      setValues({ ...values, image: file });
      setUploadedFile(file);
    };
    
  //onClick file
  const handleClick = () => {
      document.querySelector(".input_field").click();
    };
  const [uploadedFile, setUploadedFile] = useState(null);  

  return (
    <>
        <div className="add-topup px-4 py-4">
            <FontBold $26>Tambah Metode Top Up</FontBold>
        </div>

        <form onSubmit={handleSubmit} className="px-4">
              
                  <Input
                    className="form-control mb-3"
                    classLabel="form-label"
                    label="Kode BANK*"
                    type="text"
                    value={values.bank_code}
                    onChange={e => setValues({ ...values, bank_code: e.target.value })}
                  />
                  <ToastContainer />
              
                  <Input
                    className="form-control mb-3"
                    classLabel="form-label"
                    label="Nama*"
                    type="text"
                    value={values.name}
                    onChange={e => setValues({ ...values, name: e.target.value })}
                  />
                  <ToastContainer />
              
                  <div className="mb-3 drag-drop-area" onClick={handleClick}onDragOver={handleDragOver} onDrop={handleDrop}>
                          <Input
                              className="form-control input_field"
                              classLabel="form-label"
                              name="image"
                              type="file"
                              accept="image/*"
                              hidden
                              // value={values.image}
                              onChange={handleFileChange} 
                          />

                          <ToastContainer />

                          <img src={unduhgambar} alt="unduh gambar" />
                              <FontBold $162 className="pt-2">
                                  {uploadedFile ? uploadedFile.name : "Unggah Gambar"}
                              </FontBold>
                              <FontReguler $12>
                                  {uploadedFile ? `${uploadedFile.size} bytes` : "Seret kesini untuk mengunggah"}
                              </FontReguler>
                      </div>  
              

              <div className="col mt-3 d-flex justify-content-end">
                      <Button className="btn"  type="submit" style={{ backgroundColor: "#2B3990", borderRadius: "8px" }}>
                          Simpan
                      </Button>
              </div>
        </form>
    </>
  );
};

export default AddTopup;
