import FontBold from "../../../../elements/FontBold/FontBold";
import Input from "../../../../elements/Input/Input";
import ModalEdit from "../../../../elements/Modal/ModalEdit";

// import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const EditEducation = () => {
  // const handleSimpan = () => {
  //     ModalEdit()
  // }
  const { id } = useParams();
  const [values, setValues] = useState({
    id: "",
    name: "",
    intitusi: "",
    coba: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://649585f2b08e17c917923896.mockapi.io/pendidikan/" + id)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put(
        "https://649585f2b08e17c917923896.mockapi.io/pendidikan/" + id,
        values
      )
      .then((res) => {
        console.log(res);
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
        <form action="" onSubmit={handleUpdate}>
          <div className="mb-3">
            <Input
              label="Kode Institusi*"
              type="text"
              className="form-control"
              classLabel="form-label"
              disabled={true}
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <Input
              label="Kategori*"
              type="text"
              className="form-control"
              classLabel="form-label"
              value={values.intitusi}
              onChange={(e) =>
                setValues({ ...values, intitusi: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <Input
              label="Nama Institusi*"
              type="text"
              className="form-control"
              classLabel="form-label"
              value={values.coba}
              onChange={(e) => setValues({ ...values, coba: e.target.value })}
            />
          </div>
        </form>
      </div>
      <div className="col mt-3 d-flex justify-content-end">
        <button
          className="btn text-white"
          style={{ backgroundColor: "#2B3990" }}
        >
          Simpan
        </button>
      </div>
    </div>
  );
};

export default EditEducation;
