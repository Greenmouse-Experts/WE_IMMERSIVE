export default function PromotionBanner() {
    return (
        <div className="h-[31px] flex items-center relative justify-center p-5"
            style={{ background: 'linear-gradient(0deg, #2540D8, #2540D8), linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4))' }}>
            <img className="absolute top-0 left-0 w-full h-full object-cover opacity-20" src="https://res.cloudinary.com/do2kojulq/image/upload/v1738449867/645d0b6b680d7b138a73e4bf7ecb9cf0_ct6nwy.png" alt="announcement" />
            <div className="absolute top-0 left-0 w-full h-full"
                style={{ background: 'linear-gradient(320deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 34.14%, rgba(0, 0, 0, 0.6) 74.12%, rgba(0, 0, 0, 0) 100%)' }}></div>
            <div className="w-full justify-center text-center absolute flex text-white text-xs md:text-base animate-fade-in">
                {/* Announcement Text */}
                📢 Just Announced : Get full access to WEimerssive Pro Subscription for 1 Month FREE!
            </div>
        </div>
    );
}
