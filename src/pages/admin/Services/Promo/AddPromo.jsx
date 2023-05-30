import { Link } from "react-router-dom";
import FontBold from "../../../../elements/FontBold/FontBold";
import Input from "../../../../elements/Input/Input";
import { Button } from "react-bootstrap";

const AddPromo = () => {
  return (
    <div className="add-promo px-4 py-4">
      <FontBold $26>Tambah Produk Promo</FontBold>
      <div className="col">
        <form action="">
          <Input label="Kode Promo*" type="text" className="form-control mb-3" />
          <Input label="Jenis Promo*" type="text" className="form-control mb-3" />
          <Input label="Periode*" type="text" className="form-control mb-3" />
          <Input label="Deskripsi*" type="text" className="form-control mb-3" />
        </form>
      </div>
      <div className="col mt-3 d-flex justify-content-end">
        <Link to="">
          <Button style={{ backgroundColor: "#2B3990", borderRadius: "8px" }}>
            Simpan
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AddPromo;
