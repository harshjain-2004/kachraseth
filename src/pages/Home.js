import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoPlaySharp } from "react-icons/io5";
import imag1 from  '../assets/imag1-removebg-preview.png'
import imag2 from '../assets/imag2.png'
import { IoStarSharp } from "react-icons/io5";
import "./Home.css";
const Home= ({isLoggedIn,setuser,setRange}) => {
const navigate=useNavigate();
  function changehandler1(){
    setRange(true);
    setuser(false);
    navigate("/login");
  }
  function changehandler(){
    setRange(false);
    setuser(true);
    navigate("/login");
  }
  return (
    <div className='flex h-[250px] max-w-[1500px] mx-auto'>
       <img src={imag1} alt=""  className=' w-[250px] h-[400px] relative top-[100px]'></img>
    <div className='flex  items-center text-white text-3xl  flex-col mt-24'>
       <div className=' font-sans font-bold text-[100px]  w-[900px] rst'>
          A Hassle Free Way  <br/> <br/> <br/> To Get Rid Of <br/> <br/> <br/> House Waste..
       </div>
       <div className='w-[300px] rounded-[20px] border px-6 py-3 mt-20 relative  right-[290px] fest bg-transparent top-[20px]'>
          <div className='flex gap-6 justify-center items-center z-[10] relative'>
              <div >Explore More</div>
              <div ><IoPlaySharp/></div>
          </div>

         {
          !isLoggedIn&&
          <div className='flex space-x-3 ml-10  z-[10] relative'>
            <div>
                 <button onClick={changehandler1} className='underline  text-[25px]'>User</button>
            </div>
            <div >/</div>
            <div>
               <button onClick={changehandler} className='underline text-[25px]'>Vendor</button>
            </div>
          </div>  
         }

       </div>

       <div className='w-[400px] rounded-[20px] border  px-6 py-3 mt-20 fest bg-transparent absolute right-[250px] top-[400px] z-[1]'>
          
          <div className='flex items-center gap-3'>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH1odnk18pKMFhNAKHNI1GAGtJKcB9_y6nCD5ETVxgkg&s" alt="" 
             className='rounded-full' width="50px" height="50px"></img>
             <span className=" text-yellow-400 flex text-[20px] ">
              <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
            </span>
          </div>
          <div className='text-[15px] pl-[50px] text-gray-300  z-[10] relative'>
          Kachra seth completely irradicates all the issues faced by individuals in the process of getting rid of house waste and and makes it a smooth and interactive affair
          </div>
        </div> 
    </div>
      <img src={imag2} alt="" className='w-[300px] h-[400px] relative top-[100px] right-20'></img>
    </div>
  )
}

export default Home
