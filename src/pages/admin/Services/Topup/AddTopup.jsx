import React from 'react';
import { useState } from 'react';
import FontBold from "../../../../elements/FontBold/FontBold"
import Input from "../../../../elements/Input/Input"
import Button from "../../../../elements/Button/Button"

const AddTopup = () => {
    
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
                <FontBold $26>Add Top Up</FontBold>
            </div>

            <form action="" className="px-4">
            <div className="mb-3">
                <Input
                    className="form-control"
                    classLabel="form-label"
                    label="Kode Produk*"
                    type="text"
                />
            </div>

            <div className="mb-3">
                <Input
                    className="form-control"
                    classLabel="form-label"
                    label="Jenis Produk*"
                    type="text"
                />
            </div>

            <div className="mb-3">
                <Input
                    className="form-control"
                    classLabel="form-label"
                    type="file"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                />
            </div>

            <div className="d-flex justify-content-end ">
                <Button $addproduk className="text-white">
                        Simpan
                </Button>
            </div>

            
        </form>
        </>
    )
}

export default AddTopup