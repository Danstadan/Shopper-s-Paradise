import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Homepage(){

  const [categories, setCategories] = useState([]);
  const [doc, setDoc] = useState([]);
  const [organizedData, setOrganizedData] = useState({});

  useEffect(() => {
    
    async function fetchData() {
      try {
      const categoriesResponse = await fetch('/categories/home', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(categoriesResponse => {
      if (!categoriesResponse1.ok) {
        throw new Error('Network response was not ok');
      }});
      
      const collectionData = await collectionResponse.json();
      //return response1.json();\
      
      const organizedData = {};

      categoriesData.forEach(category=> {
        organizedData[category.id] = [];
      });


      collectionData.forEach(item=>{
        if (organizedData[item.categoryId].push(item));
      }
    );

    setOrganizedData(organizedData);

    .then(data => {
      // Handle the response data here, for example, set it to state
      setCategories(data);
    })
    .catch(error => {
      console.error('Error fetching categories:', error);
      // Handle errors here
    });
  }, []); // Empty dependency array means this effect runs once after mounting

  const handleMoreProducts = (categoryId) => {
  fetch(`/categories/home/${category.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
    console.log(response);
  })
  .then(data => {
    console.log(data);
    // Handle the response data here, for example, set it to state
    setCategories(data);
  })
  .catch(error => {
    console.error('Error fetching categories:', error);
    // Handle errors here
  });}

  fetch(`/${collection}`)
  .then(response => response.json())
  .then(data => setDoc(data))
  .catch(error => console.error('Error fetching items:', error));

[];

      fetch(`/${collection}/${document}`)
      .then(response => response.json())
      .then(data => setDoc(data))
      .catch(error => console.error('Error fetching item:', error));

   [];

       return(
        <div className="flex-1">
          {categories.map(category => (
            <div key={category.id}>
          <ul className="nav nav-tabs mt-1 pb-1 fs-6 fw-light">
              <li className="nav-item ms-3">
                <small className="nav-link active" aria-current="page">{category.name}
                <img src="4581518.png" alt="More" onClick={()=>handleMoreProducts(category.id)}>
                  </img></small>
              </li>
              
            </ul>
          <div className="row row-cols-2 row-cols-md-4 g-2">
              <Link to={`/category/home/${category.id}`}>
                <div className="card mt-1 ms-3" style={{width: "8rem", marginRight: "6px"}}>
                  <img src=" " className="card-img-top" alt="..."/>
                </div>
              </Link>
          </div>
          {doc.map(doc => (
          <div key={doc.id}>
          <div className="row row-cols-2 row-cols-md-4 g-2">
              <Link to={`/${collection}/${document}/${doc.id}`}>
                <div className="card mt-1 ms-3" style={{width: "8rem", marginRight: "6px"}}>
                  <img src="doc.images[0]" className="card-img-top" alt="..."/>
                </div>
              </Link>
              </div>
          </div>
          ))}
          </div>
          ))} 
          
      </div>
    );
          }

export default Homepage;