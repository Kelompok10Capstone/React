import FontBold from "../../../../elements/FontBold/FontBold";
import Input from "../../../../elements/Input/Input";
import ModalEdit from "../../../../elements/Modal/ModalEdit";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const EditEducation = () => {

    const handleSimpan = () => {
        ModalEdit()
    }

    return(
        <div className="add-pendidikan px-4 py-4">
            <FontBold $26 className="pb-3">Edit Produk Pendidikan</FontBold>
            <div className="col">
                <form action="">
                    <div className="mb-3">
                        <Input
                            label='Kode Institusi*'
                            type='text'
                            className='form-control'
                            classLabel='form-label'
                            disabled={true}
                            placeholder='PT002'
                        />
                    </div>

                    <div className="mb-3">
                        <Input
                            label='Kategori*'
                            type='text'
                            className='form-control'
                            classLabel='form-label'
                        />
                    </div>

                    <div className="mb-3">
                        <Input
                            label='Nama Institusi*'
                            type='text'
                            className='form-control'
                            classLabel='form-label'
                        />
                    </div>
                </form>
            </div>
            <div className="col mt-3 d-flex justify-content-end">
                <Link to='/admin/layanan/pendidikan'>
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

export default EditEducation;