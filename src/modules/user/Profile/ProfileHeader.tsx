const ProfileHeader = () => {
    return (
      <div className="relative w-full h-40 md:h-60 bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1739970962/We-Immersive/image_1_vu0tqn.png')" }}>
        
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <button className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md text-gray-700 hover:bg-gray-100">
          Change Cover
        </button>
      </div>
    );
  };
  
  export default ProfileHeader;
  