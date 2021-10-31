const express = require('express');
const Router = express.Router();
const { downloadFile } = require('../functions/download_file')

// add body parser for get requests
Router.use(express.json());

// create a download route and return the file link
Router.get('/download', async (req, res) => {
    const hash = req.query.hash;
    if (!hash) {
        res.status(400).send('Missing hash');
        return;
    }


    const file_name = await downloadFile(hash);
    const link = `https://infura-ipfs.io/ipfs/${hash}?filename=${file_name}`
    res.send(link);

});

// export the router
module.exports = Router;
