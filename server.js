const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;

const mongoose = require('mongoose');
const Data = require("./data");

const url = 'mongodb://'+encodeURIComponent("heroku_mongodb1985")+':'+encodeURIComponent("m0ng0L0gin_2_TH3_DataB@s3!")+'@ds045664.mlab.com:45664/heroku_4w2sh82g';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connects our back end code with the database
mongoose.connect(
  url,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get("/api/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});


app.post('/api/pullItems', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// append /api for our http requests
app.use("/api", router);

app.listen(port, () => console.log(`Listening on port ${port}`));