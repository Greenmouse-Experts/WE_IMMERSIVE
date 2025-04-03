import { useState } from "react";
import { getSubscriptions, subscribe } from "../../api/subscription";
import SubscriptionCard from "../../components/ui/SubscriptionCard";
import { ISubscription } from "../../types/subscription.types";
import Button from "../../components/ui/Button";
import { Dialog } from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";
import Loader from "../../components/reusables/loader";

const Subscriptions = () => {
  const { data: subscriptions, isLoading } = getSubscriptions();
  const { mutate: activateSub, isPending } = subscribe();
  const [selected, setSelected] = useState<ISubscription | null>(null);

  const handleSubscribe = (isAutoRenew: boolean) => {
    if (selected) {
      activateSub(
        {
          planId: selected?.id,
          paymentMethod: "Paystack",
          isAutoRenew: isAutoRenew,
        },
        {
          onSuccess: () => {
            setSelected(null);
            handleModal();
          },
          onError: () => {
            handleModal();
          },
        }
      );
    }
  };


  const [deleteDialog, setShowDeleteDialog] = useState<boolean>(false);

  if(isLoading) return <Loader/>
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
          disabled={isPending}
          // altClassName="btn-primary px-10 py-2 whitespace-nowrap"
        />
      </div>
      <Dialog handler={handleModal} open={deleteDialog} size="sm">
        <div className="p-6 relative">
          <IoClose
            size={30}
            className="absolute top-3 right-3 text black dark:text-white"
          />
          <h4 className="text-black dark:text-white text-base">
            Do you want plan auto renewal?
          </h4>
          <div
            className="flex gap-4 justify-end mt-4"
            onClick={() => handleSubscribe(false)}
          >
            <button className="text-white  bg-gray-600 w-[200px] fw-600 rounded-lg text-nowrap">
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
