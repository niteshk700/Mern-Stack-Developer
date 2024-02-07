import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

function logger(req,res,next){
  console.log(`Req source: ${req.method}`);
  console.log(`Req Url: ${req.url}`);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
