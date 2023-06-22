import logo from '../../assets/img/logo-bulet.png'
import FontReguler from '../../elements/FontReguler/FontReguler'
import FontBold from '../../elements/FontBold/FontBold'
import Color from "../../elements/Color/Color"

import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top container-fluid" style={{background:`${Color.primary}`, borderRadius:"0px 0px 24px 24px", boxShadow:"0px 5px 5px rgba(0, 0, 0, 0.1)"}}>
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
                        className="d-flex align-items-center  w-100">
                            <ul className="navbar-nav flex-grow-1" >
                                <a className="navbar-brand d-flex align-items-center" href="#" >
                                    <img src={logo} alt="Logo"/>
                                            <FontBold $20light className='mb-1 ms-3'>SkuyPay</FontBold>
                                </a>
                            </ul>

                            <div className="navbar-nav  me-3">
                                    <li className="nav-item me-3">
                                        <Link to="fitur"  >
                                            <a href="fitur" className="nav-link">
                                                <FontReguler $16light>
                                                    Fitur
                                                </FontReguler>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item ms-3">
                                        <Link to='secure'>
                                            <a href="secure" className="nav-link">
                                                <FontReguler $16light>
                                                    Keamanan
                                                </FontReguler>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item ms-3" >
                                        <Link to='footer'>
                                            <a href="footer" className="nav-link">
                                                <FontReguler $16light>
                                                    Tentang Kami
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