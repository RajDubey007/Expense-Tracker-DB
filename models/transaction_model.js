const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
    
    type: { 
        type: String,
        required: true 
    },
    category: { 
        type: String, 
        required: true 
    },
    description:{
        type: String
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    amount: { 
        type: Number, 
        required: true 
    }
      
})

const Modeles = mongoose.model("Modeles", transactionSchema);

module.exports = Modeles;