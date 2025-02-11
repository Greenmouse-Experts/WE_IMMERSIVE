

const cards = [
    {
        title:"Exposure to Top Clients",
        content:"Connect with global brands and companies seeking fresh talent. Showcase your work to land freelance gigs, full-time roles, or creative collaborations."
    },
    {
        title:" Offer Your Services",
        content:"Provide design, illustration, photography, and more. Define your terms, timelines, and pricing—you’re in control."
    },
    {
        title:"Sell Digital Assets",
        content:"Monetize your creativity by selling downloadable assets such as templates, mockups, brushes, and more. Set your price and licensing terms to match your value."
    }

]

const Card2 = () => {
  return (
    <div className="md:flex justify-between mt-5">
        {cards.map((card, index) => (
            <div key={index} className="rounded-[15px] md:w-[30%] mt-[10%] md:mt-[1%] md:h-[227px] p-8 shadow-md  border-none dark:bg-[#131313]">
                <p className="unbound mb-7 text-[14px] md:text-[15px] text-center md:text-left">{card.title}</p>
                <p className="text-[12px] md:text-[15px] text-[#747373] text-center md:text-left">{card.content}</p>
            </div>
        ))}
    </div>
  )
}

export default Card2