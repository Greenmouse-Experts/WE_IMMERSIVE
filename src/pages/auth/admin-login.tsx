
import FormContainer from "../../modules/auth/form-container";
import AdminLoginForm from "../../modules/auth/admin-login-form";

const AdminLogin = () => {
  return (
    
      <div className="w-full lg:w-[500px]">
        <div className="w-full">
          <FormContainer>
            <div>
              <p className="unbound fw-500 lg:text-lg mb-4">
                Super Admin Login
              </p>
              <AdminLoginForm />
            </div>
          </FormContainer>
        </div>

      </div>
    
   
  );
};

export default AdminLogin;
