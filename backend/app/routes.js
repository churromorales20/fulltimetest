"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express"); // Create a new express application instance
exports.userRoutes = express.Router();
var sqlite = __importStar(require("sqlite3"));
var sqlite3 = sqlite.verbose();
var db = new sqlite3.Database('testdb.sqlite3', function () {
    console.log('Connected to the TESDB database.');
});
exports.userRoutes.post('/add', function (req, response) {
    db.run("CREATE TABLE IF NOT EXISTS users (name TEXT, uname TEXT, email TEXT,role TEXT,avatar TEXT)");
    db.run("INSERT INTO users (name, uname, email, role) " +
        "VALUES ('" + req.body.name + "','" + req.body.uname + "','" + req.body.email + "','" + req.body.role + "')");
    response.json({ result: 'success' });
});
exports.userRoutes.get('/', function (req, response) {
    var userlist;
    db.run("CREATE TABLE IF NOT EXISTS users (name TEXT, uname TEXT, email TEXT,role TEXT,avatar TEXT)");
    db.all('SELECT * FROM users', [], function (err, rows) {
        if (err) {
            throw err;
        }
        for (var i = 0; i < rows.length; i++) {
            /*userlist[i] = {
                name : rows[i].name,
                uname: rows[i].uname,
                email: rows[i].email,
                role: rows[i].role
            }*/
            console.log(rows[i].uname);
        }
    });
});
