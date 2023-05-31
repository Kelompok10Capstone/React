import FontBold from "../../../../elements/FontBold/FontBold";
import Input from "../../../../elements/Input/Input";
import ModalTambah from "../../../../elements/Modal/ModalTambah";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const AddPromo = () => {

  const handleSimpan = () => {
    ModalTambah()
  }

  return (
    <div className="add-promo px-4 py-4">
      <FontBold $26 className="pb-3">Tambah Produk Promo</FontBold>
      <div className="col">
        <form action="">
          <Input 
            label="Kode Promo*" 
            type="text" 
            className="form-control mb-3"
            classLabel='form-label' 
          />
          <Input 
            label="Jenis Promo*" 
            type="text" 
            className="form-control mb-3"
            classLabel='form-label' 
          />
          <Input 
            label="Periode*" 
            type="text" 
            className="form-control mb-3"
            classLabel='form-label' 
          />
          <Input 
            label="Deskripsi*" 
            type="text" 
            className="form-control mb-3"
            classLabel='form-label' 
          />
        </form>
      </div>
      <div className="col mt-3 d-flex justify-content-end">
        <Link to="/admin/layanan/promo">
          <Button 
            style={{ backgroundColor: "#2B3990", borderRadius: "8px" }}
            onClick={handleSimpan}
          >
            Simpan
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AddPromo;
