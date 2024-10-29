import { Link } from "react-router-dom";
import FormContainer from "../../modules/auth/form-container";
import RegisterForm from "../../modules/auth/register-form";
import SocialLogin from "../../modules/auth/social-login";
import { useState } from "react";
import RegisterProfile from "../../modules/auth/register-profile";

const UserRegister = () => {
  const [activeForm, setActiveForm] = useState(0);
  return (
    <div className={`w-full ${activeForm === 0? "md:w-[700px]" : "md:w-[500px]"}`}>
      <div className="w-full">
        <FormContainer>
          <>
            {activeForm === 0 && <RegisterProfile setActiveForm={setActiveForm}/>}
            {activeForm === 1 && (
              <div>
                <p className="unbound fw-500 lg:text-lg mb-4">Get Started 🚀</p>
                <RegisterForm />
                <div>
                  <SocialLogin />
                </div>
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
