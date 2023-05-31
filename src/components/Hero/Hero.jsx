import FontReguler from '../../elements/FontReguler/FontReguler'
import FontBold from '../../elements/FontBold/FontBold'
import Color from "../../elements/Color/Color"
import Button from '../../elements/Button/Button'

import phonehero from "../../assets/img/phonehero.png"

import { BiDownload } from 'react-icons/bi'

import './Hero.css'

const Hero = () => {
    return(
        <>
            <section 
                className='bg-body-tertiary pt-5'
                style={{background:`${Color.primary}`}}
                id='hero'
                >
                    <div className='container-fluid px-md-4 pt-5 '>
                        <div className='row text-center '>
                            <div className='col-md-6 col-sm-12 my-5 pt-3' >
                               
                                    <FontReguler $16light className='py-5' style={{marginRight:"115px"}}>
                                            Bayar Semua Kebutuhan Anda dengan Mudah di SkuyPay!
                                    </FontReguler>

                                    <FontBold $60light >
                                            Bayar Lebih Mudah, 
                                    </FontBold>

                                    <FontBold $60light className='py-3 ms-4'>
                                            Hidup Lebih Nyaman
                                    </FontBold>

                                    <Button className='d-flex align-items-center justify-content-center  my-5' style={{marginLeft:"90px"}}>
                                        <BiDownload 
                                            size={25} 
                                            style={{marginRight:"5%"}}
                                            color={`${Color.primary}`}
                                        />
                                        <FontBold $16primary>
                                            Download Sekarang
                                        </FontBold>
                                    </Button>
                            </div>

                            <div className='col-md-6 col-sm-12 pb-5' >
                                    <img 
                                        className='img-fluid pb-4'
                                        src={phonehero} 
                                        alt="phone"
                                        style={{maxWidth:"100%", height:"auto"}} 
                                    />
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Hero