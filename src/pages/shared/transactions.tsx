import { IoClose, IoEyeOutline } from "react-icons/io5";
import {
  MdOutlineArrowDropDown,
  MdOutlineRadioButtonChecked,
} from "react-icons/md";
// import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { CgArrowBottomLeft, CgArrowTopRight } from "react-icons/cg";
import {
  RiArrowDownDoubleLine,
  RiArrowUpDoubleLine,
  RiBankFill,
} from "react-icons/ri";
import { useState } from "react";
import { Dialog } from "@material-tailwind/react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";
import { getAllAccounts, requestWithdrawal } from "../../api/subscription";
import { IBankDetails } from "../../types/subscription.types";
import { BeatLoader } from "react-spinners";
import Loader from "../../components/reusables/loader";

const TransactionsScreen = () => {
  const [modal, setShowModal] = useState<boolean>(false);
  const { data: bankAccounts, isLoading } = getAllAccounts();
  const { mutate: makeRequest, isPending: isRequesting } = requestWithdrawal();
  const handleModal = () => setShowModal(!modal);

  const [selectedBank, setselectedBank] = useState<IBankDetails | null>(
    bankAccounts ? bankAccounts[0] : null
  );

  const handleSelectedBank = (bank: IBankDetails) => {
    setselectedBank(bank);
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      amount: "",
    },
  });

  const onSubmit = (formData: { amount: string }) => {
    makeRequest(
      {
        amount: formData.amount,
        currency: "NGN",
        paymentProvider: "paystack",
      },
      {
        onSuccess: () => {
          handleModal();
        },
        onError: () => {
          handleModal();
        },
      }
    );
  };

  if (isLoading) return <Loader />;

  return (
    <div className="w-full">
      <div className=" flex xl:flex-row flex-col items-center gap-12">
        <div className="rounded-[20px] p-9 bg-white dark:bg-black flex-1  w-full">
          <p className="text-black fw-700">Wallet</p>
          <div className="h-[171px] mt-3 w-full bg-[url('https://res.cloudinary.com/do2kojulq/image/upload/v1743689651/Group_1321314947_t3div7.png')] bg-cover bg-center text-white px-10 py-10 rounded-[20px] overflow-hidden ">
            <div className="">
              <p className="text-sm">TOTAL BALANCE</p>
              <div className="flex items-center gap-5 mt-1">
                <p className="text-4xl">N 120,000</p>
                <div className="bg-[#F9CECE66] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                  <IoEyeOutline color="white" size={22} />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-[#D6F9CE] w-10 h-10 rounded-full flex justify-center items-center">
                <CgArrowBottomLeft color="#249B2C" size={20} />
              </div>
              <div>
                <p className="text-[#249B2C] text-[13px]">INCOME</p>
                <p className="text-base fw-700 mt-2">N 100,000</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#F9CECE] w-10 h-10 rounded-full flex justify-center items-center">
                <CgArrowTopRight color="#CA2F2F" size={20} />
              </div>
              <div>
                <p className="text-[#CA2F2F] text-[13px]">Withdrawal</p>
                <p className="text-base fw-700 mt-2">N 20,000</p>
              </div>
            </div>
          </div>
          <button
            onClick={handleModal}
            className="border w-full border-primary py-3 text-primary fw-500 text-lg rounded-lg text-center mt-10"
          >
            Withdraw
          </button>
        </div>
        <div className="rounded-[20px] p-9 bg-white dark:bg-black flex-1  w-full ">
          <p className="text-black fw-700">EV Token</p>
          <div className="h-[265px] flex flex-col items-center text-center mt-3 w-full bg-[url('https://res.cloudinary.com/do2kojulq/image/upload/v1743693137/Frame_1618871762_1_lgaaml.png')] bg-center bg-cover text-white px-10 py-2 rounded-[20px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/do2kojulq/image/upload/v1743693187/Group_1171275388_khrxab.png"
              alt="ev-token"
              className="w-[150px] h-[150px]"
            />
            <div className="">
              <p className="text-4xl fw-500">4 EV Token</p>
              <p className="text-sm">TOTAL</p>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-12">
            <button
              // onClick={handleDeleteModal}
              className="border w-full border-primary py-3 text-primary fw-500 text-lg rounded-lg text-center flex gap-3 items-center justify-center"
            >
              <RiArrowUpDoubleLine color="#710AFCB2" />
              Buy Token
            </button>
            <button
              // onClick={handleDeleteModal}
              className="border w-full border-primary py-3 text-primary fw-500 text-lg rounded-lg text-center flex gap-3 items-center justify-center"
            >
              <RiArrowDownDoubleLine color="#710AFCB2" />
              Sell Token
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-[20px] p-5 bg-white dark:bg-black mt-10">
        <div className="flex justify-between items-center">
          <p className="unbound text-[#06052A] fw-600 text-xl">
            All Transactions
          </p>
          <div className="flex items-center gap-x-4">
            <div>
              <input
                type="text"
                className="border rounded-[10px] h-9 w-[171px] px-3 border-[#2C3E50]"
                placeholder="Search"
              />
            </div>
            <div className="flex items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
              <p className="text-[#2C3E50] fs-300">
                <span className="fs-200 text-[#9094A2]">Sort:</span> Newest
                First
              </p>
              <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
            </div>
            <div className="flex items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
              <p className="text-[#2C3E50] fs-300">Export As</p>
              <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
            </div>
          </div>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="table-auto  min-w-[1000px]">
            <thead>
              <tr>
                <td className="unbound pl-4 p-1 pb-2">#</td>
                <td className="unbound p-1 pb-2">Transaction ID</td>
                <td className="unbound p-1 pb-2">Type</td>
                <td className="unbound p-1 pb-2">Date</td>
                <td className="unbound p-1 pb-2"> Amount</td>
                <td className="unbound p-1 pb-2">Status </td>
                <td className="unbound p-1 pb-2">Action</td>
              </tr>
            </thead>
            <tbody className="">
              {/* {[].map((item, i) => (
                <tr className="odd:bg-[#E9EBFB] odd:dark:bg-black" key={i}>
                  <td className={`p-2 py-4 pl-4`}>{`0${i + 1}`}</td>
                  <td className="p-2 py-4">Tesla Model Y</td>
                  <td className="pl-1 p-2 py-4">
                    <img
                      src={item.img}
                      alt="purchase-image"
                      className="w-[70px]"
                    />
                  </td>
                  <td className="p-2 py-4">Digital Asset</td>
                  <td className="p-2 py-4">1-11-24</td>
                  <td className="p-2 py-4 ">
                    {" "}
                    <p className="text-green bg-lightGreen border border-[#2EF91333] rounded-lg px-5 py-3 text-center w-fit">
                      Completed
                    </p>
                  </td>
                  <td className="p-2 py-4 pl-4">
                    <PiDotsThreeOutlineFill className="cursor-pointer" />
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
      <Dialog handler={handleModal} open={modal} size="sm">
        <div className="p-6 text-black">
          <div className="flex items-center justify-between">
            <h4>Withdrawal from Wallet </h4>
            <IoClose
              onClick={handleModal}
              size={30}
              className=" text black dark:text-white"
            />
          </div>
          <p className="fw-600">Fill in form to process your withdrawal</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col w-full">
              <Controller
                name="amount"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Enter withdrawal amount",
                  },
                }}
                render={({ field }) => (
                  <TextInput
                    type={InputType.text}
                    label="Amount"
                    placeholder="Enter amount to withdraw"
                    error={errors.amount?.message}
                    {...field}
                    ref={null}
                  />
                )}
              />
              <p className=" text-[#0461B6] text-xs fw-400 ml-auto">
                Available Amount : N200,000
              </p>
            </div>

            <div className="mb-10">
              <p className="fw-600">Deposit To :</p>
              {bankAccounts?.map((item: IBankDetails) => (
                <div
                  key={item.id}
                  onClick={() => handleSelectedBank(item)}
                  className={`border-[2px] rounded-[15px] p-4 gap-5 flex items-center mt-2 cursor-pointer ${
                    item.accountNumber === selectedBank?.accountNumber
                      ? "border-primary"
                      : " border-gray-600"
                  }`}
                >
                  <div className="bg-[#E0C8FF] rounded-[10px] w-[51px] h-[47px] justify-center flex items-center">
                    <RiBankFill className="text-primary" size={23} />
                  </div>
                  <div>
                    <p className="text-base unbound">{item.bankName}</p>
                    <p className="text-[#A2A1A1] ">{item.accountNumber}</p>
                  </div>
                  <MdOutlineRadioButtonChecked
                    className={` ml-auto ${
                      item.accountNumber === selectedBank?.accountNumber
                        ? " text-primary"
                        : "text-gray-600"
                    }`}
                    size={23}
                  />
                </div>
              ))}
            </div>
            <Button
              title={isRequesting ? <BeatLoader /> : "Proceed"}
              withArrows
              size={14}
              disabled={!isValid || isRequesting}
              style={{ height: 50 }}
            />
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default TransactionsScreen;
