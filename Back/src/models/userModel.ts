import pool from "../config/db";

export interface User {
  id?: number;
  email: string;
  password: string;
}

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const conn = await pool.getConnection();
  const rows = await conn.query("SELECT * FROM users WHERE email = ?", [email]);
  conn.release();
  return rows.length ? rows[0] : null;
};

export const createUser = async (email: string, hashedPassword: string): Promise<void> => {
  const conn = await pool.getConnection();
  await conn.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, hashedPassword]);
  conn.release();
};
