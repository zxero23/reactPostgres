const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body


//ROUTES

app.get("/movements", async (req, res) => {
    try {
      const allTodos = await pool.query("SELECT * FROM movimientos limit 100");
      res.json(allTodos.rows);
      console.log(allTodos.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

  app.get("/bankAccounts", async (req, res) => {
    try {
      const allTodos = await pool.query("SELECT * FROM cuentas_bancarias where estado=true");
      res.json(allTodos.rows);
      console.log(allTodos.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

//get a todo

app.get("/movements/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await pool.query("SELECT * FROM movimientos WHERE id = $1", [
        id
      ]);
  
      res.json(todo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  

app.listen(5000,()=>{
    console.log('el servidor esta en el puerto 5000');
});