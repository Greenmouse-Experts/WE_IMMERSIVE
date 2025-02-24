
import star from "../../../assets/star 2.png";
import cash from "../../../assets/cash 2.png";
import service from "../../../assets/service.png";
const cards = [
    {
        icon:star,
        title:"Exposure to Top Clients",
        content:"Connect with global brands and companies seeking fresh talent. Showcase your work to land freelance gigs, full-time roles, or creative collaborations."
    },
    {
        icon:service,
        title:" Offer Your Services",
        content:"Provide design, illustration, photography, and more. Define your terms, timelines, and pricing—you’re in control."
    },
    {
        icon:cash,
        title:"Sell Digital Assets",
        content:"Monetize your creativity by selling downloadable assets such as templates, mockups, brushes, and more. Set your price and licensing terms to match your value."
    }

]

const Card2 = () => {
  return (
    <div className="md:flex md:gap-3 lg:justify-between mt-5">
        {cards.map((card, index) => (
            <div key={index} className="rounded-[15px] w-[100%] md:w-[35%] xl:w-[30%] mt-[10%] md:mt-[1%] h-[227px] md:h-[227px] lg:h-[227px] p-8 md:px-3 md:py-8 xl:p-8 border border-2 dark:bg-[#131313]">
                <div className="flex items-center justify-center lg:justify-start mt-6 mb-4">
                    <p className="unbound text-[14px] lg:text-[15px] text-center lg:text-left">{card.title}</p>
                    <img src={card.icon} width="25px" alt="img" className="ml-3"/>
                </div>
                <p className="text-[12px] md:text-[14px] xl:text-[15px] text-[#747373] text-center lg:text-left">{card.content}</p>
            </div>
        ))}
    </div>
  )
}

export default Card2