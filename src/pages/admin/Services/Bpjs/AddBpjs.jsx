import FontBold from "../../../../elements/FontBold/FontBold";
import Input from "../../../../elements/Input/Input";
import ModalTambah from '../../../../elements/Modal/ModalTambah'

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const AddBpjs = () => {

    const handleSimpan = () => {
        ModalTambah()
    }

    return(
        <div className="add-bpjs px-4 py-4">
            <FontBold $26 className="pb-3">Tambah Produk BPJS</FontBold>
            <div className="col">
                <form action="">
                    <div className="mb-3">
                        <Input
                            label='Kode BPJS*'
                            type='text'
                            className='form-control mb-3'
                            classLabel='form-label'
                        />
                    </div>

                    <div className="mb-3">
                        <Input
                            label='Jenis BPJS*'
                            type='text'
                            className='form-control mb-3'
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

export default AddBpjs;