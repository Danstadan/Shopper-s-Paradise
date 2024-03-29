const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
    projectId: 'proud-portfolio-414109',
    keyFilename: './KeyFile.json', // Path to service account key file
  })

//   async function uploadFile(bucketName, fileData, destinationPath,) { 
     
//     // Uploads file data to the bucket
//      try {
//      await storage.bucket(bucketName).file(destinationPath).save(fileData);

//      console.log(`File uploaded to ${bucketName}/${destinationPath}.`);
 
//         } 
//         catch (error) {
//           console.log('Error uploading file:', error);
//           throw error;
//         }
      
//  // Assuming fileData is the binary data of the file and filename is the desired filename
//  const bucketNameValue = 'bucket-shopper_s-paradise-111';
//  const fileDataValue = req.file.buffer; 
//  const destinationPathValue = `${productId}.jpg`

//  uploadFile(bucketNameValue, fileDataValue, destinationPathValue);
//       }

// module.exports = {storage, uploadFile};
  
// async function createNewVersion(bucketName, originalFileName, updatedFileName, updatedFileData) {
//   // Upload the updated file with the new name to the bucket
//   try {
//   await storage.bucket(bucketName).file(updatedFileName).save(updatedFileData);

//   console.log(`New version of ${originalFileName} created: ${updatedFileName}`);
//   // Optionally, you can update metadata or properties associated with the new version
//   // For example, updating metadata:
//   // const file = storage.bucket(bucketName).file(updatedFileName);
//   // await file.setMetadata({ contentType: 'image/jpeg' });

//   // Or updating custom metadata:
//    await file.setMetadata({ metadata: { version: '2.0' } });
// } catch (error) {
//   console.log('Error updating file:', error);
// }}

// // Example usage
// const originalFileName = '12.jpg';
// const updatedFileName = '14.jpg';
// const updatedFileData = '...'; // Updated file data (e.g., Buffer or string)

// createNewVersion(bucketName, originalFileName, updatedFileName, updatedFileData);

// module.exports = {
//   storage,
//   createNewVersion
// };

// async function listFiles(bucketName) {
//   // List all files in the bucket
//   const [files] = await storage.bucket(bucketName).getFiles();

//   // Extract relevant information from the file metadata
//   const fileDetails = files.map(file => ({
//       name: file.name,
//       size: file.metadata.size,
//       contentType: file.metadata.contentType,
//       updated: file.metadata.updated,
//       // Add more properties as needed
//   }));

//   return fileDetails;
// }

// Example usage
// listFiles(bucketName)
//   .then(files => {
//       console.log('Files in bucket:', files);
//       // Display files in your application's UI
//   })
//   .catch(err => {
//       console.error('Error listing files:', err);
//   });

// module.exports = {
//   storage,
//   listFiles
// };

  module.exports = storage;