import pool from "@/lib/db";

export async function POST(request) {
  try {
    const { name, email, phone, message, roomName, roomPrice } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ message: "Missing required fields" }, { status: 400 });
    }

    const query = `
      INSERT INTO leads (name, email, phone, message, room_name, room_price)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id;
    `;
    const values = [name, email, phone, message, roomName, roomPrice];

    const result = await pool.query(query, values);

    return Response.json(
      { id: result.rows[0].id, message: "Lead saved successfully in postgressSql!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Postgres error:", error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
