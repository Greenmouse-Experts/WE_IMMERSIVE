export interface IAdminNewUser {
  id: string;
  name: string;
  email: string;
  type: "user" | "creator" | "student" | "institution";
  createdAt: string; 
  lastLogin: string | null; 
}
