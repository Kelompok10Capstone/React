import React from "react";
import { useState } from "react";
import FontBold from "../../../../elements/FontBold/FontBold";
import Input from "../../../../elements/Input/Input";
import Button from "../../../../elements/Button/Button";
import ModalTambah from "../../../../elements/Modal/ModalTambah";
import { Link } from "react-router-dom";

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

        <Link to="/admin/layanan/topup">
          <button
            className="button-simpan-topu float-end mt-4"
            type="button"
            style={{ backgroundColor: "#2B3990", borderRadius: "8px" }}
            onClick={handleSimpan}
          >
            Simpan
          </button>
        </Link>
      </form>
    </>
  );
};

export default AddTopup;
