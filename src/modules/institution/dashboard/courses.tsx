import { useState } from "react";
import HeaderSection from "./header-section";
import { MdOutlineArrowDropDown } from "react-icons/md";
import econImg from "../../../assets/econ.png";
import chemImg from "../../../assets/chem.png";
import phyImg from "../../../assets/phys.png";
import engImg from "../../../assets/eng.png";
import metryImg from "../../../assets/metry.png";
import mathImg from "../../../assets/math.png";
import geoImg from "../../../assets/geog.png"
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FaSearch } from "react-icons/fa"; 

const Courses = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const options = [
        'View/Edit',
        'Add Product',
        'Delete',
    ];

    const ITEM_HEIGHT = 30;
    const open = Boolean(anchorEl);

    const data = [
        {
            name: "Chemistry 101",
            image:chemImg,
            price:"2000",
            publishedOn:"3-10-24",
            copiesSold:"5",
            coursesIncome:"10,000"
        },
        {
            name: "Physics 101",
            image:phyImg,
            price:"3000",
            publishedOn:"7-08-23",
            copiesSold:"15",
            coursesIncome:"30,000"
        },
        {
            name: "Geography 101",
            image:geoImg,
            price:"7500",
            publishedOn:"8-04-22",
            copiesSold:"50",
            coursesIncome:"300,000"
        },
        {
            name: "English 101",
            image:engImg,
            price:"1200",
            publishedOn:"14-02-20",
            copiesSold:"20",
            coursesIncome:"80,500"
        },
        {
            name: "Maths 101",
            image:mathImg,
            price:"4000",
            publishedOn:"28-06-22",
            copiesSold:"45",
            coursesIncome:"150,000"
        },
        {
            name: "Geometry 101",
            image:metryImg,
            price:"7000",
            publishedOn:"6-05-23",
            copiesSold:"33",
            coursesIncome:"95,000"
        },
        {
            name: "Economics 101",
            image:econImg,
            price:"8500",
            publishedOn:"6-03-21",
            copiesSold:"42",
            coursesIncome:"105,000"
        },
      ];

      const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };


    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAction = () => {
        // option === "Delete" && setDelModal(true)
        // option === "Add Product" && setOpenAddNewProductOptionModal(true)
        // if (option === "View/Edit") {
        //     setIsModalOpen(true)
        //     setEditOrAddstore("edit")
        // }
        // setAnchorEl(null);
    }

  return (
    <div>
        <HeaderSection/>
        <div className="mt-6">
                <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px]">
                <div className="flex flex-col md:flex-row lg:flex-row justify-between mt-5 mb-14 items-center">
                    <div className="flex flex-col md:flex-col lg:flex-row items-center">
                        <p className="unbound text-[#06052A] text-[24px] md:text-[17px]">Created Courses</p>
                        <div className="flex lg:ml-11 mt-5 mb-5 md:mt-0 md:mb-0 lg:mt-0 md:mb-0 items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
                            <p className="text-[#2C3E50] fs-300">
                                <span className="text-[#2C3E50] fs-200">Sort:</span> Newest
                                First
                            </p>
                            <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row lg:flex-row items-center gap-x-4">
                    <div className="relative">
                        <FaSearch className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-full text-sm
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="flex items-center mt-5 mb-5 md:mt-2 md:mb-2 lg:mt-0 lg:mb-0 gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
                        <p className="text-[#2C3E50] fs-300">Export As</p>
                        <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
                    </div>
                    <button
                        type="button"
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold
                                px-4 py-2 rounded-md shadow-md hover:from-indigo-600 hover:to-purple-700
                                transition-colors md:text-[12px]"
                    >
                        Add New Course
                    </button>
                </div>
                </div>
                <div className="mt-6 overflow-x-auto w-full">
                <table className="table-auto w-full">
                    <thead>
                    <tr>
                        <td className="unbound pl-4 p-1 pb-2">#</td>
                        <td className="unbound p-1 pb-2 whitespace-nowrap">Courses Name</td>
                        <td className="unbound p-1 pb-2">Image</td>
                        <td className="unbound p-1 pb-2">Price</td>
                        <td className="unbound p-1 pb-2 whitespace-nowrap">Published On</td>
                        <td className="unbound p-1 pb-2 whitespace-nowrap">Copies Sold</td>
                        <td className="unbound p-1 pb-2 whitespace-nowrap">Courses Income</td>
                        <td className="unbound p-1 pb-2">Action</td>
                    </tr>
                    </thead>
                    <tbody className="">
                    {data.map((item, i) => (
                        <tr className="odd:bg-[#E9EBFB] odd:dark:bg-black" key={i}>
                        <td className={`p-2 py-4 pl-4`}>{`0${i + 1}`}</td>
                        <td className="p-2 py-4">{item.name}</td>
                        <td className="p-2 py-4"><img src={item.image} width="50px" alt="img"/></td>
                        <td className="p-2 py-4">{item.price}</td>
                        <td className="p-2 py-4 text-center md:text-center lg:text-left">{item.publishedOn}</td>
                        <td className="p-2 py-4 text-center md:text-center lg:text-left">{item.copiesSold}</td>
                        <td className="p-2 py-4 text-center md:text-center lg:text-left   ">{item.coursesIncome}</td>
                        <td className="p-2 py-4 pl-4">
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={(event) => handleClick(event)}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            slotProps={{
                                paper: {
                                    style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: '10ch',
                                        boxShadow: '0px 0px 4px rgba(126, 126, 126, 0.2)'
                                    },
                                },
                            }}
                        >
                            {options.map((option, idx) => (
                                <MenuItem
                                    key={idx}
                                    onClick={() => handleAction()}
                                    sx={{
                                        fontSize: '10px',
                                    }}
                                >
                                    <li>
                                        {option}
                                    </li>
                                </MenuItem>
                            ))}
                        </Menu>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Courses;