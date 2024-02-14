import '../CSS/NavBar.css';
import {Link} from 'react-router-dom';

function Navbar (){
    return(
        <nav className="navbar navbar-expand-lg bg-success-subtle rounded ">
        <div className="container-fluid">

          <div>
            <img className='logo ms-5' src="./src/assets/download.png" alt="Shopper's Paradise Logo"/>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

          <form className="d-flex me-auto ms-auto " role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button type="submit" className="searchButton">
              <img src="./src/assets/searchButton.png" alt="search"/>
              </button>
            </form>

            <div className='justify-content-end'>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end gap-3">

              <li className="nav-item">
                <div className="nav-link active" aria-current="page" href="#">Add to Cart</div>
              </li>

              <li className="nav-item me-5">
                <a className="nav-link" href="#">Sign In</a>
              </li>

              {/* <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">About Us</a>
              </li> */}

            </ul>
            </div>
          </div>
        </div>
      </nav>

        // <div className="Container pt-5px">
        //     <div className='row'>
        //         <div className='col-lg-3 col-md-3 col-sm-2 col-1'>
        //     <img className="logo" src="./src/assets/download.png" alt="Shopper's Paradise Logo"/>
        //     </div>
        //     <div className="col-lg-5 col-md-5 col-sm-4 col-7">
 
        //       <form className="searchContainer " action="#">

        //       <input className="rounded-pill searchBox" type="text" placeholder="Search.." name="search"/> 
        //         <button type="submit" id="search-button" className='searchButton'>
        //             <img src="./src/assets/searchButton.png" alt="search"/>
        //         </button>
        //       </form>
        //       </div>

        //      <div className="col-lg-2 col-md-2 col-sm-3 col-2 navbuttons">
        //        <Link to="#"><button className="rounded-pill navAddtoCart" >Add to Cart</button></Link>
        //         </div>
        //         <div className='col-lg-2 col-md-2 col-sm-3 col-2 navbuttons'>
        //         <Link to="#"><button className="rounded-pill navSignIn" >Sign In</button></Link>
        //         </div>
        //     </div> 
        //     </div>
        
    )
};

export default Navbar;