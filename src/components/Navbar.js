import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import {Link, useLocation, useNavigate} from "react-router-dom"
import {toast} from "react-hot-toast"
import { TbTriangleInvertedFilled } from "react-icons/tb";

const Navbar = ({isLoggedIn,setIsLoggedIn,setuser,setRange,user,range,settackle}) => {
    const navigate=useNavigate();
    const [Form,updateform]=useState({cars:""});
    function handler(event){
        updateform((prevdata)=>{
            return{
                ...prevdata,
                [event.target.name]:event.target.value
            }
        })
    }

  return (
    <div className='flex justify-between items-center  py-4 mx-auto px-9'>

       <div className='text-[35px] text-gray-200 '>
          Kachraseth
       </div>

       <div className='flex space-x-20 -left-[60px] relative '>
           <div className='text-richblack-100 text-[20px]'>
               <Link to="/">Home</Link>
           </div>
           <div className='text-richblack-100 flex gap-1 items-center text-[20px] '>
               <div>Location</div>
               <FaLocationDot/>
            </div>
       </div>
        
        <div className='text-richblack-100 text-[20px] relative -left-[10px] flex items-center gap-2'>
           <div> Categories</div>
           <div><TbTriangleInvertedFilled /></div>
        </div>

        <div className='flex relative space-x-20 relative left-[50px]'>
            <div className='text-richblack-100 text-[20px] '>
               <Link to="/">About</Link>
            </div>
            <div className='text-richblack-100 text-[20px]'>
               <Link to="/about">Contact Us </Link>
            </div>
        </div>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex items-center gap-x-8'>
            { !isLoggedIn && 
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700' onClick={()=>{settackle(true);setuser(false);setRange(false)}}>
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button  className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}
                    className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn && 
                <Link to="/cards">
                    <button
                     className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                       Users
                    </button>
                </Link>
            }
            { isLoggedIn && 
                <Link to="/userpage">
                    <button
                     className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                       Vendors
                    </button>
                </Link>
            }
        </div>
      
    </div>
  )
}

export default Navbar
