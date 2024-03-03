import '../CSS/SideBar.css'
import { useLocation } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();

    return (

      <div className="container-fluid  me-6">
        <div className="row gap-2">
            <div className="col-3 col-lg-2 border rounded bg-success-subtle justify-content-center align-items-center">
                <div className="sidebarstyles  text-center align-middle text-light ">
                    <p>Mobile Phones</p>
                    <p>Electronics</p>
                    <p>Appliances</p>
                    <p>Furniture</p>
                    <p>Kitchen Ware</p>
                    <p>Stationery</p>
                </div>
            </div>
            <div className="col border-none ">
                <img src="./src/assets/ad.jpg" alt="ad no.1" style={{maxWidth: "100%", maxHeight: "100%", height: "auto", borderRadius:"7px"}}/>
            </div>

        </div>

      </div>

        // <div className="list-goup bg-primary-subtle mt-35 col-md-3">
        //                 <p className="list-group-item list-group-item-action badge rounded-pill">Mobile Phones</p>
        //                 <p className="list-group-item list-group-item-action badge rounded-pil">Electronics</p>
        //                 <p className="list-group-item list-group-item-action badge rounded-pil">Furniture</p>
        //                 <p className="list-group-item list-group-item-action badge rounded-pil">Appliances</p>
        //                 <p className="list-group-item list-group-item-action badge rounded-pil">Sterios</p>
        //                 <p className="list-group-item list-group-item-action badge rounded-pil">Motobikes</p>
        //                 <p className="list-group-item list-group-item-action badge rounded-pil">Fashion</p>
        //                 <p className="list-group-item list-group-item-action badge rounded-pil">Phone Accessories</p>
        //                 <p className="list-group-item list-group-item-action badge rounded-pil">Stationery</p>
        // </div>
    );
}

export default Sidebar;
