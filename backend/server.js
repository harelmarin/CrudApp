const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud-app'
});

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM student';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
        return result;
    });
    });

    
app.post('/create', (req, res) => {
    const sql = 'INSERT INTO student (`name`, `mail`) VALUES (?, ?)';
    const values = [req.body.name, req.body.mail];
    db.query(sql, values, (err, result) => {
        if (err) res.json({ message: 'An error occurred' });
        res.json({ message: 'Student added successfully' });
    });
});

app.listen(8001, () => {
  console.log('Server is running on port 8001');
});