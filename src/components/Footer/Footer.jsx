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
            <div className='container-fluid'>
                <div style={{position: "absolute", bottom: "0px", marginLeft:"100px"}}>
                    <img 
                        src={footerphone} 
                        alt="phone" 
                        className='img-fluid ms-5'
                        style={{
                            marginBottom : "360px"                            
                        }}
                        />
                </div>

                <div className='justify-content-center d-flex row text-center '>
                       <div className='pt-5 col-12 col-md-6 me-5'style={{marginLeft:"-230px"}}  >
                            <FontBold $40light>
                                Bayar Lebih Mudah,
                            </FontBold>

                            <FontBold $40light className='ms-3'>
                                Hidup Lebih Nyaman
                            </FontBold>
                              
                        </div>

                        <div className='pt-5 col-12 col-md-6 ms-5' style={{marginRight:"22%"}}>
                            <FontReguler $26 style={{color:`${Color.light}`}}>
                                Download SKUYPAY sekarang
                            </FontReguler>
                        </div>

                        <div className='pt-3 col-12 '>
                    
                            <img 
                                src={googleplay} 
                                alt="googleplay"
                                className='me-4' 
                                style={{marginLeft:"15%"}}/>

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

                    <div className='pt-5 row ms-5' > 
                            <div className='col-6 col-md-3  '>
                                <img 
                                    src={logofooter} 
                                    alt="skuypay" 
                                    className='img-fluid'
                                    />
                                
                            </div>
                            <div className='col-6 col-md-3 '>
                                <FontBold $150
                                    style={{ 
                                        color:`${Color.light}`,
                                        marginLeft:"-75%"
                                    }}>
                                        Skuypay
                                </FontBold>
                            </div>
                            
                        </div>

                        <div className='pt-4 ms-5'>
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
                    
                        <div className='row pt-3 ms-5'>
                                    <div className='col pt-3'>
                                            <img 
                                                src={copyright} 
                                                className='img-fluid'
                                                alt="copyright" 
                                                style={{marginRight:"55%"}}
                                            />
                                    </div>

                                    <div className='col pt-2'>
                                        <FontReguler $16 style={{
                                            color:`${Color.light}`,
                                            marginLeft:"-95%"
                                        }}>
                                            2023 SKUYPAY - PT. Koalisi Indonesia Bersatu. All Rights Reserved
                                        </FontReguler>
                                    </div>
                               
                                    <div className='col mb-4 d-flex justify-content-end' >
                                        
                                        <img 
                                            src={facebook2} 
                                            alt="facebook" 
                                            className='img-fluid me-5'
                                            style={{maxWidth:"24px", maxHeight:"45px"}}
                                        />
                                                                       
                                        <img 
                                            src={instagram} 
                                            alt="instagram" 
                                            className='img-fluid me-5'
                                            style={{maxWidth:"50px", maxHeight:"50px"}}
                                      
                                        />
                                        <img 
                                            src={twitter} 
                                            alt="twitter" 
                                            className='img-fluid me-4'
                                            style={{maxWidth:"46px", maxHeight:"38px"}}
                                        />
                                   </div>
                        </div>

                    
                
            </div>
            
        </section>    

        
    </>
    )
}

export default Footer