import FontReguler from '../../elements/FontReguler/FontReguler'
import FontBold from '../../elements/FontBold/FontBold'
import Color from "../../elements/Color/Color"
import Button from '../../elements/Button/Button'

import footerphone from "../../assets/img/footerphone.png"
import googleplay from "../../assets/img/googleplay.png"
import appstore from "../../assets/img/appstore.png"
import appgalery from "../../assets/img/appgalery.png"
import skuypay from "../../assets/img/skuypay.png"
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
            style={{
                background:`${Color.primary}`,
                width:"100%",
                height:"105vh",
                position: "relative"
            }}    
        >
            <div className='container'>
                <div style={{position: "absolute", bottom: 0}}>
                    <img 
                        src={footerphone} 
                        alt="phone" 
                        style={{
                            marginBottom : "175%",
                            marginLeft:"20%"
                        }}
                        />
                </div>

                <div className='justify-content-center d-flex row text-center '>
                       <div className='pt-5 col-12' style={{marginRight:"10%"}} >
                            <FontBold $60light>
                                Bayar Lebih Mudah,
                            </FontBold>
                        </div>
                        
                        <div className='pt-3 col-12' style={{marginRight:"8%"}}>
                            <FontBold $60light>
                                Hidup Lebih Nyaman
                            </FontBold>
                        </div>

                        <div className='pt-5 col-12' style={{marginRight:"18.5%"}}>
                            <FontReguler $32 style={{color:`${Color.light}`}}>
                                Download SKUYPAY sekarang
                            </FontReguler>
                        </div>

                        <div className='pt-3 col-12 '>
                    
                            <img 
                                src={googleplay} 
                                alt="googleplay" 
                                style={{marginLeft:"15%",marginRight:"2%"}}/>

                            <img 
                                src={appstore} 
                                alt="appstore" 
                                style={{marginRight:"2%"}}
                                />

                            <img src={appgalery} alt="appgalery" />
                        </div>

                        <div className='pt-5 row ' > 
                            <div className='col'>
                                <img 
                                    style={{marginRight:"45%"}}
                                    src={skuypay} 
                                    alt="skuypay" />
                                
                            </div>
                            <div className='col' style={{marginRight:"78.3%"}}>
                                <FontBold 
                                    style={{
                                        lineHeight:"150px", 
                                        color:`${Color.light}`
                                    }}>
                                        Skuypay
                                </FontBold>
                            </div>
                            
                        </div>

                        <div className='' style={{marginLeft:"2%"}}>
                            <ul class="nav">
                                <li class="nav-item ">
                                    <a href="#" class="nav-link px-2 text-muted">
                                       <FontBold $28 style=
                                            {{color:`${Color.light}`,
                                            marginRight:"-15%"
                                            }}>
                                            Produk & Fitur
                                       </FontBold>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link px-2 text-muted">
                                        <FontBold $28 style=
                                            {{color:`${Color.light}`,
                                            marginRight:"-35%"
                                            }}>
                                            Bisnis & Enterprise
                                       </FontBold>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link px-2 text-muted">
                                        <FontBold $28 style=
                                            {{color:`${Color.light}`,
                                            marginLeft:"95%"
                                            }}>
                                                Karir
                                       </FontBold>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link px-2 text-muted">
                                        <FontBold $28 style=
                                            {{color:`${Color.light}`,
                                            marginLeft:"105%"
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
                                            style={{marginRight:"65%"}}
                                        />
                                </div>

                                <div className=''style={{maxWidth:"300px", marginLeft:"10%"}}>
                                <FontReguler $20 style={{
                                    color:`${Color.light}`,
                                    marginLeft:"-106%",
                                    lineHeight:"25px",
                                    maxWidth:"250%"
                                }}>
                                    2023 SKUYPAY - PT. Koalisi Indonesia Bersatu. All Rights Reserved
                                </FontReguler>
                                </div>

                                <div className='col'>
                                    <img 
                                        src={facebook} 
                                        alt="facebook" 
                                        style={{marginLeft:"240%"}}
                                    />
                                </div>

                                <div className='col'>
                                    <img 
                                        src={instagram} 
                                        alt="instagram" 
                                        style={{marginLeft:"170%"}}
                                    />
                                </div>

                                <div className='col'>
                                    <FontReguler>
                                        
                                    </FontReguler>
                                    <img 
                                        src={twitter} 
                                        alt="twitter" 
                                        style={{marginLeft:"115%"}}
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