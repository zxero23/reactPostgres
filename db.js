const Pool=require("pg").Pool;


//conexion a postgres
const pool = new Pool({
    user:"postgres",
    password:"admin",
    host:"localhost",
    port:"5432",
    database:"safiDB",

});

module.exports=pool;