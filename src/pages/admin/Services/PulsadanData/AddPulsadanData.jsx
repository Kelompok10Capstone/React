import FontBold from "../../../../elements/FontBold/FontBold"
import Input from "../../../../elements/Input/Input"
import ModalTambah from "../../../../elements/Modal/ModalTambah"

import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

const AddPulsadanData = () => {

    const handleSimpan = () => {
        ModalTambah()
    }

    return (
        <>
        <div className="add-pulsa-data py-4 px-4">
            <FontBold $26 className="pb-3">Tambah Produk Pulsa & Data</FontBold>
            
            <form action="">
                <div className="mb-3">
                    <Input
                        className="form-control"
                        classLabel="form-label"
                        label="Kode Pusa & Data*"
                        type="text"
                    />
                </div>

                <div className="mb-3">
                    <Input
                        className="form-control"
                        classLabel="form-label"
                        label="Jenis Pulsa & Data*"
                        type="text"
                    />
                </div>

                <div className="mb-3">
                    <Input
                        className="form-control"
                        classLabel="form-label"
                        type="file"
                    />
                </div>

                <div className="mt-3 d-flex justify-content-end">
                    <Link to='/admin/layanan/pulsadandata'>
                        <Button
                            style={{ backgroundColor: "#2B3990", borderRadius: "8px" }}
                            onClick={handleSimpan}
                        >
                            Simpan
                        </Button>
                    </Link>
                </div>
            </form>
        </div>
        </>
    )
}

export default AddPulsadanData