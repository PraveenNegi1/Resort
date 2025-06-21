import base from "@/lib/airtable";

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, message } = body;

    if (!fullName || !email || !message) {
      return Response.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    console.log("Sending to Airtable:", { fullName, email, phone, message });

    const data = await base("Contacts").create([
      {
        fields: {
          Name: fullName,
          Email: email,
          PhoneNumber: Number(phone),
          Message: message,
        },
      },
    ]);

    console.log(data);

    return Response.json({ message: "Data sent to Airtable" }, { status: 200 });
  } catch (error) {
    console.error("Airtable error:", error);
    return Response.json(
      { message: "Failed to send to Airtable", error: error.message },
      { status: 500 }
    );
  }
}
