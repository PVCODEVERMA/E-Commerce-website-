const mongoose = require('mongoose');

const MONGOOSE_URL = process.env.MONGOOSE_URL || "mongodb://127.0.0.1:27017/mydata";
const databaseconnect = async () =>{
  await  mongoose.connect(MONGOOSE_URL)
    .then((conn) => 
    console.log(`connect to DB:${conn.connection.host}`.bgBlue.white))
    .catch((conn) =>
    console.log(`connect to error`.bgMagenta.red))
}

module.exports =databaseconnect;