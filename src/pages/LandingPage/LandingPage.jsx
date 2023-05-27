import Feature from "../../components/Feature/Feature"
import Footer from "../../components/Footer/Footer"
import Hero from "../../components/Hero/Hero"
import Merchant from "../../components/Merchant/Merchant"
import Navbar from "../../components/Navbar/Navbar"
import Secure from "../../components/Secure/Secure"

const Landingpage = () =>{

    return(
        <>
            <Navbar/>
            <Hero/>
            <Feature/>
            <Secure/>
            <Merchant/>
            <Footer/>
        </>
    )
}

export default Landingpage