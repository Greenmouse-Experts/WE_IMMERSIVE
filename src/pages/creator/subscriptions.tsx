import { useState } from "react";
import {
  getSubscriptions,
  subscribe,
  verifyPayment as VerifyPaymentApi,
} from "../../api/subscription";
import SubscriptionCard from "../../components/ui/SubscriptionCard";
import { ISubscription } from "../../types/subscription.types";
import Button from "../../components/ui/Button";
import { Dialog } from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";
import Loader from "../../components/reusables/loader";
import { getGeneralUserDetails } from "../../api/general";
// import { usePaystackPayment } from "react-paystack";
// import { verifyPayment as VerifyPaymentApi } from "../../api/subscription";

const Subscriptions = () => {
  const { data: subscriptions, isLoading } = getSubscriptions();
  const { mutate: activateSub, isPending } = subscribe();
  const [selected, setSelected] = useState<ISubscription | null>(null);
  const { data: userData, isLoading: isgettingUser } = getGeneralUserDetails();
  const { mutate: verifyPayment, isPending: isVerifying } = VerifyPaymentApi();

  // const config = {
  //   reference: new Date().getTime().toString(),
  //   email: userData?.email,
  //   amount: parseInt(selected?.price!) * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  //   publicKey: "pk_test_77297b93cbc01f078d572fed5e2d58f4f7b518d7",
  // };
  // const initializePayment = usePaystackPayment(config);

  const [deleteDialog, setShowDeleteDialog] = useState<boolean>(false);

  const handleSubscribe = (isAutoRenew: boolean) => {
    activateSub(
      {
        planId: selected?.id,
        paymentMethod: "Paystack",
        isAutoRenew: isAutoRenew,
      },
      {
        onSuccess: (data) => {
          console.log("response", data);
          if (data?.payment?.reference) {
            // Open Paystack inline payment
            const handler = window.PaystackPop.setup({
              key: "pk_test_77297b93cbc01f078d572fed5e2d58f4f7b518d7", // Replace with your Paystack public key
              email: userData?.email,
              amount: parseInt(selected?.price!) * 100,
              currency: "NGN",
              ref: data.payment.reference, // Reference from backend
              callback: (response) => {
                // Redirect manually after payment
                // window.location.href = `/payment/callback?reference=${response.reference}`;
                verifyPayment(
                  { reference: response.reference },
                  {
                    onSuccess: () => {
                      handleModal();
                    },
                  }
                );
              },
              onClose: () => {
                // alert("Transaction was not completed, window closed.");
                handleModal();
              },
            });

            handler.openIframe(); // Open the inline Paystack payment modal
          }
        },
        onError: () => {
          handleModal();
        },
      }
    );

    // try {
    //   initializePayment({
    //     onSuccess: (reference: any) => {
    //       console.log("Payment Successful, Reference:", reference);
    //       // alert(`Payment Successful! Reference: ${JSON.stringify(reference)}`);
    //     },
    //     onClose: () => {
    //       console.log("Payment window closed.");
    //     },
    //   });
    // } catch (error) {
    //   console.error("Payment Error:", error);
    // }
  };

  
  if (isLoading || isgettingUser) return <Loader />;
  const handleModal = () => setShowDeleteDialog(!deleteDialog);

  const handleSelect = (item: ISubscription) => {
    setSelected(item);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {subscriptions?.map((subscription) => (
          <SubscriptionCard
            key={subscription.id}
            isSelected={subscription.name === selected?.name}
            item={subscription}
            handleSelect={handleSelect}
          />
        ))}
      </div>
      <div className="mt-14 flex justify-center">
        <Button
          style={{ width: "243px" }}
          title="Proceed"
          withArrows
          size={14}
          onClick={handleModal}
          // width={243}
          disabled={isPending || isVerifying}
          // altClassName="btn-primary px-10 py-2 whitespace-nowrap"
        />
      </div>
      <Dialog handler={handleModal} open={deleteDialog} size="sm">
        <div className="p-6 relative">
          <IoClose
            onClick={handleModal}
            size={30}
            className="absolute top-3 right-3 text black dark:text-white"
          />
          <h4 className="text-black dark:text-white text-base">
            Do you want plan auto renewal?
          </h4>
          <div className="flex gap-4 justify-end mt-4">
            <button
              onClick={() => handleSubscribe(false)}
              className="text-white  bg-gray-600 w-[200px] fw-600 rounded-lg text-nowrap"
            >
              No, dont renew
            </button>
            <Button
              onClick={() => handleSubscribe(true)}
              isBusy={isLoading}
              style={{ width: "200px" }}
              className="text-white btn-primary px-4 py-2 rounded-lg"
              title="Yes, auto renew"
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Subscriptions;

// {
//   onSuccess: (data) => {
//     if (data?.payment?.reference) {
//       // Open Paystack inline payment
//       const handler = window.PaystackPop.setup({
//         key: "pk_test_77297b93cbc01f078d572fed5e2d58f4f7b518d7", // Replace with your Paystack public key
//         email: userData?.email,
//         amount: parseInt(selected?.price!) * 100,
//         currency: "NGN",
//         ref: data.payment.reference, // Reference from backend
//         callback: (response) => {
//           // Redirect manually after payment
//           window.location.href = `/payment/callback?reference=${response.reference}`;
//         },
//         onClose: () => {
//           alert("Transaction was not completed, window closed.");
//         },
//       });

//       handler.openIframe(); // Open the inline Paystack payment modal
//     }
//   },
//   onError: () => {
//     handleModal();
//   },
// }

// if (selected) {
//   activateSub(
//     {
//       planId: selected?.id,
//       paymentMethod: "Paystack",
//       isAutoRenew: isAutoRenew,
//     },
//     {
//       onSuccess: (res) => {
//         setSelected(null);
//         // if (res?.payment?.authorization_url) {
//         //   // Redirect user to Paystack checkout
//         //   window.location.href = res.payment.authorization_url;
//         // }
//         console.log(res)
//         handleModal();
//       },
//       onError: () => {
//         handleModal();
//       },
//     }
//   );
// }

// const handleSubscribe = (isAutoRenew: boolean) => {
//   activateSub(
//     {
//       planId: selected?.id,
//       paymentMethod: "Paystack",
//       isAutoRenew: isAutoRenew,
//     },
//     {
//       onSuccess: (res) => {
//         try {
//           initializePayment({
//             onSuccess: (reference: any) => {
//               console.log("Payment Successful, Reference:", reference);
//               verifyPayment(
//                 { reference: reference.reference },
//                 {
//                   onSuccess: (res) => {
//                     setSelected(null);
//                     handleModal();
//                     console.log(res);
//                   },
//                   onError: () => {
//                     handleModal();
//                   },
//                 }
//               );
//               // alert(`Payment Successful! Reference: ${JSON.stringify(reference)}`);
//             },
//             onClose: () => {
//               console.log("Payment window closed.");
//               handleModal();
//             },
//           });
//         } catch (error) {
//           console.error("Payment Error:", error);
//           handleModal();
//         }
//         // setSelected(null);
//         // if (res?.payment?.authorization_url) {
//         //   // Redirect user to Paystack checkout
//         //   window.location.href = res.payment.authorization_url;
//         // }
//         console.log(res);
//         handleModal();
//       },
//       onError: () => {
//         handleModal();
//       },
//     }
//   );

// try {
//   initializePayment({
//     onSuccess: (reference: any) => {
//       console.log("Payment Successful, Reference:", reference);
//       // alert(`Payment Successful! Reference: ${JSON.stringify(reference)}`);
//     },
//     onClose: () => {
//       console.log("Payment window closed.");
//     },
//   });
// } catch (error) {
//   console.error("Payment Error:", error);
// }
// };
