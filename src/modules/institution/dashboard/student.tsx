import { useState } from "react"
import HeaderSection from "./header-section";
import { MdOutlineArrowDropDown } from "react-icons/md";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FaSearch } from "react-icons/fa"; 

const Student = () => {
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
          name: "Franka Yusuf",
          id:"123",
          phoneNo:"+23490674321",
          points:"500.00",
          status:"Active"
        },
        {
          name: "Zeb Phoebe",
          id:"345",
          phoneNo:"+2347089647543",
          points:"500.00",
          status:"Active"
        },
        {
          name: "Chukka Uzo",
          id:"907",
          phoneNo:"+2348067543212",
          points:"70.00",
          status:"Active"
        },
        {
          name: "Frank Hamzy",
          id:"354",
          phoneNo:"+2349089537543",
          points:"900.00",
          status:"Inactive"
        },
        {
          name: "Iwa Tay",
          id:"960",
          phoneNo:"+2347143568906",
          points:"25.00",
          status:"active"
        },
        {
          name: "Iwa Tay",
          id:"411",
          phoneNo:"+2348132564389",
          points:"200.00",
          status:"Inactive"
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
                        <p className="unbound text-[#06052A] text-[24px] md:text-[18px]">All Students</p>
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
                                    px-4 py-2 md:text-[12px] rounded-md shadow-md hover:from-indigo-600 hover:to-purple-700
                                    transition-colors"
                        >
                            Add New Student 
                        </button>
                    </div>
                </div>
                <div className="mt-6 overflow-x-auto w-full">
                <table className="table-auto w-full">
                    <thead>
                    <tr>
                        <td className="unbound pl-4 p-1 pb-2">#</td>
                        <td className="unbound p-1 pb-2 whitespace-nowrap">Student Name</td>
                        <td className="unbound p-1 pb-2 text-center md:text-center lg:text-left">ID</td>
                        <td className="unbound p-1 pb-2">Phone Number</td>
                        <td className="unbound p-1 pb-2 text-center md:text-center lg:text-left">Email</td>
                        <td className="unbound p-1 pb-2">Points</td>
                        <td className="unbound p-1 pb-2 text-center md:text-center lg:text-left">Status</td>
                        <td className="unbound p-1 pb-2">Action</td>
                    </tr>
                    </thead>
                    <tbody className="">
                    {data.map((item, i) => (
                        <tr className="odd:bg-[#E9EBFB] odd:dark:bg-black" key={i}>
                        <td className={`p-2 py-4 pl-4`}>{`0${i + 1}`}</td>
                        <td className="p-2 py-4">{item.name}</td>
                        <td className="p-2 py-4">{item.id}</td>
                        <td className="p-2 py-4">{item.phoneNo}</td>
                        <td className="p-2 py-4">testmail@gmail.com</td>
                        <td className="p-2 py-4">{item.points}</td>
                        <td className="p-2 py-4 "><span className={`py-2 px-8 rounded-[8px] ${item.status == "Active" ? "text-[#249B2C] bg-[#D4F9CE]" : "text-[#F91313] bg-[#F9CECE]"}`}>{item.status}</span></td>
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

export default Student;