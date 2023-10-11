const config = require('./config.js');
const mysql = require('mysql2');
const Sequelize = require('sequelize')
const db = {};

// create db if it doesn't already exist
const { dbhost, dbport, dbuser, dbpassword,database,dbdialect } = config.database;
   
const pool =  mysql.createPool({ 
   host:dbhost, 
   port:dbport,
   user: dbuser, password:dbpassword });
  
pool.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

const sequelize = new Sequelize(database, dbuser, dbpassword, { dialect: dbdialect,
    pool: {
        max: parseInt(config.pool.max),
        min: parseInt(config.pool.min),
        acquire: config.pool.acquire,
        idle: config.pool.idle
     
      } }
     
    );

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    
   // db.Employee = require('../models/employee')(sequelize, Sequelize);
    db.Student = require('../models/student.js')(sequelize, Sequelize)
    sequelize.sync();
    
module.exports=db;