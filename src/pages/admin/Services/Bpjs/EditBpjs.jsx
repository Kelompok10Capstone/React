import FontBold from "../../../../elements/FontBold/FontBold";
import Input from "../../../../elements/Input/Input";
import ModalEdit from "../../../../elements/Modal/ModalEdit"

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const EditBpjs = () => {

    const handleSimpan = () => {
        ModalEdit()
    }

    return(
        <div className="edit-bpjs px-4 py-4">
            <FontBold $26 className="pb-3">Edit Produk BPJS</FontBold>
            <div className="col">
                <form action="">
                    <div className="mb-3">
                        <Input
                            label='Kode Produk*'
                            type='text'
                            className='form-control'
                            classLabel='form-label'
                            disabled={true}
                            placeholder='BPJS04'
                        />
                    </div>

                    <div className="mb-3">
                        <Input
                            label='Jenis Produk*'
                            type='text'
                            className='form-control'
                            classLabel='form-label'
                        />
                    </div>
                </form>
            </div>
            <div className="col mt-3 d-flex justify-content-end">
                <Link to='/admin/layanan/bpjs'>
                    <Button
                        style={{ backgroundColor: "#2B3990", borderRadius: "8px" }}
                        onClick={handleSimpan}
                    >
                        Simpan
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default EditBpjs;