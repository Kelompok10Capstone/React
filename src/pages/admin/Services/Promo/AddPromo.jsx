import FontBold from "../../../../elements/FontBold/FontBold";
import Input from "../../../../elements/Input/Input";
import ModalTambah from "../../../../elements/Modal/ModalTambah";
import Textarea from "../../../../elements/Textarea/Textarea";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import unduhgambar from "../../../../assets/img/unduhgambar.png"
import FontReguler from "../../../../elements/FontReguler/FontReguler";
import api from "../../../../config/https";

const AddPromo = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    discount_code: "",
    image: "",
    description: "",
    discount_price: "",
  });

  const handleSimpan = (event) => {
    event.preventDefault();

    api
      .post(`admin/discount`, values, {
        headers : {
          "Content-Type" : "multipart/form-data"
        }
      })
      .then((res) => {
        console.log(res);
        ModalTambah();
        navigate("/admin/layanan/promo");
      })
      .catch((err) => console.log(err));
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
    <div className="add-promo px-4 py-4">
      <FontBold $26 className="pb-3">
        Tambah Produk Promo
      </FontBold>
      <div className="col">
        <form action="">
          <Input
            label="Kode Promo*"
            type="text"
            className="form-control mb-3"
            classLabel="form-label"
            onChange={(e) =>
              setValues({ ...values, discount_code: e.target.value })
            }
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

export default AddPromo;
