const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/expense_db")
.then(() => console.log("expense_db Connected.....!"))
.catch(() => {
    console.log("expense_db Not Connected.....!");
});

