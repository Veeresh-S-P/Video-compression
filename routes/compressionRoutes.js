const express = require('express');
const compressionController = require('../controllers/compressionController');


const router = express.Router();

// Upload and compress video
router.post('/upload', compressionController.uploadAndCompress);

// Download compressed video
router.get('/download/:filename', compressionController.downloadCompressedVideo);

module.exports = router;
