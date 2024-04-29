const app = require('./app.js');

const databaseconnect = require('./src/config/databaseConfig.js');

const PORT = process.env.PORT || 5000;

app.listen(PORT , async()=>{
   await databaseconnect();
    console.log(`server is runing http:localhost:${PORT}`.bgCyan.white);
});