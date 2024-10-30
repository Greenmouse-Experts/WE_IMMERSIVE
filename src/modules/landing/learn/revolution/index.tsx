
const Revolution = () => {
  return (
    <div className="box">
      <div className="section bg-[#F7F8FD] dark:bg-[#131313] rounded-[30px] p-7 lg:p-12">
        <div className="flex justify-center">
          <div className="flex items-center gap-x-2">
            <img
              src="https://res.cloudinary.com/do2kojulq/image/upload/v1728573711/WE%20Immersive/Group_48097562_1_q13xbc.png"
              alt="profiles"
              className="w-20"
            />
            <p className="text-[#6F0AFF] fw-600 fs-500">23k Students</p>
          </div>
        </div>
        <div className="text-center  flex justify-center mt-6">
          <p className="lg:w-9/12 unbound fw-500 text-xl lg:text-5xl lg:leading-[58px]">
            Revolutionising skill acquisition and education.{" "}
          </p>
        </div>
        <div className="mt-5 flex justify-center">
          <p className="text-center text-[#9A9999] w-6/12">
            Get access to educational materials, completion certificates, and
            more. Taught by top tutors from leading institutions and
            organisations.
          </p>
        </div>
        <div className="mt-12 lg:mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="h-[230px] relative flex items-center rounded-[20px] bg-[#1F86B6]">
            <div className="text-center mt-5">
              <p className="unbound text-white fw-500 text-lg">
                Learn Anything
              </p>
              <p className="mt-2 px-4 text-[#D0CDCD]">
                Explore any course and topic, take prerequisites, and advance
                your skills
              </p>
            </div>
            <div className="absolute left-0 flex justify-center w-full -top-[60px]">
              <img
                src="https://res.cloudinary.com/do2kojulq/image/upload/v1730296077/WE%20Immersive/image_80_gcpntz.png"
                alt="books"
                className="w-[110px]"
              />
            </div>
          </div>
          <div className="h-[230px] relative flex items-center rounded-[20px] bg-[#553CF0]">
            <div className="text-center mt-5">
              <p className="unbound text-white fw-500 text-lg">
                VR Compatibility
              </p>
              <p className="mt-2 px-4 text-[#D0CDCD]">
                Enjoy immersive learning of courses with ability to access them
                in virtual reality
              </p>
            </div>
            <div className="absolute left-0 flex justify-center w-full -top-[60px]">
              <img
                src="https://res.cloudinary.com/do2kojulq/image/upload/v1730296077/WE%20Immersive/image_14_lidrek.png"
                alt="books"
                className="w-[120px]"
              />
            </div>
          </div>
          <div className="h-[230px] relative flex items-center rounded-[20px] bg-[#1F86B6]">
            <div className="text-center mt-5">
              <p className="unbound text-white fw-500 text-lg">
                Flexible Learning
              </p>
              <p className="mt-2 px-4 text-[#D0CDCD]">
                Take courses and learn at your own pace as you move between
                multiple courses
              </p>
            </div>
            <div className="absolute left-0 flex justify-center w-full -top-[60px]">
              <img
                src="https://res.cloudinary.com/do2kojulq/image/upload/v1730296077/WE%20Immersive/image_15_f5lue6.png"
                alt="books"
                className="w-[120px]"
              />
            </div>
          </div>
          <div className="h-[230px] relative flex items-center rounded-[20px] bg-[#553CF0]">
            <div className="text-center">
              <p className="unbound text-white fw-500 text-lg">
                Get Certificates
              </p>
              <p className="mt-2 px-4 text-[#D0CDCD]">
                Earn a certificate for every learning program/course that you
                complete
              </p>
            </div>
            <div className="absolute left-0 flex justify-center w-full -top-[45px]">
              <img
                src="https://res.cloudinary.com/do2kojulq/image/upload/v1730296076/WE%20Immersive/image_16_rwsbco.png"
                alt="books"
                className="w-[100px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Revolution