import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}
const AuthBackground: FC<Props> = ({ children }) => {
    const navigate = useNavigate()
  return (
    <div>
      <div className="fixed top-0 left-0 h-screen w-full">
        <div className="auth-gradient bg-cover h-[240px] w-full">
          <div className="auth-gradient-bg bg-cover h-full">
            <div className="box pt-12 lg:pl-12">
              <img src="/logo-white.svg" alt="logo" className="w-24 md:w-36 cursor-pointer" onClick={() => navigate('/')}/>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen flex justify-center">
        <div className="relative z-10 mt-[140px]">{children}</div>
      </div>
    </div>
  );
};

export default AuthBackground;
