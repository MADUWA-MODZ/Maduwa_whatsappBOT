const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID, || "VjV2XQaK#VcpDb5Zs7XYH80h0yori3gvLPsqQp2NUwGm1wPNg_tw",
ALIVE_IMG: process.env.ALIVE_IMG, || "https://i.ibb.co/jf0Vp9v/MADUWA-MODS1.jpg",
ALIVE_MSG: process.envALIVE_MSG, || "Hello, I am YourName i am alive now!",
};
