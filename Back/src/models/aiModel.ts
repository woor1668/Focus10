import pool from "@config/db";

export const createUser = async (name: string, id: string, email: string, pw: string): Promise<void> => {
    const conn = await pool.getConnection();
    await conn.query("INSERT INTO USERS_API (NAME, ID, EMAIL, PASSWORD) values (?, ?, ?, SHA2(?, 256))", [name, id, email, pw]);
    conn.release();
  };