import FontReguler from '../../elements/FontReguler/FontReguler'
import FontBold from '../../elements/FontBold/FontBold'
import Color from "../../elements/Color/Color"

import { FaThumbsUp } from "react-icons/fa"
import { FaLock } from "react-icons/fa"
import { HiCheck } from "react-icons/hi"

const Secure = () => {

    return(
        <>
             <section className="bg-body-tertiary" style={{ background: `${Color.primary300}`, minHeight: "100vh" }}>
                <div className="container">
                    <div className="row justify-content-center d-flex  pt-5">
                        <div className="col-lg-8 col-md-10 col-sm-12 mt-5">
                            <div className=" bg-light p-4 ps-3" style={{ width: "108%" , borderRadius:"24px" }}>
                                <div className="text-center">
                                    <FontBold $40>Transaksi Dengan Aman & Nyaman</FontBold>
                                </div>
                                <div className="row text-center mt-5">
                                    <div className="col-md-4 col-sm-6 mb-4">
                                        <div className="mx-auto mb-3"  style={{
                                                backgroundColor: `${Color.secondary}`,
                                                borderRadius: '50%',
                                                width: '100px',
                                                height: '100px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginLeft: "25%"
                                            }}>
                                            <FaThumbsUp size={60} style={{ color: `${Color.light}`, transform: 'scale(0.8)' }} />
                                        </div>
                                        <div>
                                            <FontReguler $24>Kemudahan Akses</FontReguler>
                                            <FontReguler $1618>Melalui SkuyPay, dapat</FontReguler>
                                            <FontReguler $168>dengan mudah melakukan</FontReguler>
                                            <FontReguler $1618>pembayaran kapan saja dan</FontReguler>
                                            <FontReguler $168>di mana saja</FontReguler>
                                        </div>
                                    </div>

                                    <div className="col-md-4 col-sm-6 mb-4">
                                        <div className="mx-auto mb-3" style={{
                                                backgroundColor: `${Color.secondary}`,
                                                borderRadius: '50%',
                                                width: '100px',
                                                height: '100px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginLeft: "25%"
                                            }}>
                                            <FaLock size={65} style={{ color: `${Color.light}`, transform: 'scale(0.8)' }} />
                                        </div>
                                        <div>
                                            <FontReguler $24>Keamanan dan Keandalan</FontReguler>
                                            <FontReguler $1618>Dengan sistem yang terpercaya dan</FontReguler>
                                            <FontReguler $168>proteksi data yang kuat, dapat</FontReguler>
                                            <FontReguler $1618>melakukan pembayaran tanpa</FontReguler>
                                            <FontReguler $168>kekhawatiran</FontReguler>
                                        </div>
                                    </div>

                                    <div className="col-md-4 col-sm-6 mb-4">
                                        <div className="mx-auto mb-3"  style={{
                                                backgroundColor: `${Color.secondary}`,
                                                borderRadius: '50%',
                                                width: '100px',
                                                height: '100px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginLeft: "25%"
                                            }}  >
                                            <HiCheck size={80} style={{ color: `${Color.light}`, transform: 'scale(0.8)' }} />
                                        </div>
                                        <div>
                                            <FontReguler $24>Beragam Transaksi</FontReguler>
                                            <FontReguler $1618>Melakukan pembayaran</FontReguler>
                                            <FontReguler $168>berbagai kebutuhan sehari-</FontReguler>
                                            <FontReguler $1618>hari, mulai dari utilitas</FontReguler>
                                            <FontReguler $168>hingga layanan</FontReguler>
                                            <FontReguler $1618>telekomunikasi.</FontReguler>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Secure