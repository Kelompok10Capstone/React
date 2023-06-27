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
    nama: "",
    layanan: "",
    coba: "",
  });

  // alert tambah
  const [error, setError] = useState(false);

  const handleSimpan = (event) => {
    event.preventDefault();
    if (validate()) {
      axios
        .post(
          "https://642e1dab2b883abc640747d3.mockapi.io/transaction/",
          values
        )

        .then((res) => {
          // console.log(res);
          ModalTambah();
          navigate("/admin/layanan/pendidikan");
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        });
    }
  };

  // const handleSimpan = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post("https://642e1dab2b883abc640747d3.mockapi.io/transaction/", values)
  //     .then((res) => {
  //       console.log(res);
  //       ModalTambah();
  //       navigate("/admin/layanan/pendidikan");
  //     })
  //     .catch((err) => console.log(err));
  // };

  const validate = () => {
    let result = true;

    if (values.nama === "" || values.nama === null) {
      result = false;
      toast.warning("Masukan Kode Istitusi");
    }

    if (values.coba === "" || values.coba === null) {
      result = false;
      toast.warning("Masukan Kategori");
    }

    if (values.layanan === "" || values.layanan === null) {
      result = false;
      toast.warning("Masukan Nama Institusi");
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
              onChange={(e) => setValues({ ...values, nama: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Kategori*</label>
            <select
              label="Kategori*"
              type="text"
              className="form-select"
              classLabel="form-label"
              onChange={(e) => setValues({ ...values, coba: e.target.value })}
            >
              <option value="" hidden>
                Pilih
              </option>
              <option value="Perguruan Tinggi">Perguruan Tinggi</option>
              <option value="SMA">SMA</option>
              <option value="SMP">SMP</option>
            </select>
          </div>

          <div className="mb-3">
            <Input
              label="Nama Institusi*"
              type="text"
              className="form-control"
              classLabel="form-label"
              onChange={(e) =>
                setValues({ ...values, layanan: e.target.value })
              }
            />
          </div>

          <ToastContainer />

          <div className="col mt-3 d-flex justify-content-end">
            <button
              className="btn text-white ms-3"
              style={{ backgroundColor: "#2B3990" }}
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEducation;
