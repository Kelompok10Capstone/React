import React from "react";

import FontBold from "../../../../elements/FontBold/FontBold";
import Input from "../../../../elements/Input/Input";
import ModalTambah from "../../../../elements/Modal/ModalTambah";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const AddTopup = () => {
  const handleSimpan = () => {
    ModalTambah();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    // Lakukan sesuatu dengan file yang dijatuhkan
    console.log(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="add-topup px-4 py-4">
        <FontBold $26>Tambah Metode Top Up</FontBold>
      </div>

      <form action="" className="px-4">
        <div className="mb-3">
          <Input
            className="form-control"
            classLabel="form-label"
            label="Kode Bank*"
            type="text"
          />
        </div>

        <div className="mb-3">
          <Input
            className="form-control"
            classLabel="form-label"
            label="Jenis Bank*"
            type="text"
          />
        </div>

        <div className="mb-3">
          <Input
            className="form-control"
            classLabel="form-label"
            label="Minimal Topup*"
            type="text"
          />
        </div>

        <div className="col mt-3 d-flex justify-content-end">
          <Link to="/admin/layanan/topup">
            <Button
              style={{ backgroundColor: "#2B3990", borderRadius: "8px" }}
              onClick={handleSimpan}
              >
              Simpan
            </Button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default AddTopup;
