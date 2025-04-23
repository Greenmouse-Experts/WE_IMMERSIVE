import ContactForm from "./contact-form";

const GetInTouch = () => {
  return (
    <div className="section">
      <div className="box pt-5">
        <div className="grid items-center lg:grid-cols-2 grid-cols-1">
          <div className="">
            <p className="unbound text-xl lg:text-4xl fw-500 lg:w-7/12">
              Get in touch with us today 🚀
            </p>
            <p className="text-[#747373] mt-6 lg:mt-8 lg:w-10/12 lg:leading-[32px]">
              Shoot us an email today and get ready for a friendly reply from
              our awesome team. We&apos;re here to make your WEimmersive
              experience nothing short of amazing!
            </p>
            <div className="mt-6 lg:mt-8 ">
              <img
                src="https://res.cloudinary.com/do2kojulq/image/upload/v1729176858/WE%20Immersive/Group_1171275095_rsft4k.png"
                alt="location"
                className="w-full lg:w-10/12"
              />
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
