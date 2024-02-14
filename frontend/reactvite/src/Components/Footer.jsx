
import { Link } from "react-router-dom";

function Futaa () {
    return (
        <div>
            <footer class="footer bg-dark text-light text-center py-3 rounded">
                <div class="container">
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