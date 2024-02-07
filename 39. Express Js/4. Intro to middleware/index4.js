import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var data = "";


app.use(bodyParser.urlencoded({ extended: true }));

function submit(req, res, next) {
  console.log(req.body);
  data = req.body["pet"] + req.body["street"];
  next();
}
app.use(submit);

app.get('/', (req, res) => {
  data = (req.boa)
  res.sendFile(__dirname + "/public/index.html");
});

app.post('/submit', (req, res) => {

  res.send(`'<h2>This is how it works</h2><br><h2>r u ready for fun...</h2> ${data}'`);
  console.log("working");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
