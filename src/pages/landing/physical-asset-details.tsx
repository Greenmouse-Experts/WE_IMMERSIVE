import { useNavigate, useParams } from "react-router-dom";
import { getGeneralAssetPhysicalDetails } from "../../api/general";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/reusables/loader";
import { addProduct } from "../../reducers/cartSlice";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import { trackEvent } from "../../helpers/mixpanelClient";
import { useTrackViewDuration } from "../../hooks/useTrackDuration";

const PhysicalAssetDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isCopied, setIsCopied] = useState(false);

  const { data: assetDetails, isLoading } = getGeneralAssetPhysicalDetails(id);
  const user = useSelector((state: any) => state?.userData?.data);

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
    if (assetDetails?.id) {
      trackEvent("Viewed Physical Asset", {
        id: assetDetails.id,
        name: assetDetails.assetName,
        category: assetDetails.categoryId,
        type: "physical",
      });
    }
   
  }, [assetDetails?.id]);

  useTrackViewDuration(assetDetails?.id, assetDetails?.assetName, 'Physical Asset');

  if (isLoading) {
    return <Loader />;
  }

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
        productType: "physical_asset",
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

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Image Gallery */}
        <div className="md:col-span-2 flex xl:flex-row flex-col-reverse xl:space-x-6 gap-10 xl:gap-0">
          <div className="flex flex-col space-y-4">
            {/* {images.map((img, index) => (
            
            ))} */}
            <img
              src={assetDetails?.assetThumbnail}
              alt={"thumbnail"}
              className={`w-32 h-28 rounded cursor-pointer ring-1 bg-gradient bg-cover bg-center`}
            />
          </div>

          <div className="relative w-full h-[600px] border border-primary rounded-[10px] overflow-hidden">
            {/* <img
              src={selectedImage}
              alt="Selected sofa"
              className="w-full rounded-xl object-cover"
            /> */}
            <img
              src={assetDetails?.assetUpload}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-4 right-4 flex space-x-3">
              {/* <button className="p-2 bg-white dark:bg-darkMode rounded-full shadow-md">
                ❤️
              </button> */}
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
        </div>

        {/* Payment & Profile */}
        <div className="space-y-6">
          <div className="p-6 bg-gray-100 dark:bg-darkMode rounded-lg shadow-sm space-y-4">
            <h3 className="text-lg font-semibold dark:text-white">Payment</h3>
            <p className="text-gray-600">{assetDetails?.assetName}</p>
            <hr />
            <p className="text-xl font-bold">₦{assetDetails?.amount}</p>

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
          </div>

          <div className="p-6 bg-gray-100 dark:bg-darkMode rounded-lg shadow-sm space-y-4">
            <span className="bg-purple-600 text-white px-3 py-1 text-sm rounded-full">
              Creator’s Profile
            </span>
            <div className="flex items-center space-x-4">
              <img
                src={
                  "https://res.cloudinary.com/do2kojulq/image/upload/v1730286484/default_user_mws5jk.jpg"
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

export default PhysicalAssetDetails;
