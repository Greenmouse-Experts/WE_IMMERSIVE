import { useState } from "react"
import { Trash2, MoreVertical, Image, FileText, Video, Music, File, BookOpen, Clipboard } from 'lucide-react';
import FormModal from './formModal';

const AddLesson: React.FC = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const addLesson = () => {
    setIsOpen(true)
  } 

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="space-y-8 mx-auto">
        <div>
            <h2 className="md:text-[24px] xl:text-[24px] font-bold text-[#06052A]">
                Module 1 : Lesson 1
            </h2>
            <p className="text-[#6C6969] md:text-[18px] xl:text-[18px]">
                Lets add content to this lesson 
            </p>
        </div>
        <div
          className="flex flex-col md:flex-row md:gap-2 xl:gap-6 rounded-2xl"
        >
          <div className="space-y-4 bg-white w-[100%] md:w-[1000px] xl:w-[1000px] xl:px-11 xl:pt-11 pb-[10%] md:shadow-lg">
            {/* Lesson Card */}
            <div className="rounded-[20px] shadow-md mb-[8%]">
              <div className="flex justify-between items-center p-6 bg-[#E9EBFB] rounded-t-[20px]">
                <h3 className="font-[400] md:text-[20px] xl:text-[20px]">Lesson 1</h3>
                <MoreVertical className="text-gray-400 cursor-pointer" />
              </div>
              <div className='bg-white text-center py-[5%] px-2'>
                <p className="md:text-[20px] xl:text-[20px] font-[400]">
                    Turn your knowledge Impact – create and share your course!
                </p>
                <button
                    className="unbound w-[211px] mx-auto mt-8 bg-gradient-to-r from-[#6F0AFF] to-[#1D9CD7] text-white text-[12px] md:text-[13px] xl:text-[13px] py-2 md:px-4 md:py-4 rounded-lg shadow"
                    onClick={addLesson}
                >
                    Add Content &raquo;
                </button>
              </div>
            </div>

            {/* Delete Module Button */}
            <button
              className="flex items-center gap-2 text-red-500 mx-auto md:mx-0"
            >
              <Trash2 className="w-5 h-5" />
              Delete Module
            </button>
          </div>

          {/* Right: Add Content Panel */}
          <div className="w-[100%] lg:w-[411px] xl:w-[411px] bg-white rounded-2xl md:shadow-lg p-4 space-y-4">
            <h3 className="unbound font-[400] md:text-[20px] xl:text-[20px]">Add Content</h3>

            <div className='pt-5'>
                <h3 className="font-[600] text-[14px]">Content</h3>
                <div className="grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
                {[
                    { label: 'Image', icon: <Image /> },
                    { label: 'Text', icon: <FileText /> },
                    { label: 'Video', icon: <Video /> },
                    { label: 'Audio', icon: <Music /> },
                    { label: 'PDF', icon: <File /> },
                ].map((item) => (
                    <button
                    key={item.label}
                    className="flex flex-col text-[#5B5959] items-center gap-1 py-2 border border-[#D9D9D9] rounded-lg hover:border-[#6619FB] hover:shadow-xl transition"
                    >
                    {item.icon}
                    <span className="text-[18px] font-[400] mt-3">{item.label}</span>
                    </button>
                ))}
                </div>
                </div>

            {/* Educational Tools */}
            <div className='pt-5'>
                <h3 className="font-[600] text-[14px]">Educational Tools</h3>
                <div className="grid grid-cols-2 gap-4 mt-4 text-[#5B5959] text-[18px] lg:text-[14px] xl:text-[18px]">
                    <button
                        className="flex flex-col items-center gap-1 p-2 border rounded-lg hover:border-[#6619FB] hover:shadow-xl transition"
                    >
                        <BookOpen />
                        <span className="font-[400] mt-3">Quiz</span>
                    </button>
                    <button
                        className="flex flex-col items-center gap-1 p-2 border rounded-lg hover:border-[#6619FB] hover:shadow-xl transition"
                    >
                        <Clipboard />
                        <span className="font-[400] mt-3">Assignments</span>
                    </button>
                </div>
            </div>
          </div>
        </div>
        {
          isOpen && <FormModal isOpen={isOpen} onClose={onClose} />
        }
    </div>
  );
};

export default AddLesson;
