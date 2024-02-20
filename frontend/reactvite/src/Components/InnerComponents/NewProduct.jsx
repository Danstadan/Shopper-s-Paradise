

function Addproduct (){
    const handleSubmit = async (e) => {
        e.preventDefault();

    const formData = new FormData(e.target);
    
    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });

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
            <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card">
        <div className="card-header">Image Upload Form</div>

        <div className="card-body">
          <form id="newProduct" enctype="multipart/form-data">
            <div className="form-group">
              <label for="image">Drag or drop image here</label>
              <input type="file" className="form-control-file" id="image" accept="image/*" required/>
            </div>

            <div className="form-group">
              <label for="imageName">Image Name</label>
              <input type="text" className="form-control" id="imageName" name="imageName" required/>
            </div>

            <div className="form-group">
              <label for="description">Description</label>
              <textarea className="form-control" id="description" name="description" rows="3" required></textarea>
            </div>

            <div className="form-group">
              <label for="priceRange">Price Range</label>
              <input type="text" className="form-control" id="priceRange" name="priceRange" required/>
            </div>

            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Upload Image</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
};

export default Addproduct;