// ------------------------------------
// required packages
var mysql = require("mysql");
var express = require("express");
// ------------------------------------
// initializing app variable to use express
var app = express();
// ------------------------------------
// establishing port
var PORT = process.env.PORT || 3000;
// ------------------------------------
// database connection
var connection;