export default function Loader() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
      <p className="ml-4 text-blue-500">Loading...</p>
    </div>
  );
}
