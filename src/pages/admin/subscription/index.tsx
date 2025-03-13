import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import {
  deleteSubscriptionPlan,
  getSubscriptionPlans,
} from "../../../api/admin";
import Loader from "../../../components/reusables/loader";
import {
  Dialog,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { MoreVertical } from "lucide-react";
import { useState } from "react";
import Publish from "../../../components/reusables/Publish";

const Subscription = () => {
  const { data: subscriptionData, isLoading } = getSubscriptionPlans();
  const { mutate: deletePlan, isPending: isDeleting } =
    deleteSubscriptionPlan();
  const [selected, setSelected] = useState<any>(null);

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const openDelete = (palnId: any) => {
    setSelected(palnId);
    handleOpen();
  };
  const handleDelete = () => {
    deletePlan(selected.id, {
      onSuccess() {
        handleOpen();
      },
    });
  };

  if (isLoading) return <Loader />;

  return (
    <div>
      <div className="bg-white dark:bg-[#15171E] mt-10 px-4 lg:py-6 rounded-[20px]">
        <div className="flex w-full justify-between md:py-1 py-4 items-center">
          <p className="unbound flex flex-grow text-sm md:text-base text-[#06052A]">
            Subscription
          </p>
          <div className="md:flex hidden items-center gap-x-2">
            <div className="flex items-center gap-x-1 px-2 py-1">
              <Button
                size={14}
                onClick={() => navigate("create")}
                title="Add New Plan"
                altClassName="btn-primary px-2 py-1 flex flex-grow whitespace-nowrap"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto p-6 overflow-x-auto">
          {isLoading ? (
            // Loading spinner or placeholder
            <Loader />
          ) : (
            // subscriptionData?.data && subscriptionData.data.length > 0
            //     ?
            <table className=" border-collapse border border-gray-300 text-left  text-nowrap">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-4 font-medium">
                    Name
                  </th>
                  {subscriptionData?.map((plan: any, index: any) => (
                    <th
                      className="border border-gray-300 p-4 font-bold capitalize"
                      key={`hd${index}`}
                    >
                      <div className="flex justify-between">
                        <p> {plan.name}</p>
                        <div>
                          <Menu placement="left">
                            <MenuHandler>
                              <MoreVertical
                                size={20}
                                className=" cursor-pointer"
                              />
                            </MenuHandler>
                            <MenuList>
                              <MenuItem className="flex flex-col gap-3">
                                <span
                                  className="cursor-pointer w-full"
                                  onClick={() =>
                                    navigate(
                                      `/super-admin/subscription/edit/${plan.id}`
                                    )
                                  }
                                >
                                  Edit Plan
                                </span>
                              </MenuItem>
                              <MenuItem className="flex flex-col gap-3">
                                <span
                                  className="cursor-pointer w-full"
                                  onClick={() => openDelete(plan)}
                                >
                                  Delete Plan
                                </span>
                              </MenuItem>
                              {/* <MenuItem className="flex flex-col gap-3">
              <span
                className="cursor-pointer w-full"
                // onClick={() => handleDisplayLessons(module.id)}
              >
                Delete Lessons
              </span>
            </MenuItem> */}
                            </MenuList>
                          </Menu>
                        </div>
                      </div>
                    </th>
                  ))}
                  <th className="border border-gray-300 p-4 text-blue-600 font-medium">
                    <button onClick={() => navigate("create")}>
                      Add New Plan
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Features Row */}
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">
                    Features
                  </td>
                  {subscriptionData?.map((plan: any, index: any) => (
                    <td
                      className="border border-gray-300 p-4"
                      key={`li${index}`}
                    >
                      <ul className="list-disc pl-5 space-y-3">
                        <li>{plan.duration} month(s) duration</li>
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* Amount Row */}
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">
                    Amount
                  </td>
                  {subscriptionData?.map((plan: any, index: any) => (
                    <td
                      className="border border-gray-300 p-4"
                      key={`hd${index}`}
                    >
                      N{plan.price}/Month
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            // :
            // <></>
          )}
        </div>
      </div>
      <Dialog className="" open={open} handler={handleOpen} size="md">
        <div className="p-6 bg-white">
          <Publish
            handleCancel={handleOpen}
            title={`Are you sure you want to delete this subscription?`}
            handleProceed={handleDelete}
            isLoading={isDeleting}
          />
        </div>
      </Dialog>
    </div>
  );
};

export default Subscription;
