import React from "react";
import FontBold from "../../../../elements/FontBold/FontBold";
import Input from "../../../../elements/Input/Input";
import ModalEdit from "../../../../elements/Modal/ModalEdit";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import { API_BASE } from "../../../../config/Api";
import { useEffect, useState } from "react";
import unduhgambar from "../../../../assets/img/unduhgambar.png";
import FontReguler from "../../../../elements/FontReguler/FontReguler";
import Textarea from "../../../../elements/Textarea/Textarea";
import api from "../../../../config/https";

const EditPromo = () => {
  const authToken = sessionStorage.getItem("Auth Token");
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    discount_code: "",
    image: null,
    description: "",
    discount_price: "",
  });

  // get
  useEffect(() => {
    const getPromo = async () => {
      try {
        const responsePromo = await api.get(`discount/` + id);

        const promoData = responsePromo.data.data;
        setValues(promoData);
        // console.log("Promo data :", promoData);
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

    api
      .put(`admin/discount/` + id, formData)
      .then((res) => {
        // console.log(res);
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
    <div className="edit-promo px-4 py-4">
      <FontBold $26 className="pb-3">
        Edit Produk Promo
      </FontBold>
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

          <Textarea
            className="form-control mb-3"
            classLabel="form-label"
            label="Deskripsi*"
            type="text"
            rows={3}
            value={values.description}
            onChange={(e) =>
              setValues({ ...values, description: e.target.value })
            }
          />

          <div
            className="mb-3 drag-drop-area"
            onClick={handleClick}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
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

            <img src={unduhgambar} alt="unduh gambar" />
            <FontBold $162 className="pt-2">
              {uploadedFile ? uploadedFile.name : "Unggah Gambar"}
            </FontBold>
            <FontReguler $12>
              {uploadedFile
                ? `${uploadedFile.size} bytes`
                : "Seret kesini untuk mengunggah"}
            </FontReguler>
          </div>

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
