const mongoose = require("mongoose")

async function connectDB() {

    try {
      await   mongoose.connect()
        
         
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = connectDB;






