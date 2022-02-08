const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    Name: {
      type: String,
      required: true,
      trim: true,
      
    },
    Price: {
        type: Number,
        required: true,
        
        
      },
      Qty: {
        type: Number,
        required: true
        
        
      }
  
  });
  
  const Product = mongoose.model("Product", productSchema);
  
  module.exports = Product