const mongoose = require('mongoose');

const mongoAtlasUri =
    "";
function connect() {
    try {
        mongoose.connect(
            mongoAtlasUri,
            { useNewUrlParser: true, useUnifiedTopology: true },
            () => console.log(" Mongoose is connected")
        );
    }
    catch (e) {
        console.log("could not connect",e);
    }
}

module.exports = connect;





