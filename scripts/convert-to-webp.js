const fs = require('node:fs')
const path = require('node:path')
const webp = require('webp-converter')

const dirToCovert = `${__dirname}/../src/assets/gallery/`
fs.readdirSync(dirToCovert).map(async (fileName) => {
    const fileToConvert = fs.statSync(dirToCovert + fileName)
    if (fileToConvert.isFile() && getFileExtension(fileName) == 'png') {
        let webpFilename =
            dirToCovert + fileName.replace('.png', '.webp').replace('.jpg', '.webp').replace('.jpeg', '.webp')

        // catch errors
        let convertResult = await convertImageToWebp(dirToCovert + fileName, webpFilename)
    }
})

async function convertImageToWebp(imagePath, destinationPath) {
    // convert
    let webpGenResult = webp.cwebp(
        imagePath,
        destinationPath,
        '-q 80'
        // (logging = "-v")
    )

    webpGenResult.then((response) => {
        if (typeof response == 'string' && response == '') {
            fs.unlink(imagePath, (err) => {
                if (err) {
                    throw err
                } else {
                    //console.log(`> Image converted: ${newWebpImage}`);
                    console.log(`> Image converted to webp: ${destinationPath}`)
                    return true
                }
            })
        } else {
            console.log(response)
            console.log(`${destinationPath}`)
            return false
        }
    })
}
function getFileExtension(fileOrUrl) {
    let fileExtension = path.extname(fileOrUrl)
    fileExtension = fileExtension.replace('.', '')
    if (fileExtension.includes('?')) {
        fileExtension = fileExtension.split('?')[0]
    }
    return fileExtension
}
