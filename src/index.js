const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index"); 

const setupAndStartServer = async () => {

    // create the express object
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);
    app.get("/hello", (req, res) => {
        res.send("Hello")
    });

    app.listen(PORT, () => {
        console.log(`server running on PORT: ${PORT}`);
    });
}

setupAndStartServer();