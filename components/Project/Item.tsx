import { CiCircleCheck  } from "react-icons/ci";
import { GrInProgress } from "react-icons/gr";
import { IoMdClock } from "react-icons/io";

export default function ProjectItem({cover, title, status, url}: {cover: string, title: string, status: 'Done' | 'In Progress' | 'Start Soon', url?: string}) {
    return (
        <div className='w-1/3
             p-2 sm:p-4
             h-[40vh]
             transition-all
             gap-4
             bg-cover bg-no-repeat bg-center
             flex flex-col justify-end items-start
             duration-400 relative'
             style={{
                 backgroundImage: `url('${cover}')`,
                 cursor: status === 'Done' ? 'pointer' : 'normal'
             }}
             onClick={() => url ? window.open(url, '__blank') : null}
        >
          <div
              className="w-auto h-auto flex flex-col flex-nowrap justify-start
              items-start text-start bg-white p-[5px] rounded-md gap-[1px]
              bg-clip-padding backdrop-blur-sm bg-opacity-10 z-10
              "
          >
            <h3 className="text-base sm:text-xl text-white font-extralight">
              {title}
            </h3>
            <div className="w-full h-full flex flex-row flex-nowrap gap-2 justify-start items-start">
                <h3 className="text-white text-sm sm:text-base font-extralight">
                   {status} 
                </h3>
                {
                    status === 'Done' ?
                    <CiCircleCheck size={20} color={"white"}/>
                    : status === 'In Progress' ?
                    <GrInProgress size={20} color={"white"}/>
                    : <IoMdClock size={20} color={"white"}/>
                }
            </div>
          </div>
          {
              status === 'In Progress'
              ?
              <div className="w-full h-full absolute top-0 left-0 bg-clip-padding backdrop-blur-sm bg-opacity-35 bg-gray-700 hover:bg-stone-700 transition-all duration-400 hover:bg-opacity-60"/>
              : status === 'Start Soon'
              ?
              <div className="w-full h-full absolute top-0 left-0 bg-clip-padding backdrop-blur-sm bg-opacity-35 bg-gray-700 hover:bg-red-600 transition-all duration-400 hover:bg-opacity-60"/>
              :
              <div className="w-full h-full absolute top-0 left-0 hover:bg-clip-padding hover:backdrop-blur-sm bg-opacity-40 hover:bg-green-600 transition-all duration-400 hover:bg-opacity-60"/>
          }
        </div>
    )
}