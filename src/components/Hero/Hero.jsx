import FontReguler from '../../elements/FontReguler/FontReguler'
import FontBold from '../../elements/FontBold/FontBold'
import Color from "../../elements/Color/Color"
import Button from '../../elements/Button/Button'

import phone from "../../assets/img/phone.png"
import { BiDownload } from 'react-icons/bi'

const Hero = () => {
    return(
        <>
            <section 
                className='bg-body-tertiary'
                style={{background:`${Color.primary}`}}
                id='hero'
                >
                    <div className='container-fluid px-md-4 text-center pt-2 '>
                        <div className='row '>
                            <div className='col-md-6 col-sm-12 my-5' >
                                <div className='p-2 pt-5 ' style={{marginRight:"17%"}}>
                                    <FontReguler $16light>
                                        Bayar Semua Kebutuhan Anda dengan Mudah di SkuyPay!
                                    </FontReguler>
                                    
                                </div>

                                <div className='p-2 pt-3 '>
                                    <FontBold $60light >
                                        Bayar Lebih Mudah, 
                                    </FontBold>

                                </div>

                                <div className='p-2 ' style={{marginLeft:"4%"}}>
                                    <FontBold $60light>
                                            Hidup Lebih Nyaman
                                        </FontBold>
                                </div>
                                

                                <div className='my-5 ' style={{marginLeft:"13%"}}>
                                    <div className='d-flex justify-content-start'>
                                    <Button >
                                        <BiDownload 
                                            size={25} 
                                            style={{marginRight:"5%"}}
                                            color={`${Color.primary}`}
                                        />
                                        Download Sekarang!
                                    </Button>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 col-sm-12 pb-3' >
                                    <img 
                                        className='img-fluid'
                                        src={phone} 
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