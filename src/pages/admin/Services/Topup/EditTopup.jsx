import { Button } from "react-bootstrap"
import FontBold from "../../../../elements/FontBold/FontBold"
import Input from "../../../../elements/Input/Input"
import ModalEdit from "../../../../elements/Modal/ModalEdit"

import { Link } from "react-router-dom"

const EditTopup = () => {

    const handleSimpan = () => {
        ModalEdit()
    }

    return (
    <>
        <div className="edit-topup px-4 py-4">
            <FontBold $26 className="pb-3">Edit Top Up</FontBold>
            <div className="col">
                <form action="">
                    <div className="mb-3">
                        <Input
                            className="form-control"
                            classLabel="form-label"
                            label="Kode Bank*"
                            type="text"
                            disabled={true}
                            placeholder='A01Mandiri'
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
                            label='Minimal Top Up*'
                            type="text"
                        />
                    </div>

                    <div className="col mt-3 d-flex justify-content-end ">
                        <Link to='/admin/layanan/topup'>
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

export default EditTopup