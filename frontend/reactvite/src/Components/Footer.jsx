
import { Link } from "react-router-dom";

function Futaa () {
    return (
        <div>
            <footer className="footer bg-dark text-light text-center py-3 rounded mt-1 ">
                <div className="container d-flex-inline">

                <div
                    className="me-auto float-start "><small>About</small>
                    </div>
                    <br/>

                    <div
                    className="me-auto float-start "><small>Contacts</small>
                    </div>
                    <br/>

                    <div
                    className="me-auto float-start "><Link><small>Terms of Service</small></Link>
                    </div>
                    <br/>

                    <div
                    className="me-auto float-start "><Link><small>Privacy Policy</small></Link>
                    </div>
                    <br/>
                    
                     <span ><small>&copy; 2024 Shopper's Paradise</small></span>

                     <div className="ms-auto float-end"> 
                        <Link to=""><small>About Developer</small>
                        <img src="./src/assets/Internet_Security_hyper_link_web_chain_connect-64.webp" className="me-1" style={{width:"20px",height:"auto"  }}/>
                        </Link>
                     </div>

                </div>
            </footer>

        </div>
    )
}

export default Futaa;