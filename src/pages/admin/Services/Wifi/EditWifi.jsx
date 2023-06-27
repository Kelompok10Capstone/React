import { Link, useNavigate, useParams } from "react-router-dom";

import FontBold from "../../../../elements/FontBold/FontBold";
import Input from "../../../../elements/Input/Input";
import ModalEdit from "../../../../elements/Modal/ModalEdit";

import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import api from "../../../../config/https";
import "react-toastify/dist/ReactToastify.css";

const EditWifi = () => {  
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    product_type: "",
    provider_name: "",
  });

  // get
  useEffect(() => {
    const getWifiById = async () => {
      try {
        const responseWifi = await api.get(`wifi/` + id);

        const wifiData = responseWifi.data.data;
        setValues(wifiData);
        // console.log("Bpjs data :", wifiData);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    getWifiById();
  }, []);

  // put
  const handleSimpan = (event) => {
    event.preventDefault();

    if (validate()) {      
      api
        .put(`admin/wifi/` + id, values)
        .then((res) => {
          // console.log(res);
          ModalEdit();
          navigate("/admin/layanan/wifi");
        })
        .catch((err) => console.log(err));
    }
  };

  const validate = () => {
      let result = true;
            
      if (values.product_type === "" || values.product_type === null) {
            result = false;
            toast.warning("Masukan Jenis WIFI");
      }

      return result;
  };

  return (
    <div className="edit-wifi px-4 py-4">
      <FontBold $26 className="pb-3">
        Edit Produk Wifi
      </FontBold>
      <div className="col">
        <form action="">
          <div className="mb-3">
            <Input
              label="Kode WIFI*"
              type="text"
              className="form-control"
              classLabel="form-label"
              disabled={true}
              value={values.provider_name}
            />
          </div>

          <div className="mb-3">
            <Input
              label="Jenis WIFI*"
              type="text"
              className="form-control"
              classLabel="form-label"
              value={values.product_type}
              onChange={e => setValues({...values, product_type: e.target.value})}
            />
          </div>
        </form>
      </div>
      <ToastContainer/>
      <div className="col mt-3 d-flex justify-content-end">
        <Link to="/admin/layanan/wifi">
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

export default EditWifi;
