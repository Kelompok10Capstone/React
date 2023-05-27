import FontReguler from '../../elements/FontReguler/FontReguler'
import FontBold from '../../elements/FontBold/FontBold'
import Color from "../../elements/Color/Color"
import Button from '../../elements/Button/Button'

import footerphone from "../../assets/img/footerphone.png"
import googleplay from "../../assets/img/googleplay.png"
import appstore from "../../assets/img/appstore.png"
import appgalery from "../../assets/img/appgalery.png"
import skuypay from "../../assets/img/login/logo.png"
import copyright from "../../assets/img/copyright.png"
import facebook from "../../assets/img/facebook.png"
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
            <div className='container'>
                <div style={{position: "absolute", bottom: "0px"}}>
                    <img 
                        src={footerphone} 
                        alt="phone" 
                        className='img-fluid'
                        style={{
                            marginBottom : "360px",
                            marginLeft:"40px"
                            
                        }}
                        />
                </div>

                <div className='justify-content-center d-flex row text-center '>
                       <div className='pt-5 col-12 col-md-6 me-5'  style={{marginLeft:"-55px"}}>
                            <FontBold $60light>
                                Bayar Lebih Mudah,
                            </FontBold>
                        </div>
                        
                        <div className='pt-3 col-12 col-md-6 me-5' style={{marginLeft:"-30px"}}>
                            <FontBold $60light>
                                Hidup Lebih Nyaman
                            </FontBold>
                        </div>

                        <div className='pt-5 col-12 col-md-6 ms-4' style={{marginRight:"18.5%"}}>
                            <FontReguler $32 style={{color:`${Color.light}`}}>
                                Download SKUYPAY sekarang
                            </FontReguler>
                        </div>

                        <div className='pt-3 col-12 '>
                    
                            <img 
                                src={googleplay} 
                                alt="googleplay"
                                className='me-4' 
                                style={{marginLeft:"16.5%"}}/>

                            <img 
                                src={appstore} 
                                alt="appstore" 
                                className='me-4'
                                />

                            <img 
                                src={appgalery} 
                                alt="appgalery" />

                        </div>

                        <div className='pt-5 row ' > 
                            <div className='col-6 col-md-3' style={{ width:"15%"}}>
                                <img 
                                    style={{marginRight:"100px"}}
                                    src={logofooter} 
                                    alt="skuypay" />
                                
                            </div>
                            <div className='col-6 col-md-3 ' style={{width:"10%"}}>
                                <FontBold $150
                                    style={{ 
                                        color:`${Color.light}`,
                                        marginLeft:"-95%"
                                    }}>
                                        Skuypay
                                </FontBold>
                            </div>
                            
                        </div>

                        <div className='pt-4' style={{marginLeft:"2%"}}>
                            <ul class="nav">
                                <li class="nav-item ">
                                    <a href="#" class="nav-link px-2 text-muted ms-2">
                                       <FontBold $28 style=
                                            {{color:`${Color.light}`
                                            }}>
                                            Produk & Fitur
                                       </FontBold>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link px-2 text-muted ms-3">
                                        <FontBold $28 style=
                                            {{color:`${Color.light}`
                                            }}>
                                            Bisnis & Enterprise
                                       </FontBold>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link px-2 text-muted ms-3">
                                        <FontBold $28 style=
                                            {{color:`${Color.light}`
                                            }}>
                                                Karir
                                       </FontBold>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link px-2 text-muted ms-3">
                                        <FontBold $28 style=
                                            {{color:`${Color.light}`
                                            }}>
                                                Promo
                                       </FontBold>
                                    </a>
                                </li>


                                
                            </ul>
                        </div>
                    <div className='justify-content-between'>
                        <div className='pt-4 row'>
                                <div className='col'>
                                        <img 
                                            src={copyright} 
                                            alt="copyright" 
                                            style={{marginRight:"55%"}}
                                        />
                                </div>

                                <div className=''style={{maxWidth:"320px", marginLeft:"12%"}}>
                                <FontReguler $2025 style={{
                                    color:`${Color.light}`,
                                    marginLeft:"-100%"
                                }}>
                                    2023 SKUYPAY - PT. Koalisi Indonesia Bersatu. All Rights Reserved
                                </FontReguler>
                                </div>

                                <div className='col mb-4'>
                                    <img 
                                        src={facebook} 
                                        alt="facebook" 
                                        className='img-fluid'
                                        style={{marginLeft:"240%"}}
                                    />
                                </div>

                                <div className='col'>
                                    <img 
                                        src={instagram} 
                                        alt="instagram" 
                                        className='img-fluid'
                                        style={{marginLeft:"170%"}}
                                    />
                                </div>

                                <div className='col'>
                                    <img 
                                        src={twitter} 
                                        alt="twitter" 
                                        className='img-fluid'
                                        style={{marginLeft:"110%"}}
                                    />
                                </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </section>    

        
    </>
    )
}

export default Footer