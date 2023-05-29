import FontBold from "../../../../elements/FontBold/FontBold"
import Input from "../../../../elements/Input/Input"
import Button from "../../../../elements/Button/Button"

const AddPulsadanData = () => {
    return (
        <>
            <div className="edit-topup px-4 py-4">
                <FontBold $26>Tambah Produk</FontBold>
            </div>

            <form action="" className="px-4 py-3">
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
                        type="text"
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

export default AddPulsadanData