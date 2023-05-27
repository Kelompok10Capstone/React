import logo from '../../assets/img/logo-bulet.png'
import FontReguler from '../../elements/FontReguler/FontReguler'
import FontBold from '../../elements/FontBold/FontBold'
import Color from "../../elements/Color/Color"

import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md bg-body-tertiary  position-relative" style={{background:`${Color.primary}`}}>
                <div className="container ">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div 
                        className="collapse navbar-collapse " 
                        id="navbarTogglerDemo01">
                    <div 
                        className="d-flex align-items-center justify-content-evenly w-100">
                            <ul className="navbar-nav flex-grow-1" >
                                <a className="navbar-brand d-flex align-items-center" href="#" >
                                    <img src={logo} alt="Logo"/>
                                        <div className='mt-2' style={{marginLeft:"20%"}}>
                                            <FontBold $16light>Skuy</FontBold>
                                        </div>
                                </a>
                            </ul>

                            <div className="navbar-nav  " style={{marginRight:"7%"}}>
                                    <li className="nav-item" style={{marginRight:"5%"}}>
                                        <Link to="hero"  >
                                            <a href="hero" className="nav-link">
                                                <FontReguler $16light>
                                                    Unduh
                                                </FontReguler>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item" style={{marginLeft:"5%"}}>
                                        <Link to='fitur'>
                                            <a href="fitur" className="nav-link">
                                                <FontReguler $16light>
                                                    Fitur
                                                </FontReguler>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item" style={{marginLeft:"5%"}}>
                                        <Link to='merchant'>
                                            <a className="nav-link" href="#">
                                                <FontReguler $16light>
                                                    Merchant
                                                </FontReguler>
                                            </a>
                                        </Link>
                                    </li>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            

        </>
    )
}

export default Navbar