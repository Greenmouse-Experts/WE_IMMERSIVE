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

  // Normalize role and allowedRoles for case-insensitive comparison
  const normalizedRole = role?.toLowerCase();
  const normalizedAllowedRoles = allowedRoles.map((r: string) =>
    r.toLowerCase(),
  );

  // TEMPORARILY DISABLED FOR DEBUGGING - Log instead of blocking
  if (!normalizedAllowedRoles.includes(normalizedRole)) {
    console.log("🚫 AuthMiddleware - Role Check:");
    console.log("  - Current Role:", role, "-> normalized:", normalizedRole);
    console.log(
      "  - Allowed Roles:",
      allowedRoles,
      "-> normalized:",
      normalizedAllowedRoles,
    );
    console.log("  - Current Page:", location.pathname);
    console.log("  - ❌ ACCESS DENIED - Role not in allowed list");

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
                setShowModal(false);
                navigate("/");
              }}
            >
              Go Home
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  } else {
    console.log("✅ AuthMiddleware - Access Granted:");
    console.log("  - Role matches allowed roles");
    console.log("  - Proceeding to protected content");
  }

  // If role is allowed, render the children (protected content)
  return children;
};

export default AuthMiddleware;
