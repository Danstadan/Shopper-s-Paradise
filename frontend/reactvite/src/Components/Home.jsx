import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


function Homepage() {
  const [categories, setCategories] = useState([]);
  const [doc, setDoc] = useState([]);
  const [organizedData, setOrganizedData] = useState({});
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      try {
        const categoriesResponse = await fetch('/categories/home', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!categoriesResponse.ok) {
          throw new Error('Categories network response was not ok');
        }
        const categoriesData = await categoriesResponse.json();

        const collectionResponse = await fetch('/collection');
        if (!collectionResponse.ok) {
          throw new Error('Collection network response was not ok');
        }
        const collectionData = await collectionResponse.json();

        const organizedData = {};
        categoriesData.forEach(category => {
          organizedData[category.id] = [];
        });
        collectionData.forEach(item => {
          organizedData[item.categoryId].push(item);
        });

        setOrganizedData(organizedData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();

  }, []);

  const handleMoreProducts = (categoryId) => {
    fetch(`/categories/home/${categoryId}`, {
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
      })
      .then(data => {
        setCategories(data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }

  useEffect(() => {
    fetch(`/${collection}`)
      .then(response => response.json())
      .then(data => setDoc(data))
      .catch(error => console.error('Error fetching items:', error));

    fetch(`/${collection}/${document}`)
      .then(response => response.json())
      .then(data => setDoc(data))
      .catch(error => console.error('Error fetching item:', error));
  }, []); // Ensure this effect runs only once after mounting

  return (
    <div className="flex-1">
      {categories.map(category => (
        <div key={category.id}>
          <ul className="nav nav-tabs mt-1 pb-1 fs-6 fw-light">
            <li className="nav-item ms-3">
              <small className="nav-link active" aria-current="page">{category.name}</small>
              <img src="4581518.png" alt="More" onClick={() => handleMoreProducts(category.id)} />
            </li>
          </ul>
          <div className="row row-cols-2 row-cols-md-4 g-2">
            <Link to={`/category/home/${category.id}`}>
              <div className="card mt-1 ms-3" style={{ width: "8rem", marginRight: "6px" }}>
                <img src=" " className="card-img-top" alt="..." />
              </div>
            </Link>
          </div>
          {doc.map(docItem => (
            <div key={docItem.id}>
              <div className="row row-cols-2 row-cols-md-4 g-2">
                <Link to={`/${collection}/${document}/${docItem.id}`}>
                  <div className="card mt-1 ms-3" style={{ width: "8rem", marginRight: "6px" }}>
                    <img src={docItem.images[0]} className="card-img-top" alt="..." />
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
