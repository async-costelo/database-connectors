// Initialize mongoose module
const mongoose = require('mongoose')();
// Initialize connection string
const uri = process.env.CONNECTION_STRING; // 'mongodb://username:password@host:port/database?options...'

// Simple options to use for connection, https://mongoosejs.com/docs/connections.html#options
const options = {
    bufferCommands: 0,
    bufferMaxEntries: 0,
    reconnectTries: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(uri, options).then(
    (res) => {
        /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
        console.info("Ready!", res)
    },
    err => {
        /** handle initial connection error */
        console.error(err)
    }
);