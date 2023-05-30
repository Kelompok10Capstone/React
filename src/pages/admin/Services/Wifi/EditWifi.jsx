import { Link } from "react-router-dom";
import FontBold from "../../../../elements/FontBold/FontBold";
import Input from "../../../../elements/Input/Input";
import { Button } from "react-bootstrap";

const EditWifi = () => {
  return (
    <div className="edit-wifi px-4 py-4">
      <FontBold $26>Edit Produk Wifi</FontBold>
      <div className="col">
        <form action="">
          <Input
            label="Kode WIFI*"
            type="text"
            className="form-control"
            disabled={true}
          />
          <Input label="Jenis WIFI*" type="text" className="form-control" />
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

export default EditWifi;
