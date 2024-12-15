import { useDispatch } from "react-redux";
import { weImmersiveUser } from "../reducers/usersSlice";
import { useNavigate } from "react-router-dom";

export function useLogOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Return a callable function for logout
  return () => {
    dispatch(weImmersiveUser({})); // Clear user data
    localStorage.removeItem("we-immersiveUser"); // Clear local storage
    navigate("/"); // Redirect to home or login
  };
}
