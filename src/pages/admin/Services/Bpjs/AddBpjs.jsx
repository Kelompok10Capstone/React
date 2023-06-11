import FontBold from "../../../../elements/FontBold/FontBold";
import Input from "../../../../elements/Input/Input";
import ModalTambah from "../../../../elements/Modal/ModalTambah";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { API_BASE } from "../../../../config/Api";

const AddBpjs = () => {
  const authToken = sessionStorage.getItem("Auth Token");
  const [provider_name, setProviderName] = useState("");
  const [product_type, setProductType] = useState("");

  const handleSimpan = () => {
    axios.post(
      `${API_BASE}/admin/insurance/`,
      {
        provider_name,
        product_type,
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    ModalTambah();
  };

  return (
    <div className="add-bpjs px-4 py-4">
      <FontBold $26 className="pb-3">
        Tambah Produk BPJS
      </FontBold>
      <div className="col">
        <form action="">
          <div className="mb-3">
            <Input
              label="Kode BPJS*"
              type="text"
              className="form-control mb-3"
              classLabel="form-label"
              onChange={(e) => setProviderName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <Input
              label="Jenis BPJS*"
              type="text"
              className="form-control mb-3"
              classLabel="form-label"
              onChange={(e) => setProductType(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="col mt-3 d-flex justify-content-end">
        <Link to="/admin/layanan/bpjs">
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

export default AddBpjs;
