const express = require('express');
const router = express.Router();
const db = require('../Firebase.js');

const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
    projectId: 'proud-portfolio-414109',
    keyFilename: './KeyFile.json', // Path to service account key file
  })

// const { uploadFile, createNewVersion } = require('../CloudStorage.js');

// Fetching a specific product data from Firebase
router.get('/:collection/:document', async (req, res) => {
  try {
    const { collection, document } = req.params;
    // Retrieve data from Firestore 
    const db = req.app.locals.db;
    const snapshot = await db.collection(collection).doc(document).get();
    if (!snapshot.exists) {
      // If the document does not exist, return a 404 Not Found response
      return res.status(404).json({ error: 'Entry not found' });
    }
      const data = snapshot.data();
    const { name, description } = data;
   
    const bucketName = 'bucket-shopper_s-paradise-111';
    const files = await getFilesToDelete(bucketName, document);

    const ResponseData = {
      name,
      description,
      images: files
    };

    res.json(ResponseData);
  } catch (error) {
    console.error('Error retrieving data from Firestore', error);
    res.status(500).send('Error retrieving data from Firestore');
  }
}); 

// Fetches specific categories from Firebase
router.get('/categories/home/:categoryId', async (req, res) => {
  try {
    const { categoryId } = req.params;
    // Retrieve data from Firestore 
    const db = req.app.locals.db;
    const snapshot = await db.collection("Categories").doc(categoryId).get();
    if (!snapshot.exists) {
      // If the document does not exist, return a 404 Not Found response
      return res.status(404).json({ error: 'Entry not found' });
    }
      const data = snapshot.data();
      console.log(data);
      const jsonData = JSON.stringify(data);
      res.json(jsonData);
  } catch (error) {
    console.error('Error retrieving category from Firestore', error);
    res.status(500).send('Error retrieving category from Firestore');
  }
});

// Fetching products data from Firebase
router.get('/:collection', async (req, res) => {
  try {
    const { collection } = req.params;
    // Retrieve data from Firestore 
    const db = req.app.locals.db;
    const snapshot = await db.collection(collection).get();
    if (!snapshot.exists) {
      // If the document does not exist, return a 404 Not Found response
      return res.status(404).json({ error: 'Entry not found' });
    }
      const data = snapshot.data();
    const { name, description } = data;
   
    const bucketName = 'bucket-shopper_s-paradise-111';
    const files = await getFilesToDelete(bucketName, document);

    const ResponseData = {
      name,
      description,
      images: files
    };

    res.json(ResponseData);
  } catch (error) {
    console.error('Error retrieving data from Firestore', error);
    res.status(500).send('Error retrieving data from Firestore');
  }
}); 

// Fetches all categories from Firebase
router.get('/categories/home', async (req, res) => {
  try {
    const db = req.app.locals.db;
    const snapshot = await db.collection("Categories").get();
    const categories = snapshot.docs.map(doc => doc.data());
    res.json(categories);
  } catch (error) {
    console.error('Error retrieving categories from Firestore', error);
    res.status(500).send('Error retrieving categories from Firestore');
  }
});



// Adds New Products
router.post('/save/:collection', async (req, res) => {
  try{
    const  newData  = req.body; 
    const {collection} = req.params;

    // Access Firestore database
    const db = admin.firestore();

    // Add new data to a collection
    const docRef = await db.collection(collection).add(newData);
    
    const productId = docRef.id;

    const bucketName = 'bucket-shopper_s-paradise-111';
    const files = req.files;

    const uploadPromises = files.map(async (file) => {
      const fileData = file.buffer; // File data (e.g., Buffer or string)
      const destinationPath = `${collection}/${productId}-${file.originalname}`;

    await uploadFile(bucketName, fileData, destinationPath);
    });

    await Promise.all(uploadPromises);

    res.status(201).json({ message: 'Data added successfully' });
  } catch (error) {
    console.error('Error adding data:', error);
    res.status(500).json({ error: 'An error occurred while adding data' });
  }
});

async function uploadFile(bucketName, fileData, destinationPath) {
  try {
    await storage.bucket(bucketName).file(destinationPath).save(fileData);
    console.log(`File uploaded to ${bucketName}/${destinationPath}.`);
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}


// Updates Product Data
router.put('/update/:collection/:document', async (req, res) => {
  try {
    const updateData = req.body;
    const {collection, document} = req.params;

    // Updates document in Firestore
    await db.collection(collection).doc(document).update(updateData);

    const productId = docRef.id;

    const bucketName = 'bucket-shopper_s-paradise-111';
    const files = req.files;

    const updatePromises = files.map(async (file) => {
      const fileData = file.buffer; // File data (e.g., Buffer or string)
      const destinationPath = `${collection}/${productId}-${file.originalname}`;

    await createNewVersion(bucketName, fileData, destinationPath);
    });

    await Promise.all(updatePromises);

    res.status(201).json({ message: 'Data updated successfully' });
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).json({ error: 'An error occurred while updating data' });
  }
});

async function createNewVersion(bucketName, originalFileName, updatedFileName, updatedFileData) {
  // Upload the updated file with the new name to the bucket
  try {
  await storage.bucket(bucketName).file(updatedFileName).save(updatedFileData);

  console.log(`New version of ${originalFileName} created: ${updatedFileName}`);
   await file.setMetadata({ metadata: { version: '2.0' } });
  }
  catch (error) {
    console.error('Error updating images:', error);
    res.status(500).json({ error: 'An error occurred while updating images' });
  }
}

// Search requests
router.get('/search', async (req, res) => {
  try {
    // Extract search criteria from query parameters
    const fieldName = req.query.fieldName;
    const searchTerm = req.query.value;
    // console.log('Search Term:', searchTerm);

    // Access Firestore database
    const db = admin.firestore();

    // Perform the query to search for the searchTerm in the database
  const query = db.collection('Paradise Data').where(fieldName, '==', searchTerm);
  
    // Retrieve data based on the query
    const snapshot = await query.get();

    // Extract data from the snapshot
    const searchData = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      searchData.push(data);
    });

    // Return the search results
    res.json(searchData);
    console.log(searchData);
  } catch (error) {
    console.error('Error searching for data:', error);
    res.status(500).json({ error: 'An error occurred while searching for data' });
  }
});

// Deletes Product Entries
router.delete('/delete/:collection/:document', async (req, res) => {
  try{
  const { collection, document } = req.params; 
  const db = admin.firestore();

  const bucketName = 'bucket-shopper_s-paradise-111';
  const filesToDelete = await getProductData(collection, document); // Get the list of files to delete
  const deletePromises = filesToDelete.map(async (fileName) => {
  await deleteFile(bucketName, fileName);
  });
    await Promise.all(deletePromises);

    res.status(200).json({ message: 'Document successfully deleted' });
    }
    catch(error) {
      console.error('Error deleting document:', error);
      res.status(500).json({ error: 'An error occurred while deleting the document' });
    }
});

async function getProductData(collection, document) {
  try{
  const db = req.app.locals.db;
  const firestorePromise = db.collection(collection).doc(document).get();
  const storagePromise = getFilesToDelete(collection, document);

  const [firestoreSnapshot, images] = await Promise.all([firestorePromise, storagePromise]);

  const productDescription = firestoreSnapshot.data();
  return {productDescription, images};
  } 
  catch (error){
    console.log('Error retrieving files to delete:', error );
    throw error;
  }
}

async function getFilesToDelete(bucketName, productId) {
  try {
    const [files] = await storage.bucket(bucketName).getFiles();

    // Extract relevant information from the file metadata
    const filteredFiles = files.filter(file =>{
      return file.name.includes(productId);
    });

    const fileDetails = filteredFiles.map(file => ({
      name: file.name,
      size: file.metadata.size,
      contentType: file.metadata.contentType,
      updated: file.metadata.updated,
    }));
    return fileDetails;

  }
  catch (error) {
    console.error('Error retrieving files to delete:', error);
    throw error;
  }
}

// Delete a file from Cloud Storage
async function deleteFile(bucketName, fileName, document, collection) {
  const db = admin.firestore();

  try {
    if(productId === document) {
    await db.collection(collection).doc(document).delete();
    await storage.bucket(bucketName).file(fileName).delete();
    console.log(`File ${fileName} deleted from Cloud Storage.`);
    }
    else {
      console.log('No product images match documentId.');
    }
    } 
    catch (error) {
    console.error(`Error deleting file ${fileName} from Cloud Storage:`, error);
    throw error;
  }
}
module.exports = router;
