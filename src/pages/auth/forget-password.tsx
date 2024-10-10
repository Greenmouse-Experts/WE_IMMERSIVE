import { Link } from "react-router-dom";
import FormContainer from "../../modules/auth/form-container";
import ForgetForm from "../../modules/auth/forget-form";

const ForgotPassword = () => {
  return (
    <div className="w-full md:w-[500px]">
      <div className="w-full pt-10">
        <FormContainer>
          <div className="mb-3">
            <p className="unbound fw-500 lg:text-lg mb-4">
            Forgot your Password?
            </p>
            <ForgetForm />
          </div>
        </FormContainer>
      </div>
      <div className="mt-12">
        <p className="inter text-center text-[#343333]">
        Remembered password ?{" "}
          <Link to={"/auth/login"} className="text-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
