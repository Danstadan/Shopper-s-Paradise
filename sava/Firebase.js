

//Initializing firestore admin
const admin = require('firebase-admin');

// Path to service account key JSON file
const serviceAccount = require('../database/serviceAccountKey.json');

// Initializes Firebase Admin SDK with service account credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Using `admin.firestore()` to interact with Firestore
const db = admin.firestore();

module.exports = db;