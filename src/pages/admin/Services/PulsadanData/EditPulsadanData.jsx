import { Button } from "react-bootstrap"

import FontBold from "../../../../elements/FontBold/FontBold"
import Input from "../../../../elements/Input/Input"
import ModalEdit from "../../../../elements/Modal/ModalEdit"

import { Link } from "react-router-dom"

const EditPulsadanData = () => {

    const handleSimpan = () => {
        ModalEdit()
    }

    return(
        <>
        <div className="edit-pulsa-data py-4 px-4">
            <div className="row">
                <div className="nama-edit-pulsa-data">
                    <FontBold $26 className="pb-3">Edit Pulsa & Data</FontBold>
                </div>

                <form className="col-12 Edit-pulsadata">
                    <div className="mb-3">
                        <Input
                            className="form-control"
                            classLabel="form-label"
                            label="Kode Pulsa & Data*"
                            type="text"
                            disabled={true}
                            placeholder='TSEL001'
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
                        />
                    </div>

                    <div className="d-flex justify-content-end ">
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
        </div>
        </>
    )
}

export default EditPulsadanData