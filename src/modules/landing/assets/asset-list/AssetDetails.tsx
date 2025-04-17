import React from "react";
import { getGeneralAssetDetails } from "../../../../api/general";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../../components/reusables/loader";
import { ThreeDViewer } from "../asset-details";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addProduct } from "../../../../reducers/cartSlice";

const AssetDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: assetDetails, isLoading } = getGeneralAssetDetails(id);
  const user = useSelector((state: any) => state?.userData?.data);

  if (isLoading) {
    return <Loader />;
  }

  const handleDownload = () => {
    const downloadUrl = assetDetails?.assetUpload;
    if (downloadUrl) {
      window.open(downloadUrl, "_blank");
      toast.success("Download Successful");
      navigate("");
    } else {
      console.error("Download URL is missing");
    }
  };
  const dispatch = useDispatch();
  const addToCart = () => {
    if (!user) return navigate("/auth/login");
    dispatch(
      addProduct({
        price: assetDetails?.amount,
        name: assetDetails?.assetName,
        productId: id,
        quantity: 1,
        unitPrice: assetDetails?.amount,
        image: assetDetails?.assetThumbnail,
        productType: "digital_asset",
      })
    );
    toast.success(`${assetDetails?.assetName} added successfully`);
  };

  const handleBuy = () => {
    if (!user) return navigate("/auth/login");
    dispatch(
      addProduct({
        price: assetDetails?.amount,
        name: assetDetails?.assetName,
        productId: id,
        quantity: 1,
        unitPrice: assetDetails?.amount,
        image: assetDetails?.assetThumbnail,
        productType: "digital_asset",
      })
    );
    navigate("/cart");
    toast.success(`${assetDetails?.assetName} added successfully`);
  };

  return (
    <div className="box px-4 py-8">
      <h1 className="text-3xl font-bold">{assetDetails?.assetName}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <div className="flex text-yellow-400">{"⭐".repeat(5)}</div>
        <p className="text-gray-600">(40 ratings)</p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Image Gallery */}
        <div className="md:col-span-2 flex space-x-6">
          <div className="flex flex-col space-y-4">
            {/* {images.map((img, index) => (
            
            ))} */}
            <img
              src={assetDetails?.assetThumbnail}
              alt={"thumbnail"}
              className={`w-32 h-28 rounded cursor-pointer ring-1 bg-gradient bg-cover bg-center`}
            />
          </div>

          <div className="relative w-full h-[600px] border border-primary rounded-[10px]">
            {/* <img
              src={selectedImage}
              alt="Selected sofa"
              className="w-full rounded-xl object-cover"
            /> */}
            <ThreeDViewer modelUrl={assetDetails?.assetUpload} />
            <div className="absolute top-4 right-4 flex space-x-3">
              <button className="p-2 bg-white rounded-full shadow-md">
                ❤️
              </button>
              <button className="p-2 bg-white rounded-full shadow-md">
                🔗
              </button>
            </div>
          </div>
        </div>

        {/* Payment & Profile */}
        <div className="space-y-6">
          <div className="p-6 bg-gray-100 dark:bg-darkMode rounded-lg shadow-sm space-y-4">
            <h3 className="text-lg font-semibold dark:text-white">Payment</h3>
            <p className="text-gray-600">{assetDetails?.assetName}</p>
            <hr />
            {assetDetails?.amount && (
              <p className="text-xl font-bold">₦{assetDetails?.amount}</p>
            )}
            {assetDetails?.pricingType !== "Free" ? (
              <div className="space-y-4">
                <button
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 rounded-lg"
                  onClick={handleBuy}
                >
                  Buy Now
                </button>
                <button
                  onClick={addToCart}
                  className="w-full border border-purple-600 text-purple-600 py-2 rounded-lg"
                >
                  Add to cart
                </button>
              </div>
            ) : (
              <button
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 rounded-lg"
                onClick={handleDownload}
              >
                Download for Free
              </button>
            )}
          </div>

          <div className="p-6 bg-gray-100 dark:bg-darkMode rounded-lg shadow-sm space-y-4">
            <span className="bg-purple-600 text-white px-3 py-1 text-sm rounded-full">
              Creator’s Profile
            </span>
            <div className="flex items-center space-x-4">
              <img
                src={
                  "https://res.cloudinary.com/greenmouse-tech/image/upload/v1740683797/We-Immersive/image_zsbxx6.png"
                }
                alt={assetDetails?.user.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-bold">{assetDetails?.user.name}</p>
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
