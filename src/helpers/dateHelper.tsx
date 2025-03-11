import { parseISO, format } from "date-fns";

export const dateFormat = (dateString: any, formatType: any) => {
  const parsedDate = dateString ? parseISO(dateString) : "";
  const formattedDate = parsedDate ? format(parsedDate, formatType) : "";

  return formattedDate;
};

export const todayDate = () => {
  // Get today's date
  const today = new Date();

  // Format the date as "MMM dd, yyyy"
  const formattedDate = format(today, "MMM dd, yyyy");

  return formattedDate;
};
