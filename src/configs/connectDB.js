import mysql from 'mysql2/promise';


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbsic',
    // password: 'password'
})
console.log("Creating connection pool...");


export default pool;