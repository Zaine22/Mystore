const mysql = require("mysql2/promise"); // need to install mysql

const connection = mysql.createPool({
  //using pool create better memory management
  host: "127.0.0.1",
  user: "root",

  database: "MyStore",
});

export async function query(sql: any, values: any) {
  //this function will be calles from other files, see exports usage
  const [rows, fields] = await connection.execute(sql, values); //await is sychronization of functions/events
  return rows;
}
