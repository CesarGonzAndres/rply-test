const express = require("express"),
    bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: function(origin, callback){
        if(!origin) return callback(null, true);
        return callback(null, true);
    },
    credentials: false,
}));

const api = require("./routes/api");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", api);

global.navigator = () => null;

app.listen(3001, () => {
    console.log("Listening to port 3001");
});
