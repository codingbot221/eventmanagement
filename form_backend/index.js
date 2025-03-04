// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const projectController = require('./controller/projectController');
// const multer = require('multer');
// const mongoose = require('mongoose');

// const app = express();

// // Multer storage configuration
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// });

// // File filter to accept only certain file types
// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//         cb(null, true);
//     } else {
//         cb(new Error('Invalid file type, only JPEG and PNG are allowed!'), false);
//     }
// };

// const upload = multer({ storage: storage, fileFilter: fileFilter });

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use('/uploads', express.static('uploads'));

// // MongoDB connection
// const dbURL = 'mongodb://127.0.0.1:27017/form';

// mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('DB Connected.'))
//     .catch(err => {
//         console.error('DB connection error:', err);
//         process.exit(1); // Exit the process with failure
//     });

// mongoose.connection.on('error', (err) => {
//     console.error('DB connection error:', err);
// });

// // API routes
// app.post('/api/projects', upload.fields([
//     { name: 'f_img', maxCount: 1 },
//     { name: 'f_img2', maxCount: 1 },
//     { name: 'f_img3', maxCount: 1 },
//     { name: 'f_img4', maxCount: 1 }
// ]), projectController.addProjects);

// app.get('/api/projects', projectController.getProjects);

// // Start the server
// const PORT = 5001;
// app.listen(PORT, () => {
//     console.log(`Backend Running At Port ${PORT}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const projectController = require('./controller/projectController');

const app = express();

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// File filter to accept only JPEG and PNG
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type, only JPEG and PNG are allowed!'), false);
    }
};

const upload = multer({ storage, fileFilter });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

// MongoDB connection
const dbURL = 'mongodb://127.0.0.1:27017/form';

mongoose.connect(dbURL)
    .then(() => console.log('DB Connected.'))
    .catch(err => {
        console.error('DB connection error:', err);
        process.exit(1); // Exit the process with failure
    });

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err.message);
});

// API routes
app.post('/api/projects', upload.fields([
    { name: 'f_img', maxCount: 1 },
    { name: 'f_img2', maxCount: 1 },
    { name: 'f_img3', maxCount: 1 },
    { name: 'f_img4', maxCount: 1 }
]), projectController.addProjects);

app.get('/api/projects', projectController.getProjects);

// Error handling middleware for multer
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError || err.message === 'Invalid file type, only JPEG and PNG are allowed!') {
        return res.status(400).json({ error: err.message });
    }
    next(err);
});

// Start the server
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Backend Running At Port ${PORT}`);
});
