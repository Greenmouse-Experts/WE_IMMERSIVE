// import { MdOutlineArrowDropDown } from "react-icons/md";
import { getOrderDetails } from "../../api/general";
import Loader from "../../components/reusables/loader";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const { orderId } = useParams();
  const { data: orderDetails, isLoading } = getOrderDetails(orderId!);

  if (isLoading) return <Loader />;


  return (
    <div className="bg-white dark:bg-[#15171E] p-6 rounded-[20px] max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[#06052A] dark:text-white">Order Details</h2>
        {/* <div className="flex gap-2">
          <div className="flex items-center gap-1 btn-shadow px-3 py-1 rounded-full cursor-pointer">
            <span className="text-[#2C3E50] text-sm">Export</span>
            <MdOutlineArrowDropDown />
          </div>
        </div> */}
      </div>

      <div className="grid grid-cols-1 gap-4 text-sm text-[#2C3E50] dark:text-white">
        <div className="flex justify-between">
          <span className="font-medium">Reference:</span>
          <span>{orderDetails?.gatewayReference}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Customer:</span>
          <span>{orderDetails?.user?.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Email:</span>
          <span>{orderDetails?.user?.email}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Payment Method:</span>
          <span>{orderDetails?.paymentMethod}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Amount:</span>
          <span>{orderDetails?.currency}{orderDetails?.amount}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Status:</span>
          <span className="text-green-500 capitalize">{orderDetails?.status}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Created At:</span>
          <span>{new Date(orderDetails?.createdAt).toLocaleString()}</span>
        </div>
      </div>

      {orderDetails?.metadata?.items?.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold text-[#06052A] dark:text-white mb-2">Purchased Items</h3>
          <div className="bg-[#F9FAFB] dark:bg-[#1f1f2b] p-4 rounded-lg">
            {orderDetails.metadata.items.map((item:any, index:number) => (
              <div key={index} className="flex justify-between text-sm border-b last:border-none py-2">
                <span className="capitalize">{item.productType.replace("_", " ")}</span>
                <span>₦{item.price} x {item.quantity}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
