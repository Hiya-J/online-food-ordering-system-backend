const express = require('express')
const mongoose = require('mongoose');


const app = express();
const hostname = "localhost";
const port = 9000;

const Route = require("./src/routes/router");

// app.use(cors());
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

mongoose.connect("mongodb://127.0.0.1:27017/restaurantdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Successfully connected to the database"))
    .catch((err) => {
        console.log("Could not connect to the database. Exiting now...", err);
        process.exit();
    });

// mongoose.set('debug', true);

app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.use("/", Route);
// app.use("/admin", Admin);
// app.use("/ambassador-program", AmbassadorProgram);
// app.use("/post", Post);
// app.use("/post-report", PostReport);
// app.use("/s3", S3);
// app.use("/store", LiquorStore);

app.listen(port, () => {
    console.log(`Listening on port ${hostname}:${port}!`)
});
