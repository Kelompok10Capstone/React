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
                style={{
                    background:`${Color.light}`, 
                    width:"100%", 
                    height:"115vh", 
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
                            <div className="col-md-4 col-sm-12 pt-4">
                                <div>
                                    <FontBold $26>Pembayaran</FontBold>
                                    <FontBold $26 style={{lineHeight:"2px"}}>
                                        Tagihan
                                    </FontBold>
                                    <FontReguler $16 style={{lineHeight:"2px", paddingTop:"5%"}}>Pengguna dapat</FontReguler>
                                    <FontReguler $16 style={{lineHeight:"18px"}}>memasukkan informasi</FontReguler>
                                    <FontReguler $16 style={{lineHeight:"2px"}}>tagihan dan melakukan</FontReguler>
                                    <FontReguler $16 style={{lineHeight:"18px"}}>pembayaran dengan cepat</FontReguler>
                                    <FontReguler $16 style={{lineHeight:"2px"}}>dan mudah melalui aplikasi.</FontReguler>
                                </div>

                                <div style={{paddingTop:"30%", paddingLeft:"50%"}}>
                                    <FontBold $26 style={{lineHeight:"30px"}}>Transfer</FontBold>
                                    <FontReguler $16 style={{lineHeight:"18px"}}>Fitur ini sangat berguna</FontReguler>
                                    <FontReguler $16 style={{lineHeight:"2px"}}>untuk melakukan transfer</FontReguler>
                                    <FontReguler $16 style={{lineHeight:"18px"}}>sesama aplikasi kepada</FontReguler>
                                    <FontReguler $16 style={{lineHeight:"2px"}}>orang lain.</FontReguler>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-12 justify-content-center d-flex">
                                <div>
                                    <img 
                                        src={phones} 
                                        alt="phone" 
                                        className='img-fluid'
                                        style={{maxWidth:"600px", height:"auto"}}
                                        />
                                        <div style={{marginTop:"-15%", wordWrap:"break-word"}}>
                                            <FontBold $26 >Top-Up Saldo</FontBold>
                                           
                                            <FontReguler $16 style={{lineHeight:"2px", paddingTop:"3%"}}>Fitur ini memungkinkan</FontReguler>
                                            <FontReguler $16 style={{lineHeight:"18px"}}>pengguna untuk</FontReguler>
                                            <FontReguler $16 style={{lineHeight:"2px"}}>menambahkan saldo atau</FontReguler>
                                            <FontReguler $16 style={{lineHeight:"18px"}}>nilai pada akun prabayar</FontReguler>
                                            
                                        </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-12 pt-4">
                                <div>
                                    <FontBold $26>Kontrol</FontBold>
                                    <FontBold $26 style={{lineHeight:"0px"}}>
                                        Keamanan
                                    </FontBold>
                                    <FontReguler $16 style={{lineHeight:"2px", paddingTop:"5%"}}>Fitur ini memungkinkan</FontReguler>
                                    <FontReguler $16 style={{lineHeight:"18px"}}>pengguna untuk mengatur</FontReguler>
                                    <FontReguler $16 style={{lineHeight:"2px"}}>keamanan akun mereka</FontReguler>
                                </div>

                                <div style={{paddingTop:"35%", paddingRight:"40%"}}>
                                    <FontBold $26 >Riwayat</FontBold>
                                    <FontBold $26 style={{lineHeight:"0px"}}>
                                        Transaksi
                                    </FontBold>
                                    <FontReguler $16 style={{lineHeight:"2px", paddingTop:"8%"}}>Pengguna dapat melihat</FontReguler>
                                    <FontReguler $16 style={{lineHeight:"18px"}}>detail transaksi, termasuk</FontReguler>
                                    <FontReguler $16 style={{lineHeight:"2px"}}>jenis transaksi, tanggal dan</FontReguler>
                                    <FontReguler $16 style={{lineHeight:"18px"}}>waktu, jumlah pembayaran,</FontReguler>
                                    <FontReguler $16 style={{lineHeight:"2px"}}>dan status transaksi.</FontReguler>
                                </div>

                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Feature