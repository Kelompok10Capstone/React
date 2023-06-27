import FontReguler from '../../elements/FontReguler/FontReguler'
import FontBold from '../../elements/FontBold/FontBold'
import Color from "../../elements/Color/Color"
import Button from '../../elements/Button/Button'

import phonehero from "../../assets/img/phonehero.png"

import { BiDownload } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import './Hero.css'

const Hero = () => {
    return(
        <>
            <section 
                className='bg-body-tertiary pt-5 pb-5'
                style={{background:`${Color.primary}`}}
                id='hero'
                >
                <div className="container px-1 py-3  ">
                    <div className="row flex-lg-row-reverse align-items-center d-flex g-5 py-3  ">
                        <div className="col-12 col-sm-12 col-lg-7 pb-5 py-3">
                            <img
                                src={phonehero}
                                className="mx-auto img-fluid ms-3"
                                alt="phone"
                                style={{maxWidth:"100%", height:"auto"}}
                            />
                        </div>

                        <div className="col-lg-5 col-sm-12 pb-5 ">
                    
                            <FontReguler $16light className='display-5 lh-1 mb-4'>Bayar Semua Kebutuhan Anda dengan Mudah di SkuyPay!</FontReguler>

                            <FontBold $60light className='py-1' style={{width:"110%"}}>
                                    Bayar Lebih Mudah, 
                            </FontBold>

                            <FontBold $60light className='py-3' style={{width:"110%"}}>
                                    Hidup Lebih Nyaman
                            </FontBold>

                            <div className="d-grid gap-2 d-md-flex justify-content-md-start ">
                                <a href="https://drive.google.com/drive/folders/1nWAsL7Y8eTiAWZjI1WlL-ZlrjSvp-3Lz?usp=sharing" target='_blank' rel="noopener noreferrer" style={{textDecoration : "none"}}>
                                    <Button className='d-flex align-items-center justify-content-center my-5' >
                                            <BiDownload 
                                                size={25} 
                                                style={{marginRight:"5%"}}
                                                color={`${Color.primary}`}
                                            />
                                            <FontBold $16primary>
                                                Download Sekarang
                                            </FontBold>  
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero