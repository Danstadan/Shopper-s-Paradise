const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
    projectId: 'proud-portfolio-414109',
    keyFilename: '/KeyFile.json', // Path to service account key file
  })
  
  // CreateS a new instance of the Storage class
  const bucketName = 'bucket-shopper_s-paradise-111'

// Uploading images to Cloud 
  async function uploadFile(bucketName, filePath) {
    // Uploads a local file to the bucket
    await storage.bucket(bucketName).upload(filePath, {
      // Specify the destination path within the bucket
      destination: 'destination/path/in/bucket',
    });
  
    console.log(`${filePath} uploaded to ${bucketName}.`);
  }
  
  // Example usage
  uploadFile('your-bucket-name', 'local/path/to/file.txt');

  module.exports = storage;