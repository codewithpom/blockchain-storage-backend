const express = require('express');
const app = express();
app.use('/', require('./routes/upload')); // add the upload route
const PORT = process.env.PORT || 8080;

// start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});



