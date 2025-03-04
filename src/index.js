const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index"); 

const {Airplane} = require("./models/index");

const db = require("./models/index");

const setupAndStartServer = async () => {

    // create the express object
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);
    app.get("/hello", (req, res) => {
        res.send("Hello")
    });

    app.listen(PORT, async () => {
        console.log(`server running on PORT: ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter: true}) 
        }   
       /* await Airplane.create({
              modelNumber: ' Embraer 175',
              capacity: 88
        });
        */
       
    });
}

setupAndStartServer();