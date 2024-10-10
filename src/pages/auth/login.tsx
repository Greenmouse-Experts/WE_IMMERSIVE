import { Link } from "react-router-dom";
import FormContainer from "../../modules/auth/form-container";
import LoginForm from "../../modules/auth/login-form";

const UserLogin = () => {
  return (
    <div className="w-full lg:w-[500px]">
      <div className="w-full">
        <FormContainer>
          <div>
            <p className="unbound fw-500 lg:text-lg mb-4">
              Login to your account
            </p>
            <LoginForm />
          </div>
        </FormContainer>
      </div>
      <div className="mt-12">
        <p className="inter text-center text-[#343333]">
          Are you a new user ?{" "}
          <Link to={"/auth/register"} className="text-primary">
            Create An Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
