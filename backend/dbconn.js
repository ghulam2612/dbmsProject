// const mysql=require('mysql');
import mysql from 'mysql';
// const express=require('express');
// const app=express();
//  const port=3000;
// app.get("/",(req,res)=>{
// res.send("hello");
// });
// app.listen(port,(req,res)=>{
//     console.log("server");
// })

const conn=mysql.createConnection({
    host:'localhost',
    user:'ghulam',
    password:'ghulam2612@',
    database:'userAuth'
});
conn.connect(function(err){
    if(err) throw err;
    console.log("connected");
})
