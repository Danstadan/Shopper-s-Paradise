import { useLocation } from "react-router-dom";

function Editproduct (){
  const location = useLocation();
  
    const handleSubmit = async (e) => {
        e.preventDefault();

    const formData = new FormData(e.target);
    
    try {
        const response = await fetch(`/update/${collection}/${document}`, {
            method: 'PUT',
            body: formData
        });

        if (response.ok) {
            console.log('Product updated successfully');
        } else {
            console.error('Product update failed');
        }
    } catch (error) {
        console.error('Error updating product:', error);
    }
};


    return(
        <div>
            <div className="container-fluid mt-2 mb-2">
  <div className="row justify-content-center">
    {/* <div className="col-md-8"> */}
      <div className="card">
        <div className="card-header">Edit Product</div>
    

        <div className="card-body align-items-center justify-content-between">
          <form id="newProduct" enctype="multipart/form-data">
            <div className="form-group d-flex">
              <label for="image">Drag or drop image here</label>
              <input type="file" className="form-control-file" id="image" accept="image/*" required/>

              <div className="form-group mt-0 row float-end">
              <label for="priceRange" className="col-sm-3 col-form-label ps-2">Price: </label>
              <div className="col-sm-9">
              <input type="number" className="form-control" id="priceRange" name="priceRange" required/>
              </div>
            </div>
                
              <div class="dropdown ms-auto float-end">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Mobile Phones</a></li>
                  <li><a class="dropdown-item" href="#">Appliances</a></li>
                  <li><a class="dropdown-item" href="#">Furniture</a></li>
                  <li><a class="dropdown-item" href="#">Electronics</a></li>
                  <li><a class="dropdown-item" href="#">Kitchenware</a></li>
                  <li><a class="dropdown-item" href="#">Stationery</a></li>
                  <li><a class="dropdown-item" href="#">Clothing</a></li>
                  <li><a class="dropdown-item" href="#">Computers</a></li>

                </ul>
              </div>
            </div>

            <div className="form-group">
              <label for="imageName">Name</label>
              <input type="text" className="form-control" id="imageName" name="imageName" required/>
            </div>

            <div className="form-group mt-2">
              <label for="description">Description</label>
              <textarea className="form-control" id="description" name="description" rows="4" required></textarea>
            </div>

            <div className="form-group mt-2">
              <label for="description">Tags</label>
              <textarea className="form-control" id="tags" name="tags" placeholder="Add atleast 4 tags each separated by a comma"  required></textarea>
            </div>

            <div className="form-group mt-2">
              <label for="description">Shipping Information</label>
              <textarea className="form-control" id="shippingInformation" name="shippingInformation" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary" onClick={handleSubmit} style={{marginTop: "6px"}}><small>Save changes</small></button>
          </form>
        </div>
      </div>
    {/* </div> */}
  </div>
</div>
        </div>
    )
};

export default Editproduct;