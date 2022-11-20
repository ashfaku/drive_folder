const dirTree = require("directory-tree");
const express = require('express')
const app = express()
const port = process.env.port || 5001;

app.get('/express_backend', (req, res) => { 
    res.send({ files: dirTree("./PDFs") });
});
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});