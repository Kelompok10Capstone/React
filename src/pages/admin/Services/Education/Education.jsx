import { IconContext } from "react-icons";
import FontBold from "../../../../elements/FontBold/FontBold";
import { VscDiffAdded, VscEdit, VscTrash } from "react-icons/vsc";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import Modal from "../../../../elements/Modal/Modal";
import { Button, FormControl, InputGroup, Tabs, Tab } from "react-bootstrap";
import styles from "./Education.module.css";
import { useState } from "react";

const Pendidikan = () => {
  const [pendidikan, setPendidikan] = useState([]);

  const handleDelete = () => {
    Modal();
  };

  const perguruantinggiStatus = [];
  const smaStatus = [];
  const smpStatus = [];

  // Mengelompokan data berdasarkan jenis status
  dataPendidikan.forEach((dataPendidikan) => {
    if (dataPendidikan.status === "perguruantinggi") {
      perguruantinggiStatus.push(dataPendidikan);
    } else if (dataPendidikan.status === "sma") {
      smaStatus.push(dataPendidikan);
    } else if (dataPendidikan.status === "smp") {
      smpStatus.push(dataPendidikan);
    }
  });

  return (
    <div className="pendidikan py-4 px-4">
      <FontBold $32>Pendidikan</FontBold>
      <div className="row">
        <div className="col-9">
          <InputGroup className="py-3">
            <InputGroup.Text
              style={{ backgroundColor: "transparent", borderRight: "none" }}
            >
              <BsSearch />
            </InputGroup.Text>
            <FormControl
              placeholder="Cari Pendidikan ..."
              aria-label="Search"
              name="search"
              style={{ borderLeft: "none" }}
            />
          </InputGroup>
        </div>
        <div className="col-3">
          <div className="btn-add d-flex justify-content-end pt-3">
            <Link to="/admin/layanan/pendidikan/tambah">
              <Button
                style={{ backgroundColor: "#2B3990", borderRadius: "16px" }}
              >
                + Tambah Produk
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Tabs defaultActiveKey="perguruantinggi" id="nav-tabs">
        {/* tabel perguruan tinggi */}
        <Tab eventKey="perguruantinggi" title="Perguruan Tinggi">
          <div className="bg-white shadow-sm justify-content-around rounded mt-2">
            <div className="table-responsive">
              <table
                className="table table-hover mt-2 rounded"
                style={{ borderSpacing: "1em" }}
                id="table"
              >
                <thead
                  className="text-dark"
                  style={{ backgroundColor: "#B8BDDA" }}
                >
                  <tr className="" style={{ fontSize: "16px" }}>
                    <th scope="col">ID</th>
                    <th scope="col">Nama</th>
                    <th></th>
                  </tr>
                </thead>

                {dataPendidikan.map((pendidikan) => (
                  <tbody key={pendidikan.id} id="table-body">
                    <tr style={{ fontSize: "16px" }}>
                      <td>{pendidikan.id}</td>
                      <td>{pendidikan.nama}</td>
                      <td>
                        <Link to="/admin/layanan/pendidikan/edit">
                          <IconContext.Provider
                            value={{ color: "#1C1B1F", size: "1.5rem" }}
                          >
                            <VscEdit className={styles.editIcon} />
                          </IconContext.Provider>
                        </Link>
                        <Link to="#" onClick={handleDelete}>
                          <IconContext.Provider
                            value={{ color: "#D13217", size: "1.5rem" }}
                          >
                            <VscTrash className={styles.trashIcon} />
                          </IconContext.Provider>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </Tab>

        {/* tabel SMA */}
        <Tab eventKey="sma" title="SMA">
          <div className="bg-white shadow-sm justify-content-around rounded mt-2">
            <div className="table-responsive">
              <table
                className="table table-hover mt-2 rounded"
                style={{ borderSpacing: "1em" }}
                id="table"
              >
                <thead
                  className="text-dark"
                  style={{ backgroundColor: "#B8BDDA" }}
                >
                  <tr className="" style={{ fontSize: "16px" }}>
                    <th scope="col">ID</th>
                    <th scope="col">Nama</th>
                    <th></th>
                  </tr>
                </thead>

                {dataPendidikan.map((pendidikan) => (
                  <tbody key={pendidikan.id} id="table-body">
                    <tr style={{ fontSize: "16px" }}>
                      <td>{pendidikan.id}</td>
                      <td>{pendidikan.nama}</td>
                      <td>
                        <Link to="/admin/layanan/pendidikan/edit">
                          <IconContext.Provider
                            value={{ color: "#1C1B1F", size: "1.5rem" }}
                          >
                            <VscEdit className={styles.editIcon} />
                          </IconContext.Provider>
                        </Link>
                        <Link to="#" onClick={handleDelete}>
                          <IconContext.Provider
                            value={{ color: "#D13217", size: "1.5rem" }}
                          >
                            <VscTrash className={styles.trashIcon} />
                          </IconContext.Provider>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </Tab>

        {/* tabel SMP */}
        <Tab eventKey="smp" title="SMP">
          <div className="bg-white shadow-sm justify-content-around rounded mt-2">
            <div className="table-responsive">
              <table
                className="table table-hover mt-2 rounded"
                style={{ borderSpacing: "1em" }}
                id="table"
              >
                <thead
                  className="text-dark"
                  style={{ backgroundColor: "#B8BDDA" }}
                >
                  <tr className="" style={{ fontSize: "16px" }}>
                    <th scope="col">ID</th>
                    <th scope="col">Nama</th>
                    <th></th>
                  </tr>
                </thead>

                {dataPendidikan.map((pendidikan) => (
                  <tbody key={pendidikan.id} id="table-body">
                    <tr style={{ fontSize: "16px" }}>
                      <td>{pendidikan.id}</td>
                      <td>{pendidikan.nama}</td>
                      <td>
                        <Link to="/admin/layanan/pendidikan/edit">
                          <IconContext.Provider
                            value={{ color: "#1C1B1F", size: "1.5rem" }}
                          >
                            <VscEdit className={styles.editIcon} />
                          </IconContext.Provider>
                        </Link>
                        <Link to="#" onClick={handleDelete}>
                          <IconContext.Provider
                            value={{ color: "#D13217", size: "1.5rem" }}
                          >
                            <VscTrash className={styles.trashIcon} />
                          </IconContext.Provider>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Pendidikan;

const dataPendidikan = [
  {
    id: "PT1234",
    nama: "Universitas Malang",
  },
  {
    id: "PT1236",
    nama: "Universitas Jember",
  },
  {
    id: "SMA1238",
    nama: "SMA 5 Malang",
  },
  {
    id: "SMA1237",
    nama: "SMA 5 Jember",
  },
  {
    id: "SMP1230",
    nama: "SMP 5 Jakarta",
  },
  {
    id: "SMP1233",
    nama: "SMA 5 Bandung",
  },
];
