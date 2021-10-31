const express = require('express');
const app = express();
app.use('/', require('./routes/upload')); // add the upload route
app.use('/', require('./routes/download'));

// start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});



