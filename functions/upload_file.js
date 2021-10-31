const ipfsClient = require('ipfs-api')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })



async function saveToIpfsWithFilename(file, file_name, res) {
    let ipfsId;
    const fileDetails = {
        path: file_name,
        content: file
    }

    const options = {
        wrapWithDirectory: true,
        progress: (prog) => console.log(`received: ${prog}`)
    }
    const response = await ipfs.add(fileDetails, options);
    console.log(response);
    ipfsId = response[0].hash
    res.send(ipfsId)


}


module.exports = {
    saveToIpfsWithFilename: saveToIpfsWithFilename
};
