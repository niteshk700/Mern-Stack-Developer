import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var permission = false;

app.use(bodyParser.urlencoded({ extended: true }));

function secret(req, res, next) {
    var password = req.body["password"];
    console.log(req.body["password"]);
    console.log(password);
    if (password === "Great work") {
        permission = true;
    }
    next();
}
app.use(secret);




app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');

})

app.post('/check', (req, res) => {
    if(permission){
        res.sendFile(__dirname + '/public/secret.html');
    }else{
        res.sendFile(__dirname+ '/public/index.html');
    }

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});