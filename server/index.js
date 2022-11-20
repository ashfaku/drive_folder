const dirTree = require("directory-tree");
const tree = dirTree("./PDFs");
const express = require('express')
const app = express()
const port = process.env.port || 5001;

app.get('/express_backend', (req, res) => { 
    res.send({ files: tree });
});
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});