import { BeatLoader } from "react-spinners";
import Button from "./ui/Button";
import { UserAdminData } from "../types/userDetails.types";
import { adminKycAction } from "../api/admin";
import { useState } from "react";
import { Dialog } from "@material-tailwind/react";
import TextInput, { InputType } from "./ui/TextInput";
import { toast } from "react-toastify";

const AdminKycForm = ({ userDetails }: { userDetails: UserAdminData }) => {
  const kycData = userDetails?.kyc_docs[0];

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [rejectReason, setRejectReason] = useState("");

  const { mutate: acceptKyc, isPending: isAccepting } = adminKycAction();
  const { mutate: rejectKyc, isPending: isRejecting } = adminKycAction();

  const handleReject = () => {
    if(rejectReason === ""){
      toast.warning("Please enter a reason for rejection");
      handleOpen();
      return;
    }
    rejectKyc(
      {
        kycId: kycData?.id,
        status: "rejected", //approved,  rejected
        reason:
          "This document is past due. Consider upload a valid one. Meek!!!",
      },
      {
        onSuccess: () => {
          handleOpen();
        },
        onError: () => {
          handleOpen();
        },
      }
    );
  };

  const handleAccept = () => {
    acceptKyc({
      kycId: kycData?.id,
      status: "approved", //approved,  rejected
    });
  };

  return (
    <>
      <div className=" w-[100%]">
        <div className="px-0 bg-white dark:bg-[#15171E] rounded-[20px] p-2 md:px-5 md:py-6">
          {/* Settings Tabs */}
          <div className="">
            <p className="unbound text-[16px] font-[400] mb-5">KYC</p>

            {/* Tab Content */}
            <div>
              <div className=" text-[#343333]">
                <p className="mb-2">Verification Documents</p>
                <div className="bg-lightPrimary py-3 px-4 rounded-[10px]">
                  <p className="fw-300 uppercase">{kycData?.documentType}</p>
                </div>

                <div className="flex items-center gap-6 w-full mt-6">
                  <div className="flex-1">
                    <p className="mb-2">Document (Front)</p>
                    <div className="h-[274px]  border-primary border-dashed border rounded-[10px] bg-lightPrimary p-4">
                      <div className=" border-primary border-dashed border rounded-[10px] h-full">
                        <img
                          src={kycData?.documentUrl}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="mb-2">Document (Back)</p>
                    <div className="h-[274px]  border-primary border-dashed border rounded-[10px] bg-lightPrimary p-4">
                      <div className=" border-primary border-dashed border rounded-[10px] h-full">
                        <p>Back Card</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex items-center gap-6">
                <Button
                  altClassName="border border-[#FF5D5D] w-full text-[#FF5D5D] h-[50px] rounded-[9px]"
                  title={isRejecting ? <BeatLoader /> : "Decline"}
                  style={{ width: "100%" }}
                  onClick={handleOpen}
                />
                <Button
                  title={isAccepting ? <BeatLoader /> : "Approve KYC"}
                  style={{ width: "100%" }}
                  onClick={handleAccept}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog className="" open={open} handler={handleOpen} size="md">
        <div className="p-6 bg-white dark:bg-[#15171E] rounded-xl overflow-hidden">
          <div className="mb-5">
            <TextInput
              type={InputType.textarea}
              className="bg-[#E9EBFB] w-full rounded-[10px]"
              value={rejectReason}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setRejectReason(e.target.value)}
            />
          </div>
          <div>
            <Button
              title={isRejecting ? <BeatLoader /> : "Submit"}
              style={{ width: "100%" }}
              onClick={handleReject}
            />
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default AdminKycForm;
