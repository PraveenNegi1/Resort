import Image from "next/image";
import Link from "next/link";

export default function DiningSection() {
  return (
    <div className="bg-[#F1EDE6]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-serif">
        <h1 className="text-5xl font-semibold  text-[#0e1732] font-serif text-center mb-8">
          Dining Area
        </h1>
        <div className="bg-white  rounded-lg border border-gray-200 shadow-lg p-6 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-6">
            <Image
              src="https://images.unsplash.com/photo-1716705293226-b4a6c008992e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dining area"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-[#0e1732] mb-2">
              Exquisite Dining Experience
            </h2>
            <p className="text-gray-600 mb-4">
              Savor the flavors of Uttarakhand and beyond at our in-house
              restaurant.
            </p>

            <p className="text-gray-600 mb-6">
              Step into our inviting dining space and indulge in a culinary
              journey that blends local delicacies with international cuisines.
              Our chefs use the freshest ingredients to craft dishes that
              delight your taste buds, offering a perfect balance of flavor and
              presentation. Whether it&apos;s a hearty breakfast, a sumptuous
              lunch, or a delightful dinner, every meal at Devashish Hotel is an
              experience to remember.
            </p>

            <Link
              href="/diningArea"
              className="bg-[#0e1732] text-white px-4 py-2 mb-4 rounded-md hover:bg-white hover:text-[#0e1732] transition border border-[#0e1732] "
            >
              Explore More
            </Link>

            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center space-x-2">
                <div className="bg-[#0e1732] p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-600">Open from 7 AM</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-[#0e1732] p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-600">Capacity: 60</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-[#0e1732] p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-600">Authentic Flavors</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-[#0e1732] p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h18v6H3V3zm0 9h18v9H3v-9zm9-9v18"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-600">Expert Chefs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
