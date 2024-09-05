const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;  // You can change this to any port you prefer

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')  // Directory where the files will be saved
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))  // Appends timestamp to avoid filename conflicts
  }
});

const upload = multer({ storage: storage });

// Serve static files (your frontend files)
app.use(express.static('signUp'));

// Handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.send('File uploaded successfully.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
