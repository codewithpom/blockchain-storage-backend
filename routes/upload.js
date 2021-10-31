const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser')
const multer = require('multer');
const upload = multer();
const { saveToIpfsWithFilename } = require('../functions/upload_file');


// add cors support
router.use(cors());
router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


// upload file
router.post('/upload', upload.array('file'), async (req, res) => {
    const file_buffer = req.files[0].buffer;
    const file_name = req.files[0].originalname;
    saveToIpfsWithFilename(file_buffer, file_name, res);


});


module.exports = router;
