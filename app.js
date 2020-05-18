/** require dependencies */
const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const path = require('path')

const app = express()

let port = process.env.PORT || 5000

/** set up middlewares */
app.use(cors())
app.use(bodyParser.json({limit: '50mb'}))
app.use(helmet())

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});