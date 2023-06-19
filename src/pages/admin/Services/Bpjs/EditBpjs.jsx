import FontBold from "../../../../elements/FontBold/FontBold";
import Input from "../../../../elements/Input/Input";
import ModalEdit from "../../../../elements/Modal/ModalEdit"

import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../../../../config/Api";

const EditBpjs = () => {

    const authToken = sessionStorage.getItem('Auth Token');
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
                const responseBpjs = await axios.get(`${API_BASE}/insurance/` + id, {
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    }
                });

                const bpjsData = responseBpjs.data.data
                setValues(bpjsData)
                console.log('Bpjs data :', bpjsData);

            } catch (error) {
                console.log('Error : ', error);
            }
        }
        getBpjs()
    }, [])

    // put
    const handleSimpan = (event) => {
        event.preventDefault();
        axios.put(`${API_BASE}/admin/insurance/` + id, values, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        })
            .then(res => {
                console.log(res);
                ModalEdit();
                navigate('/admin/layanan/bpjs')
            })
            .catch(err => console.log(err));
    }

    return(
        <div className="edit-bpjs px-4 py-4">
            <FontBold $26 className="pb-3">Edit Produk BPJS</FontBold>
            <div className="col">
                <form onSubmit={handleSimpan}>
                    <div className="mb-3">
                        <Input
                            label='Kode Produk*'
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
                            label='Jenis Produk*'
                            type='text'
                            className='form-control'
                            classLabel='form-label'
                            value={values.product_type}
                            onChange={e => setValues({...values, product_type: e.target.value})}
                        />
                    </div>
                </form>
            </div>
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