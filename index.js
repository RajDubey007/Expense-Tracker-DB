const express = require("express");
const app = express();
const dotenv = require("dotenv")
const path = require("path");
const Path = path.join(__dirname,"/views");
const PORT = process.env.PORT || 5002;
const bodyParser = require("body-parser");
const routes = require("./routes/index_routes.js");
const db = require("./db/expense_db.js");

dotenv.config();

app.set("view engine", "ejs");
app.set("views", Path);

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(express.static(Path));
app.use("/", routes);

app.listen(PORT, (err) => {
    if(!err){
        console.log(`Server is running on port http://localhost:${PORT}`);
    }
})
