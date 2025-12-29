const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://Owen:6NxAfaczdNYWPKNu@owen.wkad1hh.mongodb.net/Reja"
// mongodb+srv://user:password@cluster.mongodb.net/database?appName=Reja //16:26dan davom et

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true,}, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else{
        console.log("MngoDB connection succeed")

        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function(){
            console.log(`The server is runing seccuessfully on port: ${PORT}, http://localhost:${PORT}`);
        });
    }
});

// mongodb+srv://Owen:6NxAfaczdNYWPKNu@owen.wkad1hh.mongodb.net/