import { Link } from 'react-router-dom'

//icons
import '../static/css/footer.css';

//logo image
import logo from '../static/images/urbansetu.png';

function Footer() {
    return (
        <footer className="footersection">
            <div className="container-fluid Foot">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-12">
                        <div className="logopicdiv"><img src={logo} className="img-fluid logopic"></img></div>
                    </div>
                    <div className="col-lg-2 col-sm-3 col-8 offset-md-0 offset-2 offset-sm-2 ">

                        <ul className="getstarted">
                            <h2>User</h2>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-3 col-8 offset-md-0 offset-2 offset-sm-2">

                        <ul className="getstarted">
                            <h2>Owner</h2>
                            <li>
                                <Link to="/">
                                    info</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-3 offset-lg-0 offset-md-4 col-8 offset-2 offset-sm-2">

                        <ul className="getstarted">
                            <h2>Seller</h2>
                            <li>
                                <Link to="/buy">Buy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyrights">
                <Link to="/">@2020 Copyright Silk</Link>
            </div>
        </footer>
    )

}

export default Footer;