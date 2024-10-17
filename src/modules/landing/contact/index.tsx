import PageBanner from "../../../components/reusables/page-banner";
import GetInTouch from "./get-in-touch";

const ContactIndex = () => {
  return (
    <div>
      <div>
        <PageBanner
          image="https://res.cloudinary.com/do2kojulq/image/upload/v1729175836/WE%20Immersive/image_23_1_xl5swe.png"
          headText="Contact Us"
          bodyText="Get in touch with us through these means if you have any inquiries and more"
        />
      </div>
      <div>
        <GetInTouch />
      </div>
      <div className="section">
        <div className="box">
            <div className="2xl:w-10/12 mx-auto grid lg:grid-cols-3 gap-12">
                <div className="bg-contact-1 relative rounded-[20px] w-full flex h-[170px] items-center">
                    <div className="absolute left-0 -top-16 w-full flex justify-center">
                    <img src="https://res.cloudinary.com/do2kojulq/image/upload/v1729175836/WE%20Immersive/image_75_az5lbi.png" alt="hand-phone" className="w-28" />
                    </div>
                    <div className="w-full">
                        <p className="unbound fw-500 text-center text-white">Help Lines</p>
                        <div className="flex justify-center mt-2">
                            <ul className="flex gap-x-2 items-center">
                                <li className="text-white">0700 000 0000</li>
                                <li className="text-white">0700 000 0000</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="relative bg-contact-2 rounded-[20px] w-full flex h-[170px] items-center">
                <div className="absolute left-0 -top-[46px] w-full flex justify-center">
                    <img src="https://res.cloudinary.com/do2kojulq/image/upload/v1729175836/WE%20Immersive/image_74_u8th7n.png" alt="hand-phone" className="w-28" />
                    </div>
                    <div className="w-full">
                        <p className="unbound fw-500 text-center !text-black">Email</p>
                        <div className="flex justify-center mt-2">
                            <ul className="flex gap-x-2 items-center">
                                <li className="text-black">weimmersive@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="relative bg-contact-3 rounded-[20px] w-full flex h-[170px] items-center">
                <div className="absolute left-0 -top-[50px] w-full flex justify-center">
                    <img src="https://res.cloudinary.com/do2kojulq/image/upload/v1729175836/WE%20Immersive/image_76_lszro4.png" alt="hand-phone" className="w-28" />
                    </div>
                    <div className="w-full">
                        <p className="unbound fw-500 text-center text-white">Address</p>
                        <div className="flex justify-center mt-2">
                            <ul className="flex gap-x-2 items-center">
                                <li className="text-white">Lekki, Lagos, Nigeria</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactIndex;
