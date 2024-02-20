const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
    projectId: 'proud-portfolio-414109',
    keyFilename: './KeyFile.json', // Path to service account key file
  })

  async function uploadFile(bucketName, fileData, destinationPath) {
     // Uploads file data to the bucket
     try {
     await storage.bucket(bucketName).file(destinationPath).save(fileData);

     console.log(`File uploaded to ${bucketName}/${destinationPath}.`);
 
        } 
        catch (error) {
          console.log('Error uploading file:', error);
          throw error;
        }
      }
 // Example usage
 // Assuming fileData is the binary data of the file and filename is the desired filename
 // You can pass these values dynamically from the frontend
 const bucketName = 'bucket-shopper_s-paradise-111';
 const fileData = '...'; // File data (e.g., Buffer or string)
 const destinationPath = '2.jpg';

 uploadFile(bucketName, fileData, destinationPath);

  
//   // CreateS a new instance of the Storage class
//   const bucketName = 'bucket-shopper_s-paradise-111'

// // Uploading images to Cloud 
//   async function uploadFile(bucketName, filePath) {
//     // Uploads a local file to the bucket
//     await storage.bucket(bucketName).upload(filePath, {
//       // Specify the destination path within the bucket
//       destination: 'Trial/image1.jpg',
//     });
  
//     console.log(`${filePath} uploaded to ${bucketName}.`);
//   }
  
//   // Example usage
//   uploadFile('bucket-shopper_s-paradise-111', './public/images/dev.jpg');

// Deleting files
async function deleteFile(bucketName, fileName) {
  // Deletes the file from the bucket
  try {
  await storage.bucket(bucketName).file(fileName).delete();

  console.log(`File ${fileName} deleted from ${bucketName}.`);
}
catch (error) {
  console.log('Error deleting file:', error);

}}
// Example usage
const fileName = '1.jpg';

deleteFile(bucketName, fileName);

// module.exports = {
//   storage,
//   deleteFile
// };

  module.exports = storage;