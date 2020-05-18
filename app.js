
/** require dependencies */
const express = require("express")

const app = express()

/** important */
let port = process.env.PORT || 5000

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});