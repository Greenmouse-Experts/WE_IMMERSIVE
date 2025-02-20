import React from "react";
import Navbar from "../../layout/user/components/navbar";

const JobDescription: React.FC = () => {
  return (
    <>
      <div className="mx-auto">
        <Navbar />
      </div>
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Job Description</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar Card */}
          <div className="bg-white p-6 border rounded-lg flex flex-col items-center text-center">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1739649406/We-Immersive/D6696853-14FC-467D-A319-F71EAEF7C8CF_iighc4.png"
              alt="GreenMouse Tech Logo"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">GreenMouse Tech</h3>
            <p className="text-gray-500">Lagos, Nigeria</p>
            <div className="mt-4 w-full border-t pt-4">
              <p className="text-sm text-gray-700 flex items-center gap-2">
                <span className="font-semibold">Job Type:</span> Full-time
              </p>
              <p className="text-sm text-gray-700 flex items-center gap-2 mt-4">
                <span className="font-semibold">Job Location:</span> Remote
              </p>
              <p className="text-sm text-gray-700 flex items-center gap-2 mt-4">
                <span className="font-semibold">Posted On:</span> October 21st,
                2024
              </p>
            </div>
          </div>
          {/* Main Content */}
          <div className="md:col-span-2 bg-white rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-2">
              Freelancer 3D Generalist
            </h3>
            <p className="text-gray-700 mb-4">
              The ideal candidate will have the ability to enhance business
              brand identities and create stunning website designs...
            </p>
            <h4 className="text-lg font-semibold mb-2">Qualification</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Develop and elevate brand identities and website designs.</li>
              <li>
                Collaborate with the development team to implement designs.
              </li>
              <li>
                Utilize design and web software including Figma, Framer,
                Illustrator.
              </li>
              <li>Create and edit engaging video content and animations.</li>
              <li>
                Design presentations, social media graphics, and other marketing
                materials.
              </li>
            </ul>
            <h4 className="text-lg font-semibold mb-2">Company Description</h4>
            <p className="text-gray-700 mb-6">
              GreenMouse is a dynamic software agency based in Lagos, Nigeria.
              Their services involve mobile app development...
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90">
              Apply »
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDescription;
