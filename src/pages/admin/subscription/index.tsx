import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { useGetData } from "../../../hooks/useGetData";
import { getSubscriptionPlans } from "../../../api/admin";
import { useEffect, useState } from "react";
import Loader from "../../../components/reusables/loader";

const Subscription = () => {
    const subscriptionPlan = useGetData(["subscriptionPlan"], getSubscriptionPlans);
    const [subscriptionData, setSubscriptionData] = useState<{ data: any[] } | null>(null);

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (subscriptionPlan.data) {
            setSubscriptionData(subscriptionPlan.data);
            setLoading(false);
        }
    }, [subscriptionPlan.data]);

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


                <div className="container mx-auto p-6">
                    {loading ? (
                        // Loading spinner or placeholder
                        <Loader />
                    ) : (
                        subscriptionData?.data && subscriptionData.data.length > 0
                            ?
                            <table className="w-full border-collapse border border-gray-300 text-left">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 p-4 font-medium">Name</th>
                                        {subscriptionData?.data.map((plan: any, index: any) => (
                                            <th className="border border-gray-300 p-4 font-bold" key={`hd${index}`}>{plan.name}</th>
                                        ))}
                                        <th className="border border-gray-300 p-4 text-blue-600 font-medium">
                                            <button onClick={() => navigate("create")}>Add New Plan</button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Features Row */}
                                    <tr>
                                        <td className="border border-gray-300 p-4 font-medium">Features</td>
                                        {subscriptionData?.data.map((plan: any, index: any) => (
                                            <td className="border border-gray-300 p-4" key={`li${index}`}>
                                                <ul className="list-disc pl-5 space-y-3">
                                                    <li>
                                                        {plan.allowsAuction ? 'Allow Auction' : 'No Auction'}
                                                    </li>
                                                    <li>
                                                        {plan.auctionProductLimit ? `${plan.auctionProductLimit} auction product limit`
                                                            : 'No Auction product limit'}
                                                    </li>
                                                    <li>
                                                        {plan.duration} month(s) duration
                                                    </li>
                                                    <li>
                                                        {plan.productLimit ? `${plan.productLimit} product limit`
                                                            : 'No product limit'}
                                                    </li>
                                                </ul>
                                            </td>
                                        ))}
                                    </tr>

                                    {/* Amount Row */}
                                    <tr>
                                        <td className="border border-gray-300 p-4 font-medium">Amount</td>
                                        {subscriptionData?.data.map((plan: any, index: any) => (
                                            <td className="border border-gray-300 p-4" key={`hd${index}`}>N{plan.price}/Month</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                            :
                            <></>
                    )}
                </div>
            </div>
        </div>
    )
};

export default Subscription;