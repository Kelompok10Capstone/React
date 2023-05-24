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
                style={{background:`${Color.primary}`, maxWidth:"100%", height:"88vh"}}>
                    <div className='container-fluid px-md-4 text-center pt-2 '>
                        <div className='row '>
                            <div className='col-md-6 col-sm-12 pt-5 '  style={{marginTop:"3%"}}>
                                <div className='p-2 pt-5' style={{marginRight:"20%"}}>
                                    <FontReguler $16light style={{ fontSize: "1em", marginBottom: "1rem" }}>
                                        Bayar Semua Kebutuhan Anda dengan Mudah di SkuyPay!
                                    </FontReguler>
                                </div>

                                <div className='p-2 pt-3'>
                                    <FontBold $60light >
                                        Bayar Lebih Mudah, 
                                    </FontBold>

                                </div>

                                <div className='p-2' style={{marginLeft:"3.5%"}}>
                                    <FontBold $60light>
                                            Hidup Lebih Nyaman
                                        </FontBold>
                                </div>
                                

                                <div className='p-2 pt-5' style={{marginRight:"43%"}}>
                                    <Button >
                                        <BiDownload 
                                            size={25} 
                                            style={{marginRight:"4%"}}
                                            color={`${Color.primary}`}
                                        />
                                        Download Sekarang!
                                    </Button>
                                </div>
                            </div>

                            <div className='col-md-6 col-sm-12'>
                                    <img 
                                        className='img-fluid'
                                        src={phone} 
                                        alt="phone"
                                        style={{maxWidth:"103.3%", height:"auto"}} 
                                    />
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Hero