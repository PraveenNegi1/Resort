// app/policy/page.jsx

export default function PolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0e1732] mb-12">
          Resort Policies
        </h1>

        <div className="space-y-10">
          {/* Cancellation Policy */}
          <section className="bg-white border border-slate-200 rounded-2xl shadow-md p-6 md:p-8 transition hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-[#0e1732] mb-3">
               Cancellation Policy
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Cancellations made at least{" "}
              <strong>7 days before check-in</strong> are eligible for a full
              refund. Cancellations made within 7 days of check-in will be
              non-refundable. In case of emergencies, please contact our support
              team.
            </p>
          </section>

          {/* House Rules */}
          <section className="bg-white border border-slate-200 rounded-2xl shadow-md p-6 md:p-8 transition hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-[#0e1732] mb-3">
               House Rules
            </h2>
            <ul className="list-disc pl-5 text-slate-700 space-y-2">
              <li>
                Maintain a peaceful environment. No loud music after 10 PM.
              </li>
              <li>Smoking is strictly prohibited inside the rooms.</li>
              <li>
                Guests are expected to keep the property clean and respect
                resort belongings.
              </li>
              <li>
                Outside guests are not allowed in rooms without prior approval.
              </li>
              <li>
                Pets are welcome, but please inform us in advance and follow pet
                policies.
              </li>
            </ul>
          </section>

          {/* Privacy Policy */}
          <section className="bg-white border border-slate-200 rounded-2xl shadow-md p-6 md:p-8 transition hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-[#0e1732] mb-3">
               Privacy Policy
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Your privacy is our priority. Any personal information you
              provide—such as your name, contact details, and booking
              preferences—is used only for reservation and communication
              purposes. We do not sell, rent, or share your data with third
              parties.
            </p>
          </section>
        </div>

        <div className="text-center mt-16">
          <p className="text-sm text-slate-500">
            For any questions, please{" "}
            <a
              href="/contact"
              className="text-[#0e1732] font-medium hover:underline"
            >
              contact our support team
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
