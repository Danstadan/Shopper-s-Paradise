const express = require('express');

const db = require('../Firebase.js');
const storage =require('../CloudStorage.js');

const router = express.Router();

const bucketName = 'bucket-shopper_s-paradise-111';

router.get('/product/:productId', async (req, res) => {
  try {
      const { productId } = req.params;
      

      // Fetch product descriptions from Firestore
      const firestoreData = await fetchProductDescriptionsFromFirestore(productId);
      
      if (!productDescription) {
        // If the product description does not exist, return a 404 Not Found response
        return res.status(404).json({ error: 'Product not found' });
    }

      // Fetch product images from Cloud Storage
      const storageData = await fetchProductImagesFromStorage(productId);

      // Combine data into a single response object
      const combinedData = {
          productDescriptions: firestoreData,
          productImages: storageData
      };

      // Send combined data as the response
      res.json(combinedData);
  } catch (error) {
      console.error('Error fetching product data:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

// Function to fetch product descriptions from Firestore
async function fetchProductDescriptionsFromFirestore(productId) {
  
  // Logic to fetch product descriptions from Firestore
  const docSnapshot = await firestore.collection('Paradise Data').doc(productId).get();
  if (docSnapshot.exists) {
    // If the document exists, return its data
    return docSnapshot.data();
} else {
    // If the document does not exist, return null
    return null;
}
}

// Function to fetch product images from Cloud Storage
async function fetchProductImagesFromStorage(productId) {
  // Implement logic to fetch product images from Cloud Storage
  // For demonstration purposes, let's assume we have product images stored in a specific bucket
  const prefix =`${productId}/`;
  const [files] = await storage.bucket(bucketName).getFiles({prefix});
  const productImages = files.map(file => file.name);
  return productImages;
}

router.put('/product/update/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const updateData = req.body; // Assuming updateData is provided in the request body

    // Update document in Firestore
    await db.collection('Paradise Data').doc(productId).update(updateData);

    // Fetch updated product descriptions from Firestore
    const productDescription = await fetchProductDescriptionsFromFirestore(productId);

    if (!productDescription) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Fetch updated product images from Cloud Storage
    const productImages = await fetchProductImagesFromStorage(productId);

    // Combine data into a single response object
    const combinedData = {
      productDescription: productDescription,
      productImages: productImages
    };

    // Send combined data as the response
    res.json(combinedData);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Function to fetch product descriptions from Firestore
async function fetchProductDescriptionsFromFirestore(productId) {
  try {
    // Fetch product description from Firestore for the specified productId
    const docSnapshot = await firestore.collection('Paradise Data').doc(productId).get();

    if (docSnapshot.exists) {
      // If the document exists, return its data
      return docSnapshot.data();
    } else {
      // If the document does not exist, return null
      return null;
    }
  } catch (error) {
    console.error('Error fetching product description:', error);
    throw error;
  }
}

// Function to fetch product images from Cloud Storage
async function fetchProductImagesFromStorage(productId) {
  try {
    // Fetch product images from Cloud Storage for the specified productId
    const prefix = `${productId}/`;
    const [files] = await storage.bucket(bucketName).getFiles({ prefix });
    const productImages = files.map(file => file.name);
    return productImages;
  } catch (error) {
    console.error('Error fetching product images:', error);
    throw error;
  }
}




// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
