import { useLocation} from "react-router-dom";

function Addproduct (){
  const location = useLocation();
  
  
    const handleSubmit = async (e) => {
        e.preventDefault();

    const formData = new FormData();
    document.addEventListener('DOMContentLoaded', () => {
    const fileInput = e.target.querySelector('#image');
    console.log('fileInput:', fileInput);

    if (fileInput.files.length > 0) {
      formData.append('image', fileInput.files[0]);
  } else {
      console.error('No file selected');
      return; // Abort further processing
  }

// if (fileInput && fileInput.files && fileInput.files.length > 0) {
//     formData.append('image', fileInput.files[0]);
// } else {
//     console.error('No file selected');
//     return; // Abort further processing
// }


   // formData.append('image', e.target.querySelector('#image').files[0]);
    formData.append('priceRange', e.target.querySelector('#priceRange').value);
    formData.append('imageName', e.target.querySelector('#imageName').value);
    formData.append('description', e.target.querySelector('#description').value);
    formData.append('tags', e.target.querySelector('#tags').value);
    formData.append('shippingInformation', e.target.querySelector('#shippingInformation').value);
});

    let collection = 'Phones';
    
    try {
        const response = await fetch(`http://localhost:8080/save/${collection}`, {
            method: 'POST',
            body: formData 
        });
        console.log(formData)

        if (response.ok) {
            console.log('File uploaded successfully');
        } else {
            console.error('File upload failed');
        }
    } catch (error) {
        console.error('Error uploading file:', error);
    }
};


    return(
        <div>
            <div className="container-fluid mt-2 mb-2">
  <div className="row justify-content-center">
    {/* <div className="col-md-8"> */}
      <div className="card">
        <div className="card-header">Add New Product</div>
    

        <div className="card-body align-items-center justify-content-between">

          <form id="newProduct" encType="multipart/form-data">

            <div className="form-group d-flex">
              <label htmlFor="image">Drag or drop image here</label>
              <input type="file" className="form-control-file" id="image" accept="image/*" required/>

              <div className="form-group mt-0 row float-end">
              <label htmlFor="priceRange" className="col-sm-3 col-form-label ps-2">Price: </label>
              <div className="col-sm-9">
              <input type="number" className="form-control" id="priceRange" name="priceRange" required/>
              </div>
            </div>
                
              <div className="dropdown ms-auto float-end">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Mobile Phones</a></li>
                  <li><a className="dropdown-item" href="#">Appliances</a></li>
                  <li><a className="dropdown-item" href="#">Furniture</a></li>
                  <li><a className="dropdown-item" href="#">Electronics</a></li>
                  <li><a className="dropdown-item" href="#">Kitchenware</a></li>
                  <li><a className="dropdown-item" href="#">Stationery</a></li>
                  <li><a className="dropdown-item" href="#">Clothing</a></li>
                  <li><a className="dropdown-item" href="#">Computers</a></li>

                </ul>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="imageName">Name</label>
              <input type="text" className="form-control" id="imageName" name="imageName" required/>
            </div>

            <div className="form-group mt-2">
              <label htmlFor="description">Description</label>
              <textarea className="form-control" id="description" name="description" rows="4" required></textarea>
            </div>

            <div className="form-group mt-2">
              <label htmlFor="description">Tags</label>
              <textarea className="form-control" id="tags" name="tags" placeholder="Add atleast 4 tags each separated by a comma"  required></textarea>
            </div>

            <div className="form-group mt-2">
              <label htmlFor="description">Shipping Information</label>
              <textarea className="form-control" id="shippingInformation" name="shippingInformation" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary" onClick={handleSubmit} style={{marginTop: "6px"}}><small>Save</small></button>
          </form>
        </div>
      </div>
    {/* </div> */}
  </div>
</div>
        </div>
    )
};

export default Addproduct;