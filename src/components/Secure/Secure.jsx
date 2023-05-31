import FontReguler from '../../elements/FontReguler/FontReguler'
import FontBold from '../../elements/FontBold/FontBold'
import Color from "../../elements/Color/Color"

import { FaThumbsUp } from "react-icons/fa"
import { FaLock } from "react-icons/fa"
import { HiCheck } from "react-icons/hi"

import './Secure.css'
const Secure = () => {

    return(
        <>
             <section className="bg-body-tertiary pb-5" id='secure'  style={{ backgroundColor: `${Color.primary300}`}}>
                <div className="container-fluid ">
                    <div className="justify-content-center d-flex pt-5 pb-5">
                        <div className="col-lg-8 col-md-10 col-sm-12 mt-5 pt-4 pb-4">
                            <div className="p-5" style={{minWidth:"120%", borderRadius:"24px", backgroundColor:`${Color.light}`, textAlign:"center" , marginLeft:"-10%"}}>
                                <div className=" text-center pt-4">
                                    <FontBold $40>Transaksi Dengan Aman & Nyaman</FontBold>
                                </div>
                                <div className="row text-center mt-5 pt-4">
                                    <div className="col-md-4 col-sm-6 mb-4">
                                        <div className="mx-auto mb-3"  style={{
                                                backgroundColor: `${Color.secondary}`,
                                                borderRadius: '50%',
                                                width: '95px',
                                                height: '95px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginLeft: "25%"
                                            }}>
                                            <FaThumbsUp size={60} style={{ color: `${Color.light}`, transform: 'scale(0.8)' }} />
                                        </div>
                                        <div>
                                            <FontReguler $24>Kemudahan Akses</FontReguler>
                                            <FontReguler $1618 className='pt-2'>Melalui SkuyPay, dapat</FontReguler>
                                            <FontReguler $168>dengan mudah melakukan</FontReguler>
                                            <FontReguler $1618>pembayaran kapan saja dan</FontReguler>
                                            <FontReguler $168>di mana saja</FontReguler>
                                        </div>
                                    </div>

                                    <div className="col-md-4 col-sm-6 mb-4">
                                        <div className="mx-auto mb-3" style={{
                                                backgroundColor: `${Color.secondary}`,
                                                borderRadius: '50%',
                                                width: '95px',
                                                height: '95px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginLeft: "25%"
                                            }}>
                                            <FaLock size={70} style={{ color: `${Color.light}`, transform: 'scale(0.8)' }} />
                                        </div>
                                        <div>
                                            <FontReguler $24>Keamanan dan Keandalan</FontReguler>
                                            <FontReguler $1618 className='pt-2'>Dengan sistem yang terpercaya dan</FontReguler>
                                            <FontReguler $168>proteksi data yang kuat, dapat</FontReguler>
                                            <FontReguler $1618>melakukan pembayaran tanpa</FontReguler>
                                            <FontReguler $168>kekhawatiran</FontReguler>
                                        </div>
                                    </div>

                                    <div className="col-md-4 col-sm-6 mb-4">
                                        <div className="mx-auto mb-3"  style={{
                                                backgroundColor: `${Color.secondary}`,
                                                borderRadius: '50%',
                                                width: '95px',
                                                height: '95px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginLeft: "25%"
                                            }}  >
                                            <HiCheck size={90} style={{ color: `${Color.light}`, transform: 'scale(0.8)' }} />
                                        </div>
                                        <div>
                                            <FontReguler $24>Beragam Transaksi</FontReguler>
                                            <FontReguler $1618 className='pt-2'>Melakukan pembayaran</FontReguler>
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