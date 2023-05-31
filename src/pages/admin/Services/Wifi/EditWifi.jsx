import { Link } from "react-router-dom";

import FontBold from "../../../../elements/FontBold/FontBold";
import Input from "../../../../elements/Input/Input";
import ModalEdit from "../../../../elements/Modal/ModalEdit";

import { Button } from "react-bootstrap";

const EditWifi = () => {

  const handleSimpan = () => {
    ModalEdit()
  }

  return (
    <div className="edit-wifi px-4 py-4">
      <FontBold $26 className="pb-3">Edit Produk Wifi</FontBold>
      <div className="col">
        <form action="">
          <div className="mb-3">
            <Input
              label="Kode WIFI*"
              type="text"
              className="form-control"
              classLabel='form-label'
              placeholder='WIFI01'
              disabled={true}
            />
          </div>

          <div className="mb-3">
            <Input 
              label="Jenis WIFI*" 
              type="text" 
              className="form-control"
              classLabel='form-label'
            />
          </div>
        </form>
      </div>
      <div className="col mt-3 d-flex justify-content-end">
        <Link to="/admin/layanan/wifi">
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

export default EditWifi;
