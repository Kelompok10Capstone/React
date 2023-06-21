
import FontBold from "../../../../elements/FontBold/FontBold"
import FontReguler from "../../../../elements/FontReguler/FontReguler"
import Input from "../../../../elements/Input/Input"
import ModalEdit from "../../../../elements/Modal/ModalEdit"
import unduhgambar from "../../../../assets/img/unduhgambar.png"

import { API_BASE } from "../../../../config/Api"
import axios from "axios"

import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import { useRef } from "react"

const EditTopup = () => {

    const authToken = sessionStorage.getItem('Auth Token');
    const { id } = useParams()
    const navigate = useNavigate();

    const [values, setValues] = useState({
        id: "",
        name: "" ,
        bank_code: "",
        image : ""
        
    })

    // GET
        const getTopup = async () => {
            try{
                const responseTopup = await axios.get(`${API_BASE}/bank/` + id, {
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    }
                })

                const topupData = responseTopup.data.data
                setValues(topupData)
                // console.log('Topup Data :', topupData);

            }
            catch (error) {
                console.log('Error :', error);
            }
        }
        useEffect(() => {
            getTopup();
        }, []);
    

    // PUT
    const handleSimpan = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('bank_code', values.bank_code);
        formData.append('image', values.image);

        console.log("form data: ",formData);
        console.log("values :", values);

        axios.put(`${API_BASE}/admin/bank/` + id, formData,{
            headers : { 
                'Authorization' : `Bearer ${authToken}`,
                'Content-Type': 'multipart/form-data'
            },
        })
        .then(res => {
            console.log(res);
            ModalEdit();
            navigate('/admin/layanan/topup');
        })
        .catch(err => console.log(err));
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
        <div className="edit-topup px-4 py-4">
            <FontBold $26 className="pb-3">Edit Metode Top Up</FontBold>
            <div className="col">
                <form onSubmit={handleSimpan}>
                    <div className="mb-3">
                        <Input
                            className="form-control"
                            classLabel="form-label"
                            label="Kode Bank*"
                            type="text"
                            name="bank_code"
                            disabled={true}
                            value={values.bank_code}
                            onChange={e => setValues({...values, bank_code: e.target.value})}
                        />
                    </div>

                    <div className="mb-3">
                        <Input
                            className="form-control"
                            classLabel="form-label"
                            label="Nama*"
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={e => setValues({...values, name: e.target.value})}
                        />
                    </div>

                    <div className="mb-3 drag-drop-area" onClick={handleClick} onDragOver={handleDragOver} onDrop={handleDrop}>
                        <Input
                            className="form-control input_field"
                            classLabel="form-label"
                            name="image"
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={handleFileChange}
                        />
                        <img src={unduhgambar} alt="unduh gambar" />
                            <FontBold $162 className="pt-2">
                                {uploadedFile ? uploadedFile.name : "Unggah Gambar"}
                            </FontBold>
                            <FontReguler $12>
                                {uploadedFile ? `${uploadedFile.size} bytes` : "Seret kesini untuk mengunggah"}
                            </FontReguler>
                    </div>  

                    <div className="col mt-3 d-flex justify-content-end ">
                            <Button type="submit" className="btn"
                                style={{ backgroundColor: "#2B3990", borderRadius: "8px" }}
                            >
                                Simpan
                            </Button>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}

export default EditTopup