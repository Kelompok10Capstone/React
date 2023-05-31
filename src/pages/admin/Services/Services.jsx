import FontBold from "../../../elements/FontBold/FontBold";
import topup from "../../../../src/assets/img/topup.png";
import pulsadata from "../../../../src/assets/img/pulsadata.png";
import pln from "../../../../src/assets/img/pln.png";
import pdam from "../../../../src/assets/img/pdam.png";
import bpjs from "../../../../src/assets/img/bpjs.png";
import wifi from "../../../../src/assets/img/wifi.png";
import pendidikan from "../../../../src/assets/img/pendidikan.png";
import promo from "../../../../src/assets/img/promo.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="layanan py-2 mx-4">
      <FontBold $32 className="pt-3 pb-3">Layanan</FontBold>
      <div className="list-layanan">
        <div className="row d-flex justify-content-center">
          {layanan.map((layanan) => (
            <div className="col-3 px-4 py-2" style={{width:'240px'}} key={layanan.nama}>
              <div className="card border-0">
                <img src={layanan.image} className="card-img-top" alt="..." />
                <div
                  className="card-body"
                  style={{
                    backgroundColor: "#727BB5",
                    padding: "0",
                    borderRadius: "0 0 12px 12px",
                  }}
                >
                  <Link to={layanan.to} style={{textDecoration:'none'}}>
                    <FontBold
                        $20
                        className="card-text text-center"
                        style={{ color: "white" }}
                    >
                        {layanan.nama}
                    </FontBold>
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

export const layanan = [

  { nama: "Top Up", image: topup, to: "/admin/layanan/topup" },
  { nama: "Pulsa & Data", image: pulsadata, to: "/admin/layanan/pulsadandata" },
  { nama: "BPJS", image: bpjs, to: "/admin/layanan/bpjs" },
  { nama: "PLN", image: pln, to: "/admin/layanan/pln" },
  { nama: "WIFI", image: wifi, to: "/admin/layanan/wifi" },
  { nama: "PDAM", image: pdam, to: "/admin/layanan/pdam" },
  { nama: "Pendidikan", image: pendidikan, to: "/admin/layanan/pendidikan" },
  { nama: "Promo", image: promo, to: "/admin/layanan/promo" },
];
