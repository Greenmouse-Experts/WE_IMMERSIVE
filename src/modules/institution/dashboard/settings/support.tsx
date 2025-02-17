import { FaApple, FaAndroid, FaBlackberry, FaBellSlash} from "react-icons/fa";
const Support = () => {


const cards = [
    {
        icon:<FaApple/>,
        title:"Live Chat"
    },
    {
        icon:<FaAndroid/>,
        title:"Email Us"
    },
    {
        icon:<FaBlackberry/>,
        title:"Call Us"
    },
    {
        icon:<FaBellSlash/>,
        title:"FAQs"
    },
]




  return (
    <div className="min-h-screen w-[100%]">
      <main className="px-0 bg-white rounded-[20px] md:px-4 lg:px-4 py-8 flex flex-col md:flex-row gap-6">
        <section className="w-[100%] p-3">
            <h1 className="unbound font-[400]">Support</h1>
            <div className="flex flex-col md:flex-row lg:flex-row md:gap-1 lg:gap-0 items-center justify-between mt-11">
                {
                    cards.map((card, index) => (
                        <div key={index} className="flex flex-col mt-4 items-center justify-center rounded-[15px] w-[200px] md:h-[118px] h-[169px] lg:h-[169px] bg-[#E9EBFB]">
                            <div className="text-[#710AFC] text-[27px] md:text-[20px] bg-[#E0C8FF] w-[57px] h-[53px] md:w-[40px] md:h-[40px] lg:w-[57px] lg:h-[53px] flex justify-center items-center rounded-[8px]" >{card.icon}</div>
                            <p className="text-[18px] font-[400] text-[#696767] mt-3 md:text-[15px] lg:text-[18px]">{card.title}</p>
                        </div>
                    ))
                }
            </div>
        </section>
      </main>
    </div>
  )
}

export default Support;




