const express = require("express")
const app = express()
const stuRoutes=require('./routes/studentRoute');
const errorHandler=require('./errorHandler');

const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use('/', stuRoutes);
app.use(errorHandler)

//creating a server
const port = 4000
app.listen(port, () => {
  console.log(`first app listening on port ${port}`)
})