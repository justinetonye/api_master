const mongoose = require ('mongoose');

mongoose.connect(
   "mongodb://127.0.0.1:27017/apibd",
   //{ useNewUrlParser = true, useUnifiedTopology = true},
   (err) => {
    if (!err) console.log("Mongodb connected");
    else console.log("connection error :" +err);
   }
 
) 