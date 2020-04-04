const express = require("express");
const app = express();
const mongoose = require("mongoose");

// To Read JSON, from Requestss

// To Accept JSON
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))



module.exports = {app,express,mongoose};