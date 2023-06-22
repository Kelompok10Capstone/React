import FontReguler from '../../elements/FontReguler/FontReguler'
import FontBold from '../../elements/FontBold/FontBold'
import Color from "../../elements/Color/Color"
import Button from '../../elements/Button/Button'

import bgfeature from '../../assets/img/bgfeature.png'
import phones from '../../assets/img/3phone.png'
import fiturphone from '../../assets/img/fiturphone.png'

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
                    <div className="container text-center pt-5" >
                        <div className="pt-5 justify-content-center d-flex" style={{marginTop:"2%"}}>
                            <FontBold $40>Keunggulan</FontBold>
                            <FontBold $40primary className='ms-2'>Fitur</FontBold>
                        </div>

                        <div className="row pt-5"> 
                            <div className="col-md-4 col-sm-6 col-12 pt-4">
                                <div className='mb-5 pb-5 me-5'>
                                    <FontBold $26>Pembayaran</FontBold>
                                    <FontBold $262 className='pt-1' >Tagihan</FontBold>
                                    <FontReguler $168 className='pt-4'>Pengguna dapat</FontReguler>
                                    <FontReguler $1618 >memasukkan informasi</FontReguler>
                                    <FontReguler $168 >tagihan dan melakukan</FontReguler>
                                    <FontReguler $1618 >pembayaran dengan cepat</FontReguler>
                                    <FontReguler $168 >dan mudah melalui aplikasi.</FontReguler>
                                </div>

                                <div className='pt-5 ms-5' style={{marginRight:"-80px"}}>
                                    <FontBold $2630>Transfer</FontBold>
                                    <FontReguler $1618 className='pt-1'>Fitur ini sangat berguna</FontReguler>
                                    <FontReguler $168>untuk melakukan transfer</FontReguler>
                                    <FontReguler $1618>sesama aplikasi kepada</FontReguler>
                                    <FontReguler $168>orang lain.</FontReguler>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6 col-12 justify-content-center d-flex" >
                                <div> 
                                        <img 
                                        src={fiturphone} 
                                        alt="phone" 
                                        className='pb-4 '
                                        />
                                        <div className='mb-5 pb-5' style={{ marginTop: "-90px" }}>
                                            <FontBold $26 >Top-Up Saldo</FontBold>
                                            <FontReguler $168 className='pt-1'>Fitur ini memungkinkan</FontReguler>
                                            <FontReguler $1618 >pengguna untuk</FontReguler>
                                            <FontReguler $168 >menambahkan saldo atau</FontReguler>
                                            <FontReguler $1618 >nilai pada akun prabayar</FontReguler>
                                            
                                        </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6 col-12 pt-4">
                                <div className="text-center mb-5 ms-5 pb-5" >
                                    <FontBold $26>Kontrol</FontBold>
                                    <FontBold $260 className='pt-1'>Keamanan</FontBold>
                                    <FontReguler $1618 className='pt-4'>Fitur ini memungkinkan</FontReguler>
                                    <FontReguler $168 >pengguna untuk mengatur</FontReguler>
                                    <FontReguler $1618 >keamanan akun mereka</FontReguler>
                                </div>

                                <div className="text-center pt-5 me-5">
                                    <FontBold $26 >Riwayat</FontBold>
                                    <FontBold $260 className='pt-1'>Transaksi</FontBold>
                                    <FontReguler $168 className='pt-4'>Pengguna dapat melihat</FontReguler>
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