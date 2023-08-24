# Video-compression

The Video Compression App is a Node.js-based RESTful API that enables users to upload video files, compress them while maintaining acceptable quality, and optionally download the compressed videos. The app utilizes the fluent-ffmpeg library for video compression and can be employed as a standalone service for video compression needs.

Getting Started
Prerequisites
=>Node.js and npm: Ensure that you have Node.js and npm installed. You can download them from the official Node.js website.


Installation
=>Clone the Repository:
git clone https://github.com/your-username/video-compression.git
cd video-compression


Install Dependencies:
=>npm install

Start the Application:
=>npm start

The app will start running on the specified port


Usage
=>Uploading a Video for Compression: Utilize the /api/upload endpoint to upload a video file for compression.

=>Downloading a Compressed Video: Utilize the /api/download/filename endpoint to download a compressed video file by providing the filename as a parameter.

License
This project is licensed under the MIT License