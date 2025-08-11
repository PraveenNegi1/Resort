import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, message, roomName, roomPrice } =
      await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `HillNest Stays <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Room Booking Inquiry - ${roomName || "Unknown Room"}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Room: ${roomName || "Not specified"}
        Price: ₹${roomPrice || "Not specified"} /day
        Message: ${message}
      `,
      html: `
        <h2>New Room Booking Inquiry- ${roomName || "Unknown Room"}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Room:</strong> ${roomName || "Not specified"}</p>
        <p><strong>Price:</strong> ₹${roomPrice || "Not specified"} /day</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
