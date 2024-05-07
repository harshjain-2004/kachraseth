import reviews from "../photos"
import { IoStarSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
function Userpage(){
    return(
        <div className="bg-white">
             <div className="text-[50px] text-black text-center pt-5 font-semibold">Vendor Page</div>
        <div className="flex justify-between w-10/12 max-w-[1060px]  py-8 mx-auto gap-x-12 gap-y-4 ">
          <div className="flex flex-col gap-4">
          {
            reviews.map((val)=>{
                return <div key={val.id} className="text-white flex w-[1000px] border-4 p-6 gap-5 rounded-[20px] ">
                    <div className="h-[200px] overflow-y-hidden">
                        <img src={val.image} alt="" width="250px" className="rounded-[10px]"></img>
                    </div>
                    <div className="flex flex-col space-y-3">
                    <div className="text-[25px] font-semibold text-black" >{val.name}</div>
                    <div className="flex items-center gap-2">
                         <span className=" bg-green-700 rounded-[5px] px-[3px] py-[1px]">{val.box}</span>
                         <span className=" text-yellow-400 flex">
                        <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
                        </span>
                        <div className="text-black">{val.ratings} Ratings</div>
                    </div>
                    <div className="flex gap-3  items-center">
                        <div className="text-black"><CiLocationOn fontSize={"20px"}/></div>
                         <div className="text-black">{val.loc}</div> 
                    </div>
                   
                   <div className="flex gap-3">
                        <div className="px-2 border  text-black rounded-[5px] flex justify-center items-center bg-gray-100">{val.dealers}</div>
                        <div className="px-2 border text-black rounded-[5px] flex justify-center items-center bg-gray-100">{val.dealers1}</div>
                   </div>
                   <div className="flex gap-3">
                       <div className="px-3 py-1 bg-green-600 flex justify-center items-center rounded-[5px]">
                           <div><IoIosCall /></div>
                           <div>{val.num}</div>
                        </div>
                       <div  className="px-3 bg-blue-600 flex justify-center items-center rounded-[5px]">Get Best Deal</div>
                       <div className="px-2 flex text-black justify-center items-center border rounded-[5px]">
                        <div><FaWhatsapp/></div>
                        <div>Chat</div>
                        </div>
                    </div>
                    </div>
                </div>
            })
          }
          </div>
        </div>
        </div>
    )
}
export default Userpage