import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import modelImg from "../../../assets/modelImg.png";
import blenImg from "../../../assets/blenImg.png";
import photoImg from "../../../assets/photoImg.png";
import corelImg from "../../../assets/corelImg.png";
import lightImg from "../../../assets/lightImg.png";
import uniImg from "../../../assets/uniImg.png"
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FaSearch } from "react-icons/fa"; 

const UploadedStatus = () => {
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
            name: "Tesla Model Y",
            image:modelImg,
            category:"Digital Asset",
            uploadedOn:"3-10-24",
            status:"Approved",
        },
        {
            name: "3D Model",
            image:blenImg,
            category:"Digital Asset",
            uploadedOn:"3-10-24",
            status:"Approved",
        },
        {
            name: "Render 3d",
            image:photoImg,
            category:"Digital Asset",
            uploadedOn:"3-10-24",
            status:"Approved",
        },
        {
            name: "Canva Motion",
            image:corelImg,
            category:"Digital Asset",
            uploadedOn:"3-10-24",
            status:"Pending",
        },
        {
            name: "Dream Weaver",
            image:lightImg,
            category:"Digital Asset",
            uploadedOn:"3-10-24",
            status:"Declined",
        },
        {
            name: "Jupiter Note",
            image:uniImg,
            category:"Digital Asset",
            uploadedOn:"3-10-24",
            status:"Declined",
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
        <div className="mt-6">
                <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px]">
                <div className="flex flex-col md:flex-row lg:flex-row justify-between mt-5 mb-14 items-center">
                    <div className="flex flex-col md:flex-col lg:flex-col xl:flex-row items-center">
                        <p className="unbound text-[#06052A] text-[24px] md:text-[18px]">Upload Status</p>
                        <div className="flex lg:ml-0 xl:ml-11 mt-5 mb-5 md:mt-0 md:mb-0 lg:mt-0 md:mb-0 items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
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
                        Add New Status
                    </button>
                </div>
                </div>
                <div className="mt-6 overflow-x-auto w-full">
                <table className="table-auto w-full">
                    <thead>
                    <tr>
                        <td className="unbound pl-4 p-1 pb-2 text-[12px] md:text-[13px] xl:text-[17px]">#</td>
                        <td className="unbound p-1 pb-2 text-[12px] md:text-[13px] xl:text-[17px]">Name</td>
                        <td className="unbound p-1 pb-2 text-[12px] md:text-[13px] xl:text-[17px]">Image</td>
                        <td className="unbound p-1 pb-2 text-[12px] md:text-[13px] xl:text-[17px]">Category</td>
                        <td className="unbound p-1 pb-2 whitespace-nowrap text-[12px] md:text-[13px] xl:text-[17px]">Uploaded On</td>
                        <td className="unbound p-1 pb-2 text-center md:text-center text-[12px] md:text-[13px] xl:text-[17px] xl:text-left">Status</td>
                        <td className="unbound p-1 pb-2 text-[12px] md:text-[13px] xl:text-[17px]">Action</td>
                    </tr>
                    </thead>
                    <tbody className="">
                    {data.map((item, i) => (
                        <tr className="odd:bg-[#E9EBFB] odd:dark:bg-black" key={i}>
                        <td className="p-2 py-4 pl-4 text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px]">{`0${i + 1}`}</td>
                        <td className="p-2 py-4 whitespace-nowrap text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px]">{item.name}</td>
                        <td className="p-2 py-4 text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px]"><img src={item.image} width="50px" alt="img"/></td>
                        <td className="p-2 py-4 whitespace-nowrap text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px]">{item.category}</td>
                        <td className="p-2 py-4 text-center md:text-center text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px] xl:text-left">{item.uploadedOn}</td>
                        <td className="p-2 py-4 text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px]"><span className={`px-8 py-2 rounded-[5px] ${item.status === "Approved" ? "bg-[#D4F9CE] text-[#249B2C]" : item.status === "Pending" ? "bg-[#F9F1CE] text-[#BEA40E]" : item.status === "Declined" ? "bg-[#F9CECE] text-[#F91313]":""}`}>{item.status}</span></td>
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

export default UploadedStatus;