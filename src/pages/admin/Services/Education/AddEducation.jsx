import FontBold from "../../../../elements/FontBold/FontBold";
import Input from "../../../../elements/Input/Input";
import ModalTambah from "../../../../elements/Modal/ModalTambah";

import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const AddEducation = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    intitusi: "",
    coba: "",
  });

  // alert tambah
  const [error, setError] = useState(false);

  const handleSimpan = (event) => {
    event.preventDefault();
    if (validate()) {
      axios
        .post("https://649585f2b08e17c917923896.mockapi.io/pendidikan", values)

        .then((res) => {
          console.log(res);
          navigate("/admin/layanan/pendidikan");
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        });
    }
  };

  const validate = () => {
    let result = true;

    if (values.name === "" || values.name === null) {
      result = false;
      toast.warning("Masukan Kode PDAM");
    }

    if (values.intitusi === "" || values.intitusi === null) {
      result = false;
      toast.warning("Masukan Jenis PDAM");
    }

    if (values.coba === "" || values.coba === null) {
      result = false;
      toast.warning("Masukan Wilayah");
    }

    return result;
  };

  return (
    <div className="add-pendidikan px-4 py-4">
      <FontBold $26 className="pb-3">
        Tambah Produk Pendidikan
      </FontBold>
      <div className="col">
        <form onSubmit={handleSimpan}>
          <div className="mb-3">
            <Input
              label="Kode Institusi*"
              type="text"
              className="form-control"
              classLabel="form-label"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Kategori*</label>
            <select
              label="Kategori*"
              type="text"
              className="form-control"
              classLabel="form-label"
              onChange={(e) =>
                setValues({ ...values, intitusi: e.target.value })
              }
            >
              <option value="" hidden>
                Pilih Kategori
              </option>
              <option value="Telkomsel">Perguruan Tinggi</option>
              <option value="Indosat">SMA</option>
              <option value="XL">SMP</option>
            </select>
          </div>

          <div className="mb-3">
            <Input
              label="Nama Institusi*"
              type="text"
              className="form-control"
              classLabel="form-label"
              onChange={(e) => setValues({ ...values, coba: e.target.value })}
            />
          </div>
          <ToastContainer />
        </form>
      </div>
      <div className="col mt-3 d-flex justify-content-end">
        <button
          className="btn text-white ms-3"
          style={{ backgroundColor: "#2B3990" }}
        >
          Simpan
        </button>
      </div>
    </div>
  );
};

export default AddEducation;
