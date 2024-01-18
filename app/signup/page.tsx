'use client'
import { FaRegUser, FaRegEnvelope } from "react-icons/fa6";
import {MdLockOutline} from 'react-icons/md'
import { useEffect, useState } from 'react';
import axios from 'axios';
useEffect(() => {
   // other code
   ...
 
   // eslint-disable-next-line react-hooks/exhaustive-deps


export default function signup(){
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signup(){
        let payload = {
            firstname : firstname,
            lastname : lastname,
            email : email,
            password : password

           
        }
        const response=axios.post('http://localhost:8080/api/signup',payload)
    }
return(
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
  <div className='flex flex-col items-center bg-white rounded-2xl shadow-2xl w-1/4 max-w-md md:max-w-lg lg:max-w-xl justify-center text-center p-4'>
    <h1 className="text-3xl font-bold text-green-500 mb-3">Sign Up</h1>
    <div className='border-2 w-10 border-green-500 inline-block mb-5'></div>
    <form onSubmit={signup} >
    <div className='w-6/7 p-2 bg-gray-100 flex items-center mb-3 mx-auto'>
      <FaRegUser className='text-gray-400 m-2'/>
      <input  required type="firstname" onChange={(e) => setFirstname(e.target.value)} id='firstname' name="firstname" placeholder="First name" className='bg-gray-100 text-sm outline-none flex-1' />
    </div>

    <div className='w-6/7 p-2 bg-gray-100 flex items-center mb-3 mx-auto'>
      <FaRegUser className='text-gray-400 m-2'/>
      <input required type="lastname" onChange={(e) => setLastname(e.target.value)} id='lastname' name="lastname" placeholder="Last name" className='bg-gray-100 text-sm outline-none flex-1' />
    </div>

    <div className='w-6/7 p-2 bg-gray-100 flex items-center mb-3 mx-auto'>
      <FaRegEnvelope className='text-gray-400 m-2'/>
      <input required type="email" onChange={(e) => setEmail(e.target.value)} id='email' name="email" placeholder="Email" className='bg-gray-100 text-sm outline-none flex-1' />
    </div>

    <div className='w-6/7 p-2 bg-gray-100 flex items-center mb-5 mx-auto'>
      <MdLockOutline className='text-gray-400 m-2'/>
      <input required type="password" onChange={(e) => setPassword(e.target.value)} id='password' name="password" placeholder="Password" className='bg-gray-100 text-sm outline-none flex-1' />
    </div>

    <button type="submit" className="border-2 text-green-500 border-green-500 rounded-full px-6 py-2 inline-block hover:bg-green-500 hover:text-white mb-2">Submit</button>
  
  

    </form>

  <a href="/" className="text-xs">Back to Login</a>
   
     </div>
</div>
 
)
}
    }, []) 
