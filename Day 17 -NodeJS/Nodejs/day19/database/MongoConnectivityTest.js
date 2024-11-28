let mongodbmodule = require('mongodb')
let mongoc = mongodbmodule.MongoClient;
mongoc.connect("mongodb://localhost:27017")
    .then((connobj) => console.log("Connection Successful"))
    .catch((connerr) => console.log("error", connerr))
    .finally(() => {
        console.log("Finally Connection");
    })