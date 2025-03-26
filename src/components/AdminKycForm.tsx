import { BeatLoader } from "react-spinners";
import Button from "./ui/Button";
import { UserAdminData } from "../types/userDetails.types";

const AdminKycForm = ({ userDetails }: { userDetails: UserAdminData }) => {
  const isUpdating = false;

  const kycData = userDetails.kyc_docs[0];

  return (
    <div className=" w-[100%]">
      <div className="px-0 bg-white rounded-[20px] p-2 md:px-5 md:py-6">
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
                      <img src={kycData?.documentUrl} alt="" className="w-full h-full object-cover" />
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
                title={isUpdating ? <BeatLoader /> : "Decline"}
                style={{ width: "100%" }}
              />
              <Button
                title={isUpdating ? <BeatLoader /> : "Approve KYC"}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminKycForm;
