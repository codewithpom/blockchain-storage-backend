const ipfsClient = require('ipfs-api')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

// create a function that takes in a file hash and returns the first file name in the IPFS with await
async function downloadFile(hash) {
    // get the file from IPFS
    const file = await ipfs.get(hash)
    // return the file name
    console.log(file[0].path)
    return file[0].path
}

// export the function with the same name as the function name as an object
module.exports = {
    downloadFile: downloadFile
}



