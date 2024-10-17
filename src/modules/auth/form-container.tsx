import { FC } from "react";

interface Props {
  children: JSX.Element;
}
const FormContainer: FC<Props> = ({ children }) => {
  return (
    <div className="bg-white dark:bg-[#010B18] w-full rounded-[30px] min-h-[200px] form-shadow p-5 lg:p-7">
      {children}
    </div>
  );
};

export default FormContainer;
