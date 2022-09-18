import mysql from "mysql2/promise";
import { readFileSync } from "fs";

export async function loadSqlData(filename: string): Promise<void> {
  const fileStr = readFileSync(filename).toString();
  await sqlQuery(fileStr);
}

export async function sqlQuery(query: string): Promise<void> {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "restaurant-management",
    multipleStatements: true,
  });
  try {
    await connection.connect();
    await connection.query(query);
    await connection.commit();
  } finally {
    await connection.end();
  }
}
