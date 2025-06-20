import { NextResponse } from "next/server";
import { base } from "@/lib/airtable";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, phone, message } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    const record = await base(process.env.AIRTABLE_TABLE_NAME).create([
      {
        fields: {
          Name: fullName,
          Email: email,
          Phone: phone,
          Message: message,
        },
      },
    ]);

    return NextResponse.json({ success: true, record });
  } catch (error) {
    console.error("Airtable Error:", error);
    return NextResponse.json({ success: false, message: error.message || "Unknown error" }, { status: 500 });
  }
}
