const QRCode = require('qrcode');
const opts = {
    errorCorrectionLevel: 'H',
    type: 'image/webp',
    quality: 0.92,
    margin: 1,
    color: {
        dark: "#000",
        light: "#fff"
    }
}

const generadorCodQR = async(link) => {
    if (link === undefined || link === '') {
        return null;
    } else {
        try {
            let result = await QRCode.toDataURL(link, opts);
            return result;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = generadorCodQR;