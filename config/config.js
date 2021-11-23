const path = require('path');

const config = {
    rootPath: path.normalize(_dirname + '/..'),
    port: 3000,
    dbURL: "mongodb+srv://ikamel:ikamelmongodb@cluster0.pz1tg.mongodb.net/Cluster0?retryWrites=true&w=majority"
};

module.exports = config