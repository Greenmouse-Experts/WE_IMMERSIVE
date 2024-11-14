import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io'
import { IoRadioButtonOffOutline, IoRadioButtonOnSharp } from 'react-icons/io5';
import TextInput, { InputType } from '../../../../components/ui/TextInput';

const JobFilter = () => {

    const [specialtyFilter, setSpecialtyFilter] = useState("All")
    const [toggleSpecial, setToggleSpecial] = useState(true)
    const [toggleLocation, setToggleLocation] = useState(true)

    const [jobTypeFilter, setJobTypeFilter] = useState("")
    const [toggleJobType, setToggleJobType] = useState(true)

    const specialty = [
        "All",
        "Animation",
        "Brand/Graphics",
        "Illustration",
        "3D Modeling",
    ];

    const jobType = [
        "Full-Time",
        "Part-Time",
        "Contract",
        "Remote",
        "Freelance",
    ]


    return (
        <div>
            <div className=''>
                <div className='flex justify-between items-center'>

                    <p className='unbound  fw-300 dark:text-white text-xl'>Specialty</p>
                    <p onClick={() => setToggleSpecial(!toggleSpecial)}><IoIosArrowDown /></p>
                </div>
                {toggleSpecial && <div className='flex flex-col gap-4 mt-5'>
                    {specialty.map((item, i) => (
                        <div className='flex items-center gap-3' key={i} onClick={() => setSpecialtyFilter(item)}>
                            {specialtyFilter === item ? <IoRadioButtonOnSharp color='#710AFC' size={30} />
                                : <IoRadioButtonOffOutline color='#696767' size={30} />}
                            <p className='text-xl' style={{ color: specialtyFilter === item ? "#0E0E0E" : "#696767" }}>{item}</p>
                        </div>
                    ))}
                </div>}
            </div>

            <div className='pt-4 border-t-[2px] border-[#C4C4C4] mt-6'>
                <div className='flex justify-between items-center'>

                    <p className='unbound  fw-300 dark:text-white text-xl'>Location</p>
                    <p onClick={() => setToggleLocation(!toggleLocation)}><IoIosArrowDown /></p>

                </div>
               {toggleLocation && <div>
                    <TextInput
                        placeholder="City, country, location"
                        type={InputType.text}
                        ref={null}
                        className='dark:bg-[#2E2F36] w-full'
                    />
                    <label className='items-center flex gap-3 mt-4 text-[#696767]' htmlFor="checkbox"><input className='h-4 w-4' type="checkbox" name="checkbox" id="checkbox" /> Work Remotely</label>
                </div>}
            </div>

            <div className='pt-4 border-t-[2px] border-[#C4C4C4] mt-6'>
                <div className='flex justify-between items-center'>

                    <p className='unbound  fw-300 dark:text-white text-xl'>Jop Type</p>
                    <p onClick={() => setToggleJobType(!toggleJobType)}><IoIosArrowDown /></p>
                </div>
                {toggleJobType && <div className='flex flex-col gap-4 mt-5'>
                    {jobType.map((item, i) => (
                        <div className='flex items-center gap-3' key={i} onClick={() => setJobTypeFilter(item)}>
                            {jobTypeFilter === item ? <IoRadioButtonOnSharp color='#710AFC' size={30} />
                                : <IoRadioButtonOffOutline color='#696767' size={30} />}
                            <p className='text-xl' style={{ color: jobTypeFilter === item ? "#0E0E0E" : "#696767" }}>{item}</p>
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default JobFilter