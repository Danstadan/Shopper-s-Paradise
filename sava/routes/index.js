var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/home', async (_, res) => {
  try {
    // Retrieve data from Firestore 
    const db = req.app.locals.db;
    const snapshot = await db.collection('Paradise Data').get();
    const data = snapshot.docs.map(doc => doc.data());
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error('Error retrieving data from Firestore', error);
    res.status(500).send('Error retrieving data from Firestore');
  }
});

router.post('/save', async (req, res) => {
  try{
    const  newData  = req.body; // newData is the data you want to add

    // Access Firestore database
    const db = admin.firestore();

    // Add new data to a collection
    await db.collection('Paradise Data').add(newData);
  
    res.status(201).json({ message: 'Data added successfully' });
  } catch (error) {
    console.error('Error adding data:', error);
    res.status(500).json({ error: 'An error occurred while adding data' });
  }
});


// Updates data 
router.put('/update', async (req, res) => {
  try {
    const { id, ...updateData } = req.body;

    // Updates document in Firestore
    await db.collection('Paradise Data').doc(id).update(updateData);

    res.status(200).json({ message: 'Data updated successfully' });
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).json({ error: 'An error occurred while updating data' });
  }
});

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
  
  // if (searchTerm) {
  //   query = query.where
      // ('Availability',"==", searchTerm);
      // ('Discount',"==", searchTerm);
     // ('Item',"==", searchTerm);
      // ('New Prce',"==", searchTerm);
      // ('Price',"==", searchTerm); 

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


// Search requests
// router.get('/search', (req, res) => {
//   try {
//   // Extract search criteria from query parameters
//   const { availability, discount, item, newPrice, price } = req.query;

//   // Filter data based on search criteria
//   const filteredData = data.filter(item => (
//       (!availability || item.Availability === availability) &&
//       (!discount || item['Discount %'] === parseInt(discount)) &&
//       (!item || item.Item.toLowerCase() === item.toLowerCase()) &&
//       (!newPrice || item['New Price'] === parseInt(newPrice)) &&
//       (!price || item.Price === parseInt(price))
//   ));

//   res.json(filteredData);
//   console.log(filteredData);
//   }
//   catch  (error) {
//     console.error('Error searching for data:', error);
//     res.status(500).json({ error: 'An error occurred while searching for data' });
//   }
// });


// Search criteria )
// const searchTerm = 'Headphones';

// //Query to search for documents where 'Item' field matches the search term
// const query = db.collection('Paradise Data').where('Item', '==', searchTerm);

// // Executing the query
// // const querySnapshot = await query.get();

// // Processing the results
// const searchResults = [];
// querySnapshot.forEach(doc => {
//   // Extracting data from each document
//   const data = doc.data();
//   searchResults.push(data);
// });

// catch 404 and forward to error handler

router.delete('/delete/:documentId', (req, res) => {
  const { documentId } = req.params; // Extracts the document ID from the request params

  // Delete the document
  db.collection('Paradise Data').doc(documentId).delete()
    .then(() => {
      //console.log('Document successfully deleted');
      res.status(200).json({ message: 'Document successfully deleted' });
    })
    .catch((error) => {
      console.error('Error deleting document:', error);
      res.status(500).json({ error: 'An error occurred while deleting the document' });
    });
});

//const documentId = 'YOUR_DOCUMENT_ID_HERE';

// Delete the document
// db.collection('Paradise Data').doc(documentId).delete()
//   .then(() => {
//     console.log('Document successfully deleted');
//   })
//   .catch((error) => {
//     console.error('Error deleting document:', error);
//   });

module.exports = router;
