
import { Link } from "react-router-dom";

function Futaa () {
    return (
        <div>
            <footer className="footer bg-dark text-light text-center py-3 rounded fixed-bottom">
                <div className="container">
                     <span>&copy; 2024 Shopper's Paradise</span>
                     <div className="me-1"> 
                        <p><Link to="">About Developer</Link></p>
                     </div>
                </div>
            </footer>

        </div>
    )
}

export default Futaa;