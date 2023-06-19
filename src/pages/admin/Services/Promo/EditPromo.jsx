import React from "react";
import FontBold from "../../../../elements/FontBold/FontBold";
import Input from "../../../../elements/Input/Input";
import ModalEdit from "../../../../elements/Modal/ModalEdit";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import { API_BASE } from "../../../../config/Api";
import { useEffect, useState } from "react";

const EditPromo = () => {
  const authToken = sessionStorage.getItem("Auth Token");
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    discount_code: "",
    image: null,
    description: "",
    discount_price: ""
  });

  // get
  useEffect(() => {
    const getPromo = async () => {
      try {
        const responsePromo = await axios.get(`${API_BASE}/discount/` + id, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const promoData = responsePromo.data.data;
        setValues(promoData);
        console.log("Promo data :", promoData);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    getPromo();
  }, []);

  // put
  const handleSimpan = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("discount_code", values.discount_code);
    if (values.image) {
      formData.append("image", values.image);
    }
    formData.append("description", values.description);
    formData.append("discount_price", values.discount_price);

    axios
      .put(`${API_BASE}/admin/discount/` + id, formData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        ModalEdit();
        navigate("/admin/layanan/promo");
      })
      .catch((err) => console.log(err));
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setValues({ ...values, image: e.target.files[0] });
    } else {
      setValues({ ...values, image: null });
    }
  };

  return (
    <div className="edit-promo px-4 py-4">
      <FontBold $26 className="pb-3">Edit Produk Promo</FontBold>
      <div className="col">
        <form action="">
          <Input
            label="Kode Promo*"
            type="text"
            className="form-control mb-3"
            disabled={true}
            classLabel="form-label"
            value={values.discount_code}
          />

          <Input
            label="Nominal Promo*"
            type="text"
            className="form-control mb-3"
            classLabel="form-label"
            value={values.discount_price}
            onChange={(e) =>
              setValues({ ...values, discount_price: e.target.value })
            }
          />

          <Input
            label="Gambar*"
            type="file"
            className="form-control mb-3"
            classLabel="form-label"
            onChange={handleImageChange}
          />

          <Input
            label="Deskripsi*"
            type="text"
            className="form-control mb-3"
            classLabel="form-label"
            value={values.description}
            onChange={(e) =>
              setValues({ ...values, description: e.target.value })
            }
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

export default EditPromo;
