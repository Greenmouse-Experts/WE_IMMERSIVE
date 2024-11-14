import { GrLocation } from "react-icons/gr"


const JobItem = ({item, i}:any) => {
    console.log(item)
    return (
        <div className='form-shadow  rounded-[30px] p-6 dark:bg-[#15171E]' key={i}>
            <div className='flex items-center gap-3'>
                <img src="https://res.cloudinary.com/do2kojulq/image/upload/v1731573969/D6696853-14FC-467D-A319-F71EAEF7C8CF_kpiduu.png" className='rounded-full w-[106px] h-[106px] border border-[#C4C4C4] object-cover' alt="" />
                <div>
                    <p className='text-sm text-[#696767]'>Eviola & Co.</p>
                    <p className='unbound fw-400 dark:text-white text-lg'>Freelancer 3D Artist</p>
                    <p className='text-lg text text-[#6F0AFF] dark:!text-[#6F0AFF] flex items-center gap-1'> <GrLocation size={18}/> Remote</p>
                </div>
            </div>

            <p className='text-[#676767] mt-7'>We are looking for an experienced 3D artist that can work good under pressure...</p>

            <div className="mt-7">
                <p className="text-[#1D9CD7] dark:!text-[#1D9CD7]">Full-Time</p>

                <div className="flex items-center justify-between py-4 border-t-[2px] border-[#C4C4C4] mt-4">
                    <p className="unbound  fw-400 dark:text-white">N 320,000/month</p>
                    <p className='text-[#676767]'>Posted 27 October</p>
                </div>
            </div>

        </div>
    )
}

export default JobItem