import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../../components/ui/Button";

import { getGeneralCourseDetails } from "../../../../api/general";
import Loader from "../../../../components/reusables/loader";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addProduct } from "../../../../reducers/cartSlice";
import { FaShareAlt } from "react-icons/fa";
import { trackEvent } from "../../../../helpers/mixpanelClient";
import { useTrackViewDuration } from "../../../../hooks/useTrackDuration";

const CourseDetailsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "description" | "lessons" | "reviews"
  >("description");

  const { courseId } = useParams();
  const [isCopied, setIsCopied] = useState(false);

  // const { mutate: enroll, isPending } = enrollForACourse();
  const { data: courseDetails, isLoading } = getGeneralCourseDetails(courseId);
  const user = useSelector((state: any) => state?.userData?.data);
  const navigate = useNavigate();

  const handleShareClick = () => {
    const shareUrl = window.location.href; // Get current page URL
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Hide message after 2 seconds
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  useEffect(() => {
    if (courseDetails?.id) {
      trackEvent("Viewed Course", {
        id: courseDetails.id,
        title: courseDetails.title,
        instructor: courseDetails.creator.name,
        type: "course",
      });
    }

  }, [courseDetails?.id]);


  useTrackViewDuration(courseDetails?.id, courseDetails?.title, 'course');

  if (isLoading) {
    return <Loader />;
  }

  // const handleEnroll = () => {
  //   enroll(courseId);
  // };

  const dispatch = useDispatch();
  const addToCart = () => {
    if (!user) return navigate("/auth/login");
    dispatch(
      addProduct({
        price: parseInt(courseDetails?.price!),
        name: courseDetails?.title,
        productId: courseDetails?.id,
        quantity: 1,
        unitPrice: parseInt(courseDetails?.price!),
        image: courseDetails?.image,
        productType: "course",
      })
    );
    toast.success(`${courseDetails?.title} added successfully`);
  };

  const handleBuy = () => {
    if (!user) return navigate("/auth/login");
    dispatch(
      addProduct({
        price: parseInt(courseDetails?.price!),
        name: courseDetails?.title,
        productId: courseDetails?.id,
        quantity: 1,
        productType: "course",
        unitPrice: parseInt(courseDetails?.price!),
        image: courseDetails?.image,
      })
    );
    navigate("/cart");
    toast.success(`${courseDetails?.title} added successfully`);
  };

  return (
    <div className="box pt-20 pb-20">
      {/* Course Title & Metadata */}
      <p className="text-3xl font-bold mb-4">{courseDetails?.title}</p>
      <p className="text-gray-600 my-1 mb-4">⭐⭐⭐⭐⭐ (40 ratings)</p>
      <p className="text-gray-500">By Industry & Co</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
        {/* Course Image */}
        <div className="lg:col-span-2 relative">
          <img
            src={courseDetails?.image}
            alt="Course Cover"
            className="w-full rounded-xl object-cover xl:h-[600px]"
          />
          <div className="absolute top-4 right-4 flex space-x-3">
            <button
              type="button"
              onClick={handleShareClick}
              className="p-2 bg-white dark:bg-darkMode rounded-full shadow-md"
            >
              <FaShareAlt className="text-primary" />
            </button>
          </div>
          {isCopied && (
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-gray-700 dark:bg-black text-white text-sm rounded">
              Link copied!
            </span>
          )}
        </div>

        {/* Payment Box */}
        <div className="space-y-4">
          <div className="bg-[#F7F8FD] p-6 rounded-xl shadow-sm dark:bg-[#15171E]">
            <p className="font-bold text-lg text-black mb-4 unbound">Payment</p>
            <p className="text-gray-600 text-base mb-3">
              {courseDetails?.title}
            </p>
            <p className="text-gray-600 text-base mb-3">
              {courseDetails?.subtitle}
            </p>
            <div className="border-b border-gray-600"></div>
            <p className="text-base font-bold mt-4">₦{courseDetails?.price}</p>
            {/* <button onClick={handleEnroll} className="w-full bg-gradient text-white py-3 rounded-lg mt-3">
              Buy Now
            </button> */}
            <Button
              withArrows
              title={" Buy Now"}
              altClassName="btn-primary w-full py-3"
              onClick={handleBuy}
            />
            <button
              onClick={addToCart}
              className="w-full border border-purple-600 text-purple-600 py-3 rounded-lg mt-4"
            >
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
                  {courseDetails?.description}
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
          <p className="text-2xl font-bold mb-4">Skills you'll gain</p>
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
            <p className="text-2xl font-bold mb-4">Certification</p>
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
          <p className="text-2xl font-bold mb-4">Course Tutors</p>
          <div className="flex items-center gap-4">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1740683797/We-Immersive/image_zsbxx6.png"
              alt="Tutor"
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h4 className="font-medium text-gray-800">
                {courseDetails?.creator.name}
              </h4>
              <p className="text-sm text-gray-500">
                {courseDetails?.creator.professionalSkill}
              </p>
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
