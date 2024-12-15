import { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthMiddleware = ({ children, role, allowedRoles }: any) => {
  const [showModal, setShowModal] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const currentPage = location.pathname.split("/");

  if (!allowedRoles.includes(role)) {
    // Show the modal if the role is not allowed
    return (
      <>
        {/* Modal for unauthorized access */}
        <Dialog open={showModal} handler={() => setShowModal(false)} size="sm">
          <DialogHeader>Access Restricted</DialogHeader>
          <DialogBody divider>
            You are currently logged in as a <b>{role}</b>. This page is
            restricted to {currentPage[1]} only. If you'd like to access this
            page, please log out and log in with a {currentPage[1]} account.
          </DialogBody>
          <DialogFooter>
            <Button
              variant="gradient"
              color="blue"
              onClick={() => {
                [setShowModal(false), navigate(-1)];
              }}
            >
              Cancel
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  }

  // If role is allowed, render the children (protected content)
  return children;
};

export default AuthMiddleware;
