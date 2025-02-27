import React, { useState } from "react";

const CourseDetailsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "description" | "lessons" | "reviews"
  >("description");

  return (
    <div className="box pt-20 pb-20">
      {/* Course Title & Metadata */}
      <p className="text-3xl font-bold mb-4">Theory of Evolution</p>
      <p className="text-gray-600 my-1 mb-4">⭐⭐⭐⭐⭐ (40 ratings)</p>
      <p className="text-gray-500">By Industry & Co</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
        {/* Course Image */}
        <div className="lg:col-span-2">
          <img
            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1740679994/We-Immersive/image_gtwu8k.jpg"
            alt="Course Cover"
            className="w-full rounded-xl object-cover"
          />
        </div>

        {/* Payment Box */}
        <div className="space-y-4">
          <div className="bg-[#F7F8FD] p-6 rounded-xl shadow-sm dark:bg-[#15171E]">
            <p className="font-bold text-lg text-black mb-4 unbound">Payment</p>
            <p className="text-gray-600 text-base mb-3">
              Test Cybertruck 3D X 1
            </p>
            <p className="text-gray-600 text-base mb-3">
              Test Cybertruck 3D X 1
            </p>
            <div className="border-b border-gray-600"></div>
            <p className="text-base font-bold mt-4">₦20,000</p>
            <button className="w-full bg-gradient text-white py-3 rounded-lg mt-3">
              Buy Now
            </button>
            <button className="w-full border border-purple-600 text-purple-600 py-3 rounded-lg mt-4">
              Add to Cart
            </button>
          </div>

          {/* Creator Profile Box */}
          <div className="bg-[#F7F8FD] p-6 rounded-xl shadow-sm text-center dark:bg-[#15171E]">
            <p className="text-sm bg-purple-600 mx-auto w-40 rounded-lg text-white py-2">
              Creator Profile
            </p>
            <div className="flex items-center justify-center mt-4">
              <div className="w-24 h-24flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1740680546/We-Immersive/image_gd86qr.png"
                  alt=""
                />
              </div>
            </div>
            <p className="mt-4 mb-2 text-lg font-bold">Industry & Co.</p>
            <p className="text-gray-600 text-base">testmail@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-6 grid grid-cols-12 gap-6">
        {/* Content Area - 6 Columns */}
        <div className="col-span-12 md:col-span-8">
          {/* Tabs Navigation */}
          <div className="flex border-b border-gray-200">
            {["description", "lessons", "reviews"].map((tab) => (
              <button
                key={tab}
                className={`py-3 px-4 font-semibold ${
                  activeTab === tab
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-600"
                }`}
                onClick={() =>
                  setActiveTab(tab as "description" | "lessons" | "reviews")
                }
              >
                {tab === "description"
                  ? "Description"
                  : tab === "lessons"
                  ? "Lessons"
                  : "Ratings/Reviews"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === "description" && (
              <>
                <p className="text-black leading-loose">
                  Discover Unreal Engine by creating a simple project that
                  touches on various aspects of the software. Learn how to
                  import data from a variety of sources, then use that data to
                  create a simple environment, author basic materials, explore
                  the lighting system, and add basic Landscape and Foliage to
                  bring the scene to life...
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {/* 100% Online */}
                  <div className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg dark:bg-[#15171E]">
                    <img
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1740682514/We-Immersive/Frame_1171275244_uylc1h.png"
                      alt="Online Icon"
                      className="w-12 h-12"
                    />
                    <div className="flex-1">
                      <p className="text-lg font-bold">100% Online</p>
                      <p className="text-gray-600 text-sm mt-1">
                        Start instantly and learn at your pace
                      </p>
                    </div>
                  </div>

                  {/* VR Enabled */}
                  <div className="flex items-start gap-4 p-4 bg-gray-100 dark:bg-[#15171E] rounded-lg">
                    <img
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1740682514/We-Immersive/Frame_1171275245_j34rm2.png"
                      alt="VR Icon"
                      className="w-12 h-12"
                    />
                    <div className="flex-1">
                      <p className="text-lg font-bold">VR Enabled</p>
                      <p className="text-gray-600 text-sm mt-1">
                        Enjoy an enhanced learning experience
                      </p>
                    </div>
                  </div>

                  {/* Flexible Deadline */}
                  <div className="flex items-start gap-4 p-4 bg-gray-100 dark:bg-[#15171E] rounded-lg">
                    <img
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1740682514/We-Immersive/Frame_1171275246_qyruog.png"
                      alt="Deadline Icon"
                      className="w-12 h-12"
                    />
                    <div className="flex-1">
                      <p className="text-lg font-bold">Flexible Deadline</p>
                      <p className="text-gray-600 text-sm mt-1">
                        Reset deadlines to your schedule
                      </p>
                    </div>
                  </div>

                  {/* Gamified Learning */}
                  <div className="flex items-start gap-4 p-4 bg-gray-100 dark:bg-[#15171E] rounded-lg">
                    <img
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1740682514/We-Immersive/Frame_1171275247_eykaxv.png"
                      alt="Gamified Icon"
                      className="w-12 h-12"
                    />
                    <div className="flex-1">
                      <p className="text-lg font-bold">Gamified Learning</p>
                      <p className="text-gray-600 text-sm mt-1">
                        Participate in leaderboards and challenges
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "lessons" && (
              <p className="text-black leading-loose">
                Lesson content will appear here... Discover Unreal Engine by
                creating a simple project that touches on various aspects of the
                software. Learn how to import data from a variety of sources,
                then use that data to create a simple environment, author basic
                materials, explore the lighting system, and add basic Landscape
                and Foliage to bring the scene to life...
              </p>
            )}
            {activeTab === "reviews" && (
              <p className="text-black leading-loose">
                Reviews and ratings will appear here... Discover Unreal Engine
                by creating a simple project that touches on various aspects of
                the software. Learn how to import data from a variety of
                sources, then use that data to create a simple environment,
                author basic materials, explore the lighting system, and add
                basic Landscape and Foliage to bring the scene to life...
              </p>
            )}
          </div>
        </div>

        {/* Empty Right Area - 6 Columns */}
        <div className="col-span-12 md:col-span-4"></div>
      </div>
      <div className="mt-12 space-y-10">
        {/* Skills You’ll Gain Section */}
        <div>
          <p className="text-2xl font-bold mb-4">
            Skills you'll gain
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Game Development",
              "3D Illustrations",
              "Character Animation",
              "AI Design Basic",
              "3D Illustrations",
            ].map((skill) => (
              <div
                key={skill}
                className="px-4 py-3 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <span>⚙️</span>
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Certification Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <div>
            <p className="text-2xl font-bold mb-4">
              Certification
            </p>
            <p className="text-gray-600 text-base leading-loose">
              You can add this credential to your LinkedIn profile, resume, or
              CV. Share it on social media and in your performance review.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1740683720/We-Immersive/Group_1171275242_clr2kb.png"
            alt="Certificate"
            className="w-full max-w-xs sm:max-w-sm"
          />
        </div>

        {/* Course Tutors Section */}
        <div>
          <p className="text-2xl font-bold mb-4">
            Course Tutors
          </p>
          <div className="flex items-center gap-4">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1740683797/We-Immersive/image_zsbxx6.png"
              alt="Tutor"
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h4 className="font-medium text-gray-800">Chukka Uzo</h4>
              <p className="text-sm text-gray-500">Science Tutor</p>
              <div className="flex gap-1 mt-1 text-yellow-500">
                ⭐️⭐️⭐️⭐️⭐️
              </div>
            </div>
          </div>
        </div>

        {/* Similar Courses Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-xl font-semibold text-gray-800">
              Similar Courses 📚
            </p>
            <a href="#" className="text-sm font-medium text-purple-600">
              See More
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Array(4)
              .fill(null)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-sm rounded-lg overflow-hidden"
                >
                  <img
                    src={
                      idx === 1
                        ? "https://res.cloudinary.com/greenmouse-tech/image/upload/v1739646333/We-Immersive/image4_qcpt2t.png"
                        : "https://res.cloudinary.com/greenmouse-tech/image/upload/v1739646333/We-Immersive/image_zh7h9q.png"
                    }
                    alt="Course"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Theory of Evolution
                    </h4>
                    <h6 className="text-xs text-gray-500">By Eviola & Co.</h6>
                    <div className="flex gap-1 mt-1 text-yellow-500">
                      ⭐️⭐️⭐️⭐️⭐️
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
