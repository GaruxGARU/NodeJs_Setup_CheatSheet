
import connection from "./database.js"

const controller={

    createUser: (req, res) => {
        const { name, age } = req.body;
        const sql = 'INSERT INTO users (name, age) VALUES (?, ?)';
        connection.query(sql, [name, age], (err, results) => {
          if (err) return res.status(500).send(err.message);
          res.status(201).send(`User added with ID: ${results.insertId}`);
        });
      },
      getUsers: (req, res) => {
        connection.query('SELECT * FROM users', (err, results) => {
          if (err) return res.status(500).send(err.message);
          res.status(200).json(results);
        });
      },
      updateUser: (req, res) => {
        const { name, age } = req.body;
        const sql = 'UPDATE users SET name = ?, age = ? WHERE id = ?';
        connection.query(sql, [name, age, req.params.id], (err, result) => {
          if (err) return res.status(500).send(err.message);
          res.send('User updated successfully!');
        });
      },
      deleteUser:(req, res) => {
        const sql = 'DELETE FROM users WHERE id = ?';
        connection.query(sql, [req.params.id], (err, result) => {
          if (err) return res.status(500).send(err.message);
          res.send('User deleted successfully!');
        });
      }
};

export default controller;
