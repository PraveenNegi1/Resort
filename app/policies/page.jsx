export default function PolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#957C3D]/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#0e1732]/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative max-w-4xl mx-auto mt-20 font-serif">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl md:text-5xl   font-bold text-[#0e1732] mb-4 sm:mb-6 leading-tight">
            Resort Policies
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#957C3D] to-[#B8A055] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Please review our policies to ensure a pleasant stay for all guests
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          <section className="group bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 lg:p-10 transform hover:-translate-y-2 hover:scale-[1.02]">
            <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"></div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0e1732] group-hover:text-[#957C3D] transition-colors duration-300 leading-tight">
                  Cancellation Policy
                </h2>
                <div className="w-full h-px bg-gradient-to-r from-[#957C3D]/30 to-transparent mt-2 sm:mt-3"></div>
              </div>
            </div>
            <div className="pl-16 sm:pl-20 lg:pl-22">
              <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                Cancellations made at least{" "}
                <strong className="text-[#0e1732] bg-[#957C3D]/10 px-2 py-1 rounded-md">
                  7 days before check-in
                </strong>{" "}
                are eligible for a full refund. Cancellations made within 7 days
                of check-in will be non-refundable. In case of emergencies,
                please contact our support team.
              </p>
            </div>
          </section>

          <section className="group bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 lg:p-10 transform hover:-translate-y-2 hover:scale-[1.02]">
            <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"></div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0e1732] group-hover:text-[#957C3D] transition-colors duration-300 leading-tight">
                  House Rules
                </h2>
                <div className="w-full h-px bg-gradient-to-r from-[#957C3D]/30 to-transparent mt-2 sm:mt-3"></div>
              </div>
            </div>
            <div className="pl-16 sm:pl-20 lg:pl-22">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-[#957C3D] to-[#B8A055] rounded-full mt-2 sm:mt-3"></div>
                  <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                    Maintain a peaceful environment. No loud music after 11 PM.
                  </p>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-[#957C3D] to-[#B8A055] rounded-full mt-2 sm:mt-3"></div>
                  <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                    Smoking is strictly prohibited inside the rooms.
                  </p>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-[#957C3D] to-[#B8A055] rounded-full mt-2 sm:mt-3"></div>
                  <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                    Guests are expected to keep the property clean and respect
                    resort belongings.
                  </p>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-[#957C3D] to-[#B8A055] rounded-full mt-2 sm:mt-3"></div>
                  <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                    Outside guests are not allowed in rooms without prior
                    approval.
                  </p>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-[#957C3D] to-[#B8A055] rounded-full mt-2 sm:mt-3"></div>
                  <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                    Pets are welcome, but please inform us in advance and follow
                    pet policies.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="group bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 lg:p-10 transform hover:-translate-y-2 hover:scale-[1.02]">
            <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"></div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0e1732] group-hover:text-[#957C3D] transition-colors duration-300 leading-tight">
                  Privacy Policy
                </h2>
                <div className="w-full h-px bg-gradient-to-r from-[#957C3D]/30 to-transparent mt-2 sm:mt-3"></div>
              </div>
            </div>
            <div className="pl-16 sm:pl-20 lg:pl-22">
              <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                Your privacy is our priority. Any personal information you
                provide—such as your name, contact details, and booking
                preferences—is used only for reservation and communication
                purposes. We do not sell, rent, or share your data with third
                parties.
              </p>
            </div>
          </section>
        </div>

        <div className="bg-gradient-to-r from-[#0e1732] via-[#1e293b] to-[#0e1732] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center shadow-2xl mt-12 sm:mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Need Clarification?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
              Have questions about our policies? Our support team is here to
              help you understand and navigate our guidelines.
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#957C3D] to-[#B8A055] text-white font-semibold rounded-xl sm:rounded-2xl hover:shadow-lg hover:shadow-[#957C3D]/25 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Contact Support Team
              </a>
              <a
                href="mailto:support@resort.com"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl sm:rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <div className="inline-flex items-center gap-2 text-slate-400">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-slate-300"></div>
            <span className="text-sm font-medium">
              Questions about policies?
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-slate-300"></div>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            We're here to help you understand our guidelines
          </p>
        </div>
      </div>
    </main>
  );
}
