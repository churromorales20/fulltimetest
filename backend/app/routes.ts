import express = require('express');// Create a new express application instance
export const userRoutes = express.Router();
import * as sqlite from 'sqlite3';
const sqlite3 = sqlite.verbose();
let db: sqlite.Database = new sqlite3.Database('testdb.sqlite3', () => {
    console.log('Connected to the TESDB database.');
});
userRoutes.post('/add', (req, response) => {
    db.run("CREATE TABLE IF NOT EXISTS users (name TEXT, uname TEXT, email TEXT,role TEXT,avatar TEXT)");
    db.run("INSERT INTO users (name, uname, email, role) " +
    "VALUES ('" + req.body.name + "','" + req.body.uname + "','" + req.body.email + "','" + req.body.role + "')");
    response.json({result:'success'});
});
userRoutes.get('/', (req, response) => {
    let userlist : {name: string, uname:string, email:string, role:string} [];
        
    db.run("CREATE TABLE IF NOT EXISTS users (name TEXT, uname TEXT, email TEXT,role TEXT,avatar TEXT)");
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
            throw err;
        }
        
        for(let i = 0;i<rows.length;i++) { 
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