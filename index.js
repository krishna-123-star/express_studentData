const express = require("express")
const app = express()
const empRoutes=require('./routes/studentRoute');
const errorHandler=require('./errorHandler');

const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use('/', empRoutes);
app.use(errorHandler)

//creating a server
const port = 3000
app.listen(port, () => {
  console.log(`first app listening on port ${port}`)
})