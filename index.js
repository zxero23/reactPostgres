const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//MIDDLEWARES
app.use(cors());
app.use(express.json());

//ROUTES
app.get("/movements", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM movimientos limit 100");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/bank-accounts", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM cuentas_bancarias where estado=true");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/functions", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM funciones");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/movements/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM movimientos WHERE id = $1", [id]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


app.listen(5000, () => {
  console.log('Server is listening in port 5000.');
});