import FontReguler from '../../elements/FontReguler/FontReguler'
import FontBold from '../../elements/FontBold/FontBold'
import Color from "../../elements/Color/Color"
import Button from '../../elements/Button/Button'

import  bgtopleft  from "../../assets/img/bgtopleftmerch.png"
import  bgbotleft  from "../../assets/img/bgbotleftmerch.png"
import bgtopright  from "../../assets/img/bgtoprightmerch.png"
import  bgbotright  from "../../assets/img/bgbotrightmerch.png"
import bri from "../../assets/img/BRI.png"
import bca from "../../assets/img/bca.png"
import bni from "../../assets/img/bni.png"
import mandiri from "../../assets/img/mandiri.png"
import alfamart from "../../assets/img/alfamart.png"
import indomaret from "../../assets/img/indomaret.png"

const Merchant = () => {

    return(
    <>
        <section 
            className="bg-body-tertiary "
            id='merchant'
            style={{
                background:`${Color.light}`, 
                width:"100%", 
                minHeight:"120vh", 
                backgroundImage:`
                    url(${bgtopleft}), url(${bgbotleft}), url(${bgtopright}), url(${bgbotright})`,
                backgroundPosition: "top left, bottom left, top right, bottom right",
                backgroundRepeat : "no-repeat"
            }}
            >
            <div className='container text-center pt-5'>
                <div 
                    className='pt-5'>
                    <FontBold $40 className='pt-5'>
                        Merchant Kami
                    </FontBold>
                </div>
                
                <div className='pt-3'>
                    <FontReguler $32>
                        Pakai Skuypay di merchant - merchant favoritmu
                    </FontReguler>
                </div>

                <div className='row pt-5  ' style={{marginTop:"2%"}}>
                    <div className='col-6 col-sm-3 '>
                        <img src={bri} alt="bri" className="img-fluid mx-auto"/>
                    </div>

                    <div className='col-6 col-sm-3'>
                        <img src={bni} alt="bni" className="img-fluid mx-auto"/>
                    </div>

                    <div className='col-6 col-sm-3'>
                        <img src={mandiri} alt="mandiri" className="img-fluid mx-auto"/>
                    </div>

                    <div className='col-6 col-sm-3'>
                        <img src={bca} alt="bca" className="img-fluid mx-auto"/>
                    </div>
                </div>

            </div>

        </section>
    </>
    )
}

export default Merchant