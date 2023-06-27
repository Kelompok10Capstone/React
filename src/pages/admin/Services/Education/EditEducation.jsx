import FontBold from "../../../../elements/FontBold/FontBold";
import Input from "../../../../elements/Input/Input";
import ModalEdit from "../../../../elements/Modal/ModalEdit";

import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const EditEducation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    id: "",
    nama: "",
    layanan: "",
    coba: "",
  });

  useEffect(() => {
    axios
      .get("https://642e1dab2b883abc640747d3.mockapi.io/transaction/" + id)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSimpan = (event) => {
    event.preventDefault();
    axios
      .put(
        "https://642e1dab2b883abc640747d3.mockapi.io/transaction/" + id,
        values
      )
      .then((res) => {
        // console.log(res);
        ModalEdit();
        navigate("/admin/layanan/pendidikan");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="add-pendidikan px-4 py-4">
      <FontBold $26 className="pb-3">
        Edit Produk Pendidikan
      </FontBold>
      <div className="col">
        <form action="" onSubmit={handleSimpan}>
          <div className="mb-3">
            <Input
              label="Kode Institusi*"
              type="text"
              className="form-control"
              classLabel="form-label"
              disabled={true}
              value={values.nama}
              onChange={(e) => setValues({ ...values, nama: e.target.value })}
            />
          </div>

          {/* <div className="mb-3">
            <Input
              label="Kategori*"
              type="text"
              className="form-control"
              classLabel="form-label"
              value={values.coba}
              onChange={(e) => setValues({ ...values, coba: e.target.value })}
            />
          </div> */}

          <div className="mb-3">
            <label className="form-label">Kategori*</label>
            <select
              label="Kategori*"
              type="text"
              className="form-select"
              classLabel="form-label"
              value={values.coba}
              onChange={(e) => setValues({ ...values, coba: e.target.value })}
            >
              <option value="" hidden>
                Pilih Kategori
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
              value={values.layanan}
              onChange={(e) =>
                setValues({ ...values, layanan: e.target.value })
              }
            />
          </div>
          <div className="col mt-3 d-flex justify-content-end">
            <button
              className="btn text-white"
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

export default EditEducation;
