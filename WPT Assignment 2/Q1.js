
const express = require('express');    // to import express
const app = express();  // app variable name 
const mysql = require('mysql2');   // to connect db here  mysql2 is current varsion 
const connection= mysql.createConnection({
    host: 'localhost',
    user: 'yogesh',
    password: 'cdac', // password of your db
    database: 'navimumbai', //current db name
    port : 3306

});
connection.query("select 10 from dual",(err ,res)=>{
    if(err){
        console.log("error occur");
        
    }
    else{
        console.log(res); 
    }
})