const express = require("express");
const app = express();
const mongoose = require("mongoose");

const http = require('http').createServer(app);
const io = require('socket.io')(http);



// To Read JSON, from Requestss

// To Accept JSON
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))



module.exports = {app,express,mongoose,bodyParser,io,http};