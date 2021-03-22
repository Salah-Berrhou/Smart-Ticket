const mongoose = require("mongoose")
const connectDb = () => {
    console.log("Connected")
    return mongoose.connect("mongodb+srv://Salahberr:ensaj1593572684@cluster0.kti9f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",  { useNewUrlParser: true, useUnifiedTopology: true });
};

exports.connectDb = connectDb