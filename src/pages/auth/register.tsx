import { Link } from "react-router-dom";
import FormContainer from "../../modules/auth/form-container";
import RegisterForm from "../../modules/auth/register-form";
import SocialLogin from "../../modules/auth/social-login";
import { useState } from "react";
import RegisterProfile from "../../modules/auth/register-profile";
import StudentForm from "../../modules/auth/student-form";
import CreatorForm from "../../modules/auth/creator-form";
import InstitutionForm1 from "../../modules/auth/institution-form1";
import InstitutionForm2 from "../../modules/auth/institution-form2";

const UserRegister = () => {
  const [activeForm, setActiveForm] = useState(0);
  const [accountType, setAccountType] = useState("")
  const handleProceed = () =>{
    setActiveForm(3)
  }
  return (
    <div className={`w-full ${activeForm === 0? "md:w-[700px]" : "md:w-[500px]"}`}>
      <div className="w-full">
        <FormContainer>
          <>
            {activeForm === 0 && <RegisterProfile setActiveForm={setActiveForm} setAccountType={setAccountType} handleProceed={handleProceed}/> }
            {activeForm === 1 && (
              <div>
                <p className="unbound fw-500 lg:text-lg mb-4">Get Started 🚀</p>
                <RegisterForm />
                <div>
                  <SocialLogin />
                </div>
              </div>
            )}
             {accountType === "general_user" && activeForm === 3  && (
              <div>
                 <p className="unbound fw-500 lg:text-lg mb-4">Get Started 🚀</p>
                <RegisterForm />
              </div>
            )}
            {accountType === "student" && activeForm === 3  && (
              <div>
                <p className="unbound fw-500 lg:text-lg mb-4">You are signing up a <br/>Student 🧑‍💻</p>
                <StudentForm />
              </div>
            )}
             {accountType === "creators" && activeForm === 3  && (
              <div>
                <p className="unbound fw-500 lg:text-lg mb-4">You are signing up a <br/>Creator 🖼</p>
                <CreatorForm />
              </div>
            )}
            {accountType === "institution" && activeForm === 3  && (
              <div>
                <p className="unbound fw-500 lg:text-lg mb-4">You are signing up an <br/>Institution  🏦</p>
                <div className="flex flex-row justify-between ">
                  <p className="text-[#1D9CD7] fw-400 text-lg">Institution Details</p>
                  <p className="text-[#1D9CD7] fw-400 text-lg">1/2</p>
                </div>
                <InstitutionForm1  setActiveForm={setActiveForm}/>
              </div>
            )}
              {accountType === "institution" && activeForm === 4  && (
              <div>
                <p className="unbound fw-500 lg:text-lg mb-4">You are signing up an <br/>Institution 🏦</p>
                <div className="flex flex-row justify-between ">
                  <p className="text-[#1D9CD7] fw-400 text-lg">Administrator Information</p>
                  <p className="text-[#1D9CD7] fw-400 text-lg">2/2</p>
                </div>
                <InstitutionForm2 />
              </div>
            )}
          </>
        </FormContainer>
      </div>
      <div className="mt-8 pb-8">
        <p className="inter text-center text-[#343333]">
          Already have an account ?{" "}
          <Link to={"/auth/login"} className="text-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserRegister;
