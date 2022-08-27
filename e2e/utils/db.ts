import mysql from "mysql2/promise";
import { readFileSync } from "fs";

export async function loadSqlData(filename: string): Promise<void> {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "restaurant-management",
    multipleStatements: true,
  });
  try {
    await connection.connect();
    const fileStr = readFileSync(filename).toString();
    await connection.query(fileStr);
    await connection.commit();
  } finally {
    await connection.end();
  }
}
