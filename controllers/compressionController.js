const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

const tempDir = path.join(__dirname, '../temp');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

const uploadAndCompress = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No video file uploaded.' });
    }

    const compressedFilename = req.file.originalname.replace(/\.[^/.]+$/, '_compressed.mp4');
    const tempFilePath = path.join(tempDir, compressedFilename);

    await new Promise((resolve, reject) => {
      ffmpeg()
        .input(req.file.buffer)
        .videoCodec('libx264')
        .videoBitrate('800k')  // Adjusting this as needed for quality vs. size tradeoff
        .size('640x360')       // Adjusting resolution as needed
        .autopad()
        .on('end', resolve)
        .on('error', reject)
        .save(tempFilePath);
    });

    return res.status(200).json({ message: 'Video uploaded and compressed successfully.' });
  } catch (error) {
    console.error('Error during upload and compression:', error);
    return res.status(500).json({ error: 'An error occurred during upload and compression.' });
  }
};

const downloadCompressedVideo = async (req, res) => {
  try {
    const filename = req.params.filename;

    // Get the full path to the compressed video file
    const compressedFilePath = path.join(tempDir, filename);

    // Stream the compressed video for download
    res.download(compressedFilePath);

  } catch (error) {
    console.error('Error during download:', error);
    return res.status(500).json({ error: 'An error occurred during download.' });
  }
};

module.exports = {
  uploadAndCompress,
  downloadCompressedVideo
};
