import FontReguler from '../../elements/FontReguler/FontReguler'
import FontBold from '../../elements/FontBold/FontBold'
import Color from "../../elements/Color/Color"
import Button from '../../elements/Button/Button'

import bgfeature from '../../assets/img/bgfeature.png'
import phones from '../../assets/img/3phone.png'

const Feature = () => {
    return (
        <>
            <section 
                className="bg-body-tertiary"
                id='fitur'
                style={{
                    background:`${Color.light}`,  
                    backgroundImage:`url(${bgfeature})`,
                    backgroundPosition: "left top",
                    backgroundRepeat: "no-repeat"
                }}
                >
                    <div className="container text-center pt-5">
                        <div className="pt-5 justify-content-center d-flex">
                            <FontBold $60>Keunggulan</FontBold>
                            <FontBold $60 
                                style={{
                                    marginLeft:"1%", 
                                    color:`${Color.success300}`}}
                                    >
                                        Fitur
                            </FontBold>
                        </div>

                        <div className="row pt-5"> 
                            <div className="col-md-4 col-sm-6 col-12 pt-4">
                                <div className='ms-5 mb-5'>
                                    <FontBold $26>Pembayaran</FontBold>
                                    <FontBold $262 >Tagihan</FontBold>
                                    <FontReguler $168 style={{ paddingTop:"5%"}}>Pengguna dapat</FontReguler>
                                    <FontReguler $1618 >memasukkan informasi</FontReguler>
                                    <FontReguler $168 >tagihan dan melakukan</FontReguler>
                                    <FontReguler $1618 >pembayaran dengan cepat</FontReguler>
                                    <FontReguler $168 >dan mudah melalui aplikasi.</FontReguler>
                                </div>

                                <div className='text-center pt-5 ms-5'>
                                    <FontBold $2630>Transfer</FontBold>
                                    <FontReguler $1618>Fitur ini sangat berguna</FontReguler>
                                    <FontReguler $168>untuk melakukan transfer</FontReguler>
                                    <FontReguler $1618>sesama aplikasi kepada</FontReguler>
                                    <FontReguler $168>orang lain.</FontReguler>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6 col-12 justify-content-center d-flex text-center" >
                                <div>
                                    <img 
                                        src={phones} 
                                        alt="phone" 
                                        className='img-fluid  '
                                        style={{maxWidth:"600px", height:"auto"}}
                                        />
                                        <div className='mb-5 pb-2' style={{marginTop:"-60px"}}>
                                            <FontBold $26 >Top-Up Saldo</FontBold>
                                            <FontReguler $168 style={{paddingTop:"1%"}}>Fitur ini memungkinkan</FontReguler>
                                            <FontReguler $1618 >pengguna untuk</FontReguler>
                                            <FontReguler $168 >menambahkan saldo atau</FontReguler>
                                            <FontReguler $1618 >nilai pada akun prabayar</FontReguler>
                                            
                                        </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6 col-12 pt-4">
                                <div className="text-center mb-5">
                                    <FontBold $26>Kontrol</FontBold>
                                    <FontBold $260 >
                                        Keamanan
                                    </FontBold>
                                    <FontReguler $1618 style={{ paddingTop:"7%"}}>Fitur ini memungkinkan</FontReguler>
                                    <FontReguler $168 >pengguna untuk mengatur</FontReguler>
                                    <FontReguler $1618 >keamanan akun mereka</FontReguler>
                                </div>

                                <div className="text-center mb-5 me-5">
                                    <FontBold $26 >Riwayat</FontBold>
                                    <FontBold $260>Transaksi</FontBold>
                                    <FontReguler $168 style={{paddingTop:"8%"}}>Pengguna dapat melihat</FontReguler>
                                    <FontReguler $1618>detail transaksi, termasuk</FontReguler>
                                    <FontReguler $168 >jenis transaksi, tanggal dan</FontReguler>
                                    <FontReguler $1618 >waktu, jumlah pembayaran,</FontReguler>
                                    <FontReguler $168 >dan status transaksi.</FontReguler>
                                </div>

                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Feature