const express = require('express');
const compressionRoutes = require('./routes/compressionRoutes');
const app = express();



app.use('/api', compressionRoutes);

const PORT = process.env.PORT || 1111;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
