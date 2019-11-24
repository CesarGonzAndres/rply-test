const express = require("express"),
    bodyParser = require("body-parser")
const cors = require("cors");

const app = express();

// const allowedOrigins = ["https://master.dby3j7novssz9.amplifyapp.com", "http://localhost:3000"];
app.use(cors({
    origin: function(origin, callback){
        if(!origin) return callback(null, true);
       // if(allowedOrigins.indexOf(origin) === -1){
         //   const msg = "The CORS policy for this site does not " +
           //     "allow access from the specified Origin.";
          //  return callback(new Error(msg), false);
      //  }
        return callback(null, true);
    },
    credentials: false,
}));

const api = require("./routes/api");

var redis = require("redis");
var client = redis.createClient();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", api);

global.navigator = () => null;

client.on("connect", function() {
});

client.on("error", function (err) {
    console.log("Something went wrong " + err);
});

app.listen(3001, () => {
    console.log("Listening to port 3001");
    console.log("Server is running mode: development\n");
});
