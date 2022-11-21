const dirTree = require("directory-tree");
const express = require('express')
const app = express()
const port = process.env.port || 5001;
console.log(dirTree("./../client/public/PDFs"));
app.get('/express_backend', (req, res) => { 
    res.send({ files: dirTree("./../client/public/PDFs") });
});
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});