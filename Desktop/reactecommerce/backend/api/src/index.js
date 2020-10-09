const express = require("express")
const bodyParser = require("body-parser")
const routes = require("./routes/routes.js")
const app = express()

var cors = require('cors')


const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

app.use(routes)
 


        app.listen(port, () => {
            console.log("connecté au serveur")
        });
