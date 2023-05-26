import FontReguler from '../../elements/FontReguler/FontReguler'
import FontBold from '../../elements/FontBold/FontBold'
import Color from "../../elements/Color/Color"

import { FaThumbsUp } from "react-icons/fa"
import { FaLock } from "react-icons/fa"
import { HiCheck } from "react-icons/hi"

const Secure = () => {

    return(
        <>
            <section 
                className='bg-body-tertiary'
                style={{
                    background:`${Color.primary300}`,
                    width:"100%",
                    height:"100vh"
                }}
                >
                    <div className='justify-content-center d-flex align-items-center h-100'>
                            <div 
                                className='white-box'
                                style=
                                    {{
                                        background:`${Color.light}`,
                                        maxWidth:"1130px",
                                        width:"100%",
                                        height:"450px",
                                        borderRadius:"24px"
                                    }}
                                >
                                <div className='justify-content-center d-flex pt-4'>
                                        <FontBold $40>
                                            Transaksi Dengan Aman & Nyaman
                                        </FontBold>
                                </div>

                                <div className='row text-center justify-content-center d-flex' style={{marginTop:"7%", marginLeft:"0", marginRight:"0"}}>
                                    <div className='col-12 col-md-4'>
                                        <div
                                            className='background-circle d-flex justify-content-center align-items-center'
                                            style={{
                                                backgroundColor: `${Color.secondary}`,
                                                borderRadius: '50%',
                                                width: '100px',
                                                height: '100px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginLeft: "30%"
                                            }}
                                        >
                                            <FaThumbsUp
                                                size={60}
                                                style={{
                                                    color: `${Color.light}`,
                                                    transform: 'scale(0.8)' // Menyesuaikan skala ikon thumbs
                                                }}
                                            />
                                        </div>
                                        <div style={{marginLeft:"-20px"}}>
                                            <FontReguler $24 
                                                style={{ marginTop:"5%"}}>
                                                    Kemudahan Akses
                                            </FontReguler>

                                            <FontReguler $16 
                                                style={{lineHeight:"18px"}}>
                                                    Melalui SkuyPay, dapat
                                            </FontReguler>

                                            <FontReguler $16 
                                                style={{lineHeight:"2px"}}>
                                                    dengan mudah melakukan
                                            </FontReguler>

                                            <FontReguler $16 
                                                style={{lineHeight:"18px"}}>
                                                    pembayaran kapan saja dan
                                            </FontReguler>

                                            <FontReguler $16 
                                                style={{lineHeight:"2px"}}>
                                                    di mana saja
                                            </FontReguler>
                                        </div>
                                    </div>

                                    <div className='col-12 col-md-4'>
                                        <div
                                            className='background-circle '
                                            style={{
                                                backgroundColor: `${Color.secondary}`,
                                                borderRadius: '50%',
                                                width: '100px',
                                                height: '100px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginLeft: "25%"
                                            }}
                                        >
                                            <FaLock
                                                size={65}
                                                style={{
                                                    color: `${Color.light}`,
                                                    transform: 'scale(0.8)' // Menyesuaikan skala ikon thumbs
                                                }}
                                            />
                                        </div>
                                        <div style={{marginLeft:"-40px"}}>
                                            <FontReguler $24 
                                                style={{ marginTop:"5%", marginLeft:"-25px"}}>
                                                Keamanan dan Keandalan
                                            </FontReguler>

                                            <FontReguler $16 
                                                style={{lineHeight:"18px", marginLeft:"-10px"}}>
                                                    Dengan sistem yang terpercaya dan
                                            </FontReguler>

                                            <FontReguler $16 
                                                style={{lineHeight:"2px", marginLeft:"-10px"}}>
                                                    proteksi data yang kuat, dapat
                                            </FontReguler>

                                            <FontReguler $16 
                                                style={{lineHeight:"18px", marginLeft:"-10px"}}>
                                                    melakukan pembayaran tanpa
                                            </FontReguler>

                                            <FontReguler $16 
                                                style={{lineHeight:"2px", marginLeft:"-10px"}}>
                                                kekhawatiran
                                            </FontReguler>
                                        </div>
                                    </div>

                                    <div className='col-12 col-md-4'>
                                    <div
                                            className='background-circle'
                                            style={{
                                                backgroundColor: `${Color.secondary}`,
                                                borderRadius: '50%',
                                                width: '100px',
                                                height: '100px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginLeft: "30%"
                                            }}
                                        >
                                            <HiCheck
                                                size={80}
                                                style={{
                                                    color: `${Color.light}`,
                                                    transform: 'scale(0.8)' // Menyesuaikan skala ikon thumbs
                                                }}
                                            />
                                        </div>
                                        <div style={{marginLeft:"-20px"}}>
                                            <FontReguler $24 
                                                style={{ marginTop:"5%", marginLeft:"-25px"}}>
                                                Beragam Transaksi
                                            </FontReguler>

                                            <FontReguler $16
                                                 style={{lineHeight:"18px", marginLeft:"-10px"}}>
                                                    Melakukan pembayaran
                                            </FontReguler>

                                            <FontReguler $16 
                                                style={{lineHeight:"2px", marginLeft:"-20px"}}>
                                                    berbagai kebutuhan sehari-
                                            </FontReguler>

                                            <FontReguler $16 
                                                style={{lineHeight:"18px", marginLeft:"-5px"}}>
                                                    hari, mulai dari utilitas
                                            </FontReguler>

                                            <FontReguler $16 
                                                style={{lineHeight:"2px", marginRight:"10px"}}>
                                                    hingga layanan
                                            </FontReguler>

                                            <FontReguler $16 
                                                style={{lineHeight:"18px", marginRight:"10px"}}>
                                                    telekomunikasi.
                                            </FontReguler>
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