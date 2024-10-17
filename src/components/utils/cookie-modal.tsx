import Cookies from "js-cookie";
import { useState } from "react";
import Button from "../ui/Button";

const CookieModal = () => {
  const [show, setShow] = useState(true);
  const accept = Cookies.get("weim_cookie");

  const acceptCookie = () => {
    setShow(false);
    Cookies.set("weim_cookie", `yes`);
  };

  const declineCookie = () => {
    setShow(false);
  };

  return (
    <div>
      {!accept && show && (
        <div className="fixed bottom-1 md:bottom-3 lg:right-2 p-5 md:p-6 z-[4000] w-[370px] form-shadow rounded-[20px] bg-white dark:bg-[#131313]">
          <div className="">
            <p className="unbound fw-500 lg:text-xl">We value your privacy 🍪</p>
            <p className="text-[#9A9999] fs-300 md:fs-600 mt-4">
              We use cookies to offer you a better browsing experience and
              analyze site traffic. If you continue to use this site, you
              consent to our use of cookies.
            </p>
          </div>
          <div className="flex justify-between items-center mt-5 lg:mt-6">
            <Button
              title={"Decline"}
              altClassName="underline text-[#6816FC]"
              onClick={declineCookie}
            />
            <Button
              title={"Accept Cookies"}
              withArrows
              altClassName="btn-primary px-4 py-2 whitespace-nowrap"
              onClick={acceptCookie}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieModal;
