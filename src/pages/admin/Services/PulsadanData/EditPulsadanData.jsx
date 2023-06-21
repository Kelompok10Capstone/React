import { Button } from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, React, useEffect } from "react"

import FontBold from "../../../../elements/FontBold/FontBold"
import Input from "../../../../elements/Input/Input"
import ModalEdit from "../../../../elements/Modal/ModalEdit"


import axios from "axios"
import { API_BASE } from "../../../../config/Api"
import Textarea from "../../../../elements/Textarea/Textarea"



const EditPulsadanData = () => {



    const authToken = sessionStorage.getItem('Auth Token');
    const navigate = useNavigate()
    const { id  } = useParams();
    console.log(id);

    const [values, setValues] = useState({
        id : "",
        code : "",
        name : "" ,
        provider : "",
        type : "",
        price : "",
        description : "",
        is_active : "",
    })
    
    // GET
   
        const getPpd = async () => {
          try {
            const responsePpd = await axios.get(`${API_BASE}/admin/ppd/` + id ,{
                headers : {
                    'Authorization': `Bearer ${authToken}`
                }
            }); 

            const ppdData = responsePpd.data.data
            setValues(ppdData)
            console.log("data edit pulsa:", ppdData);

          } catch (error) {
            console.error('Error :', error);
          }
        };
    
        useEffect(() => {
            getPpd();
          }, []);
     

    //   PUT
    const handleSimpan = (event) => {
        event.preventDefault();
        console.log("values :", values);

        axios.put(`${API_BASE}/admin/ppd/` + id, values, {
            headers: {
                'Authorization' : `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res =>{
            console.log(res);
            ModalEdit(); 
            navigate('/admin/layanan/pulsadandata')
            console.log("Data terbaru:", values);
        })
        .catch(err => console.log(err));
    }


    return(
        <>
        <div className="edit-pulsa-data py-4 px-4">
            <div className="row">
                <div className="nama-edit-pulsa-data">
                    <FontBold $26 className="pb-3">Edit Produk Pulsa & Data</FontBold>
                </div>

                <form className="col-12 Edit-pulsadata" onSubmit={handleSimpan}>
                    <div className="mb-3">
                        <Input
                            className="form-control"
                            classLabel="form-label"
                            label="Kode Pulsa & Data*"
                            type="text"
                            name="code"
                            disabled={true}
                            // placeholder='TSEL001'
                            value={values.code}
                            onChange={e => setValues({ ...values, code: e.target.value })}
                        />
                    </div>

                    <div className="mb-3">
                        <Input
                            className="form-control"
                            classLabel="form-label"
                            label="Provider*"
                            type="text"
                            disabled={true}
                            value={values.provider}
                            onChange={e => setValues({ ...values, provider: e.target.value })}
                        />
                    </div>

                    <div className="mb-3">
                        <Input
                            className="form-control"
                            classLabel="form-label"
                            label="Tipe*"
                            type="text"
                            disabled={true}
                            value={values.type}
                            onChange={e => setValues({ ...values, type: e.target.value })}
                        />
                    </div>

                    <div className="mb-3">
                        <Input
                            className="form-control"
                            classLabel="form-label"
                            label="Nama Produk*"
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={e => setValues({ ...values, name: e.target.value })}
                        />
                    </div>

                    <div className="mb-3">
                        <Input
                            className="form-control"
                            classLabel="form-label"
                            label="Harga Produk*"
                            type="text"
                            name="price"
                            value={values.price}
                            onChange={e => setValues({ ...values, price: e.target.value })}
                        />
                    </div>

                    <div className="mb-3">
                        <Textarea
                            className="form-control"
                            classLabel="form-label"
                            label="Deskripsi Produk*"
                            type="text"
                            name="description"
                            rows={3}
                            value={values.description}
                            onChange={e => setValues({ ...values, description: e.target.value })}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Status Aktif</label>
                            <select
                                className="form-select"
                                value={values.is_active}
                                name="is_active"
                                onChange={(e) => setValues({...values, is_active: e.target.value === "true" })}
                            >
                                <option value={true}>Aktif</option>
                                <option value={false}>Tidak Aktif</option>
                            </select>
                    </div>

                    <div className="d-flex justify-content-end ">  
                            <Button
                            type="submit" className="btn"
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

export default EditPulsadanData