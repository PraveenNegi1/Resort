

import pool from "@/lib/db";

export async function POST(request) {
  try {
    const { fullName, email, phone, message } = await request.json();

    const result = await pool.query(
      `INSERT INTO contacts (full_name, email, phone, message) VALUES ($1, $2, $3, $4) RETURNING id`,
      [fullName, email, phone, message]
    );

    return Response.json({ id: result.rows[0].id, message: "Contact saved!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
