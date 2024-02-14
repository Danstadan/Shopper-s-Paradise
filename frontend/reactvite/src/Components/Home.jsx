import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Homepage(){

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('your-backend-api/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

    return(
        <div >
          {categories.map(category => (
          <div>
          <ul className="nav nav-tabs mt-1 pb-1 fs-6 fw-light">
              <li className="nav-item ms-3">
                <small className="nav-link active" aria-current="page">{category.name}</small>
              </li>
              
            </ul>
          <div className="row row-cols-2 row-cols-md-4 g-2">
              <Link to={`/category/${category.id}`}>
                <div className="card mt-1 ms-3" style={{width: "8rem", marginRight: "6px"}}>
                  <img src="..." className="card-img-top" alt="..."/>
                </div>
              </Link>
          </div>
          </div>
          ))}
      </div> 
    )
};

export default Homepage;