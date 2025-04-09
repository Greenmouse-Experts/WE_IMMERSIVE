import { Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  deleteProduct,
  getCart,
  getTotalCartPrice,
  ICartItem,
} from "../../../reducers/cartSlice";
import { getGeneralUserDetails } from "../../../api/general";
import Loader from "../../../components/reusables/loader";
import { useNavigate } from "react-router-dom";
import {
  initiatePurchase as initiatePurchaseApi,
  verifyPurchase as verifyPurchaseApi,
} from "../../../api/purchase";
const StudentCart = () => {
  const cart = useSelector(getCart);
  const totalPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate: initiatePurchase, isPending } = initiatePurchaseApi();
  const { mutate: verifyPurchase, isPending: isVerifying } =
    verifyPurchaseApi();

  const user = useSelector((state: any) => state.userData.data);
  const { data: userData, isLoading: isgettingUser } = getGeneralUserDetails();

  if (isgettingUser) {
    return <Loader />;
  }

  // const onSuccess = (reference: any) => {
  //   console.log("Payment Successful, Reference:", reference);
  //   alert(`Payment Successful! Reference: ${JSON.stringify(reference)}`);
  // };

  // const onClose = () => {
  //   console.log("Payment window closed.");
  // };
  const purchaseItem = cart.items[0];
  const handlePayment = () => {
    if (!user) {
      navigate("/auth/login");
      return;
    }

    initiatePurchase(
      {
        productType: "course",
        productId: purchaseItem.productId,
        paymentMethod: "paystack",
        amount: totalPrice.toFixed(2),
        currency: "₦",
      },
      {
        onSuccess: (data) => {
          if (data?.data?.paymentLink?.reference) {
            // Open Paystack inline payment
            const handler = window.PaystackPop.setup({
              key: "pk_test_77297b93cbc01f078d572fed5e2d58f4f7b518d7", // Replace with your Paystack public key
              email: userData?.email,
              amount: totalPrice * 100,
              currency: "NGN",
              ref: data?.data?.paymentLink?.reference, // Reference from backend
              callback: (response) => {
                // Redirect manually after payment
                // window.location.href = `/payment/callback?reference=${response.reference}`;
                verifyPurchase(
                  { reference: response.reference },
                  {
                    onSuccess: () => {
                      dispatch(clearCart());
                      navigate("/");
                    },
                  }
                );
              },
              onClose: () => {
                // alert("Transaction was not completed, window closed.");
                //  toast.error('Opps Something went wrong')
              },
            });

            handler.openIframe(); // Open the inline Paystack payment modal
          }
        },
        onError: () => {
          // toast.error("Opps Something went wrong");
        },
      }
    );
  };

  return (
    <div className="bg-white p-2 lg:p-8 mx-auto rounded-[20px]">
      <h1 className="unbound text-[24px] font-[600] mb-6">Cart</h1>
      <div className="flex flex-col xl:flex-row gap-5">
        <div className="overflow-x-auto lg:w-[983px]">
          <div className="bg-white p-1 md:p-2 lg:p-4 w-[983px] lg:w-[100%] md:w-[100%] rounded-lg">
            <div className="grid grid-cols-[1fr_1fr_auto] text-[14px] font-semibold py-2 pl-5">
              <span>PRODUCT</span>
              <span>PRICE</span>
              {/* <span>QUANTITY</span> */}
              {/* <span>TOTAL</span> */}
              <span>ACTION</span>
            </div>
            <div className="mt-4 p-2 md:p-5 lg:p-5 border border-1-grey rounded-[15px]">
              {cart.items.map((item: ICartItem) => (
                <div
                  key={item.productId}
                  className="grid grid-cols-[1fr_1fr_auto] items-center py-3"
                >
                  <span className="flex md:flex-col lg:flex-row  items-center md:items-start lg:items-center gap-2">
                    <img
                      src={item.image}
                      alt="img"
                      className="w-[70px] h-[70px]"
                    />
                    {item.name}
                  </span>
                  <span className="">N {item?.price?.toLocaleString()}</span>
                  {/* <div className="flex items-center gap-2 w-[50%] justify-center rounded-[100px] bg-[#E9EAFE]">
                        <button
                       
                        className="px-2 py-1"
                        >-
                        </button>
                        <span>{item.quantity}</span>
                        <button
                        
                        className="px-2 py-1"
                        >+
                        </button>
                    </div> */}
                  {/* <span>N {(item.unitPrice).toLocaleString()}</span> */}
                  <button
                    onClick={() => dispatch(deleteProduct(item.productId))}
                    className="text-red-500 bg-[#FFE8E8] rounded-[10px] p-2 w-fit"
                  >
                    <Trash size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[100%] xl:w-[320px] mt-[5%]">
          <div className="bg-[#E9EAFE] p-6 rounded-lg">
            <h2 className="text-[15px] font-[600] mb-8">Order Summary</h2>
            <div className="flex justify-between mt-2 text-[#5B5959] text-[17px] mb-6">
              <span>Subtotal</span>
              <span>N {totalPrice}</span>
            </div>
            <div className="flex justify-between mt-1 text-[#5B5959] text-[17px] mb-6">
              <span>Discount</span>
              <span>N 0</span>
            </div>
            <div className="flex justify-between items-center mt-1 text-[#5B5959] text-[17px] mb-6">
              <span>Promo Code</span>
              <input
                type="text"
                className="rounded-[10px] w-[128px] h-[42px] text-[14px]"
              />
            </div>
            <hr className="border-t-2 border-gray-400 border-dashed my-11"></hr>
            <div className="border-t mt-2 pt-2 flex justify-between text-[#5B5959] text-[17px] mb-5">
              <span>Total</span>
              <span className="unbound text-[17px] font-[500]">
                N{totalPrice}
              </span>
            </div>
          </div>
          <button
            onClick={handlePayment}
            disabled={isPending || isVerifying}
            className="unbound w-[100%] xl:w-[320px] h-[50px] mt-4 rounded-[9px] bg-gradient-to-r from-[#6F0AFF] to-[#1D9CD7] text-[13px] font-[500] text-white"
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentCart;
