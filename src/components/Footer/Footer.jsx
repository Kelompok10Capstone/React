import FontReguler from '../../elements/FontReguler/FontReguler'
import FontBold from '../../elements/FontBold/FontBold'
import Color from "../../elements/Color/Color"
import Button from '../../elements/Button/Button'

import footerphone from "../../assets/img/footerphone.png"
import googleplay from "../../assets/img/googleplay.png"
import appstore from "../../assets/img/appstore.png"
import appgalery from "../../assets/img/appgalery.png"
import logofooter from "../../assets/img/logofooter.png"
import copyright from "../../assets/img/copyright.png"
import facebook from "../../assets/img/facebook.png"
import facebook2 from "../../assets/img/facebook2.png"
import instagram from "../../assets/img/instagram.png"
import twitter from "../../assets/img/twitter.png"

import './Footer.css'

const Footer = () => {
    return(
    <>
        <section 
            className="bg-body-tertiary"
            id='footer'
            style={{
                background:`${Color.primary}`,
                position: "relative"
            }}    
        >
           <div className="container">
                <footer className="pt-5">
                    <div className='row'>
                        <div className='col-12 col-sm-6 col-md-4 col-lg-3 '>
                            <img 
                            src={footerphone} 
                            alt="phone" 
                            className='img-fluid mx-auto d-block ms-5 pb-4'
                            style={{position:"absolute", marginBottom:"22%", bottom:"0px"}}
                            />
                        </div>

                        <div className='col-12 col-sm-6 col-md-4 col-lg-9 '>
                            <FontBold $40light>
                                Bayar Lebih Mudah,
                            </FontBold>

                            <FontBold $40light className=''>
                                Hidup Lebih Nyaman
                            </FontBold>

                            <FontReguler $26 className='pt-5' style={{color:`${Color.light}`}}>
                                Download SKUYPAY sekarang
                            </FontReguler>
                            <img 
                                src={googleplay} 
                                alt="googleplay"
                                className='me-4 pt-2' 
                            />

                            <img 
                                src={appstore} 
                                alt="appstore" 
                                className='me-4'
                                />

                            <img 
                                src={appgalery} 
                                alt="appgalery" />
                        </div>

                        
                    </div>

                    <div className='row pt-5 '>
                        <div className='col-1 pt-2 '>
                                <img 
                                        src={logofooter} 
                                        alt="skuypay" 
                                        className='img-fluid '
                                        />
                        </div>

                        <div className='col-1'>
                            <FontBold $150
                                    style={{ 
                                        color:`${Color.light}`
                                    }}>
                                        Skuypay
                                </FontBold>
                        </div>
                    </div>

                     <div className='justify-content-between d-flex'>              
                        <div className='pt-4 '>
                                <ul class="nav">
                                    <li class="nav-item ">
                                        <a href="#" class="nav-link px-2 text-muted ms-2">
                                        <FontBold $20 style=
                                                {{color:`${Color.light}`
                                                }}>
                                                Produk & Fitur
                                        </FontBold>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link px-2 text-muted ms-3">
                                            <FontBold $20 style=
                                                {{color:`${Color.light}`
                                                }}>
                                                Bisnis & Enterprise
                                        </FontBold>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link px-2 text-muted ms-3">
                                            <FontBold $20 style=
                                                {{color:`${Color.light}`
                                                }}>
                                                    Karir
                                        </FontBold>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link px-2 text-muted ms-3">
                                            <FontBold $20 style=
                                                {{color:`${Color.light}`
                                                }}>
                                                    Promo
                                        </FontBold>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='pt-5 '>
                                    <FontReguler $16light>Ikuti Kami</FontReguler>
                            </div>
                        </div>   

                        <div className="d-flex py-3 row ">
                            <div className='col-8 d-flex align-items-center'>
                                                <img 
                                                src={copyright} 
                                                className='img'
                                                alt="copyright" 
                                            />     
                                <FontReguler $16 
                                className='ms-3'
                                style={{
                                            color:`${Color.light}`
                                        }}>
                                            2023 SKUYPAY - PT. Koalisi Indonesia Bersatu. All Rights Reserved
                                        </FontReguler>                
                            </div>  

                              
                            <div className='col-4 justify-content-end d-flex     '>              
                                <ul className="list-unstyled d-flex">
                                    <li className="ms-3">
                                    <img 
                                                src={facebook2} 
                                                alt="facebook" 
                                                className='img-fluid me-5'
                                                
                                            />
                                    </li>
                                    <li className="ms-3">
                                    <img 
                                                src={instagram} 
                                                alt="instagram" 
                                                className='img-fluid me-5'
                                                
                                        
                                            />
                                    </li>
                                    <li className="ms-3">
                                    <img 
                                                src={twitter} 
                                                alt="twitter" 
                                                className='img-fluid me-4'
                                                
                                            />
                                    </li>
                                </ul>
                            </div>  
                        </div>
                </footer>
                </div>

            
        </section>    

        
    </>
    )
}

export default Footer