import pool from "@/lib/db";

export async function POST(request) {
  try {
    const { fullName, email, phone, message } = await request.json();

    if (!fullName || !email || !message) {
      return Response.json({ message: "Missing required fields" }, { status: 400 });
    }

    const query = `
      INSERT INTO contacts (full_name, email, phone, message)
      VALUES ($1, $2, $3, $4)
      RETURNING id;
    `;
    const values = [fullName, email, phone, message];

    const result = await pool.query(query, values);

    return Response.json(
      { id: result.rows[0].id, message: "Contact saved successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Postgres error:", error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
