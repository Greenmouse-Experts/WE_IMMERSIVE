import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { verifyPayment as VerifyPaymentApi } from "../../api/subscription";

const PaymentCallback = () => {
  const [searchParams] = useSearchParams();
  const reference = searchParams.get("reference");
  const { mutate: verifyPayment, isPending } = VerifyPaymentApi();
  const navigate = useNavigate();

  useEffect(() => {
    if (reference) {
      verifyPayment(
        { reference },
        {
          onSuccess: (res) => {
            console.log("verify response: " + res);
            if (res.status === "success") {
              // navigate(-1); // Redirect user to dashboard or subscription page
            }
          },
          onError: (err) => {
            console.log(err)
            //   navigate(-1);
          },
        }
      );
      // .then((res) => {
      //   if (res.status === "success") {
      //     alert("Payment successful!");
      //     navigate("/dashboard"); // Redirect user to dashboard or subscription page
      //   } else {
      //     alert("Payment failed or pending.");
      //     navigate("/subscription");
      //   }
      // })
      // .catch(() => {
      //   alert("Error verifying payment.");
      //   navigate("/subscription");
      // });
    }
  }, [reference, navigate]);

  if (isPending) return <div>Verifying payment...</div>;

  return <div>Processing payment...</div>;
};

export default PaymentCallback;
