const config=require('./config/config')
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');
const  sequelize = db.sequelize;  
const app = express()

// // Define your routes and middleware here


// console.log(`Config ${config}`)
// app.listen(config.port, ()=>{
//     console.log(`server is listening  on ${config.port}`);
// });

// module.exports = app;



app.use(bodyParser.json());
app.use(cors());
const empRoute=require('./routes/empRoutes');
const studetRute = require('./routes/studentRoute')
app.use('/employee',empRoute); 
app.use('/student', studetRute)

sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

app.listen(config.port, ()=>{
    console.log(`server is listening  on ${config.port}`);
});
 
module.exports = app;