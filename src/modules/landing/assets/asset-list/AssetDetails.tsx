import React, { useState } from "react";

const images = [
  "https://res.cloudinary.com/greenmouse-tech/image/upload/v1741002250/We-Immersive/image_jwlaj4.jpg",
  "https://res.cloudinary.com/greenmouse-tech/image/upload/v1740679994/We-Immersive/image_gtwu8k.jpg",
  "https://res.cloudinary.com/greenmouse-tech/image/upload/v1739646333/We-Immersive/image_zh7h9q.png",
];

const AssetDetails: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="box px-4 py-8">
      <h1 className="text-3xl font-bold">Tesla Cybertruck 3D</h1>
      <div className="flex items-center space-x-2 mt-2">
        <div className="flex text-yellow-400">
          {"⭐".repeat(5)}
        </div>
        <p className="text-gray-600">(40 ratings)</p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Image Gallery */}
        <div className="md:col-span-2 flex space-x-6">
          <div className="flex flex-col space-y-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`sofa ${index + 1}`}
                className={`w-32 h-28 rounded cursor-pointer ${
                  selectedImage === img ? "ring-1 bg-gradient" : ""
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          <div className="relative w-full">
            <img
              src={selectedImage}
              alt="Selected sofa"
              className="w-full rounded-xl object-cover"
            />
            <div className="absolute top-4 right-4 flex space-x-3">
              <button className="p-2 bg-white rounded-full shadow-md">❤️</button>
              <button className="p-2 bg-white rounded-full shadow-md">🔗</button>
            </div>
          </div>
        </div>

        {/* Payment & Profile */}
        <div className="space-y-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-sm space-y-4">
            <h3 className="text-lg font-semibold">Payment</h3>
            <p className="text-gray-600">Test Cybertruck 3D x 1</p>
            <hr />
            <p className="text-xl font-bold">₦20,000</p>
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 rounded-lg">
              Buy Now
            </button>
            <button className="w-full border border-purple-600 text-purple-600 py-2 rounded-lg">
              Add to cart
            </button>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-sm space-y-4">
            <span className="bg-purple-600 text-white px-3 py-1 text-sm rounded-full">
              Creator’s Profile
            </span>
            <div className="flex items-center space-x-4">
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1740683797/We-Immersive/image_zsbxx6.png" 
                alt="Chukka Uzo"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-bold">Chukka Uzo</p>
                <p className="text-sm text-gray-600">2D/3D Artist</p>
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <div>
                <p className="font-bold">1003</p>
                <p>Followers</p>
              </div>
              <div>
                <p className="font-bold">123</p>
                <p>Likes</p>
              </div>
              <div>
                <p className="font-bold">210</p>
                <p>Works</p>
              </div>
            </div>
            <button className="w-full border border-purple-600 text-purple-600 py-2 rounded-lg">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetDetails;
