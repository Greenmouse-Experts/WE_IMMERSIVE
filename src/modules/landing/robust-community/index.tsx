import { FaStar } from "react-icons/fa6"
import Tag from "../../../components/ui/tag"
import RobustGrid from "./robust-grid"

const RobustCommunity = () => {
  return (
    <div className="py-12">
        <div className="box">
            <div>
                <div className="flex justify-center">
                    <Tag text="WEimmersive"/>
                </div>
                {/* header text */}
                <div className="relative lg:w-[60rem] lg:h-[149px] mx-auto mt-7 bg-[url('https://res.cloudinary.com/do2kojulq/image/upload/v1728573494/WE%20Immersive/Group_1000005667_sn1xek.png')] lg:bg-fit">
                    <div className="lg:w-10/12 mx-auto text-center">
                        <p className="unbound fw-500 text-2xl lg:text-4xl">Creating a robust community of Creators and Consumers</p>
                    </div>
                    <div className="mt-6 lg:mt-9 flex items-center justify-center gap-x-3">
                        <img src="https://res.cloudinary.com/do2kojulq/image/upload/v1728573711/WE%20Immersive/Group_48097562_1_q13xbc.png" alt="profiles" className="w-[95px]" />
                        <div>
                            <p className="text-[#696767]">2M+ Active Users</p>
                            <div className="flex gap-x-2">
                                <FaStar className="text-[#FFD154]"/>
                                <FaStar className="text-[#FFD154]"/>
                                <FaStar className="text-[#FFD154]"/>
                                <FaStar className="text-[#FFD154]"/>
                                <FaStar className="text-[#FFD154]"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* service grid */}
                <div>
                    <RobustGrid/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RobustCommunity