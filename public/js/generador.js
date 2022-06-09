const QRCode = require('qrcode');
const generadorCodQR = async(link) => {
    try {
        let result = await QRCode.toDataURL(link);
        return result;
        console.log(result);
    } catch (err) {
        console.error(err);
    }
}

module.exports = generadorCodQR;