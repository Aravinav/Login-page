"use client"
import Image from 'next/image'
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Home() {
  const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

useEffect(() => {
  login()
  // This effect will only run on the client side

  // Now you can use useState here if needed
}, [email]);
  function login() {
  
    let payload = {
      email: email,
      password: password,
    };


    // let jsonvalue = JSON.stringify(payload);
    const response=axios.post('http://localhost:8080/api/login',payload)
    // console.log(response,"response");
    
  
  //   fetch('http://localhost:8080/api/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: jsonvalue,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Handle the response from the server
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       // Handle errors
  //       console.error('Error:', error);
  //     });
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
        <div className='flex bg-white rounded-2xl shadow-2xl w-2/3 max-w-4xl'>
          <div className='w-3/5 p-5'>
            <div className='py-10'>
              <h2 className='text-3xl font-bold text-green-500 mb-2'>Sign in to Account</h2>
              <div className='border-2 w-10 border-green-500 inline-block mb-2'></div>
              <div className='flex justify-center mx-2 mb-2'>
                <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1' >
                  <FaFacebookF className='text-sm' />
                </a>
                <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1' >
                  <FaLinkedinIn className='text-sm' />
                </a>
                <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1' >
                  <FaGoogle className='text-sm' />
                </a>
              </div>
              <p className='text-gray-300 mb-2'> or use your email account</p>
              <form onSubmit={login}>
              <div className='flex flex-col items-center'>
                <div className='w-64 p-2 bg-gray-100 flex items-center mb-3'>
      <FaRegEnvelope className='text-gray-400 m-2'/>
                  <input required type="email" onChange={(e) => setEmail(e.target.value)} id='email' name="email" placeholder="Email" className='bg-gray-100 text-sm outline-none flex-1' />
                </div>
                <div className='w-64 p-2 bg-gray-100 flex items-center mb-3'>
      <MdLockOutline className='text-gray-400 m-2'/>
                  <input required type="password" onChange={(e) => setPassword(e.target.value)} id='password' name="password" placeholder="Password" className='bg-gray-100 text-sm outline-none flex-1' />
                </div>
                <div className='flex justify-between w-64 mb-5'>
                  <label className='text-xs flex items-center'><input type='checkbox' name='remember' className='mr-1'/>Remember me</label>
                  <a href="#" className='text-xs'>Forget Password?</a>
                </div>
                <button type="submit" className='border-2 border-green-500 text-green-500 px-12 py-2 rounded-full inline-block font-semibold hover:bg-green-500 hover:text-white'>Sign In</button>
              </div>
              </form>
            
            </div>
          </div>
          {/*signup section */}
          <div className='w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36'>
            <h2 className='text-3xl font-bold mb-2'>Hello, Friend!</h2>
            <div className='border-2 w-10 border-white inline-block mb-2'></div>
            <p className='flex px-10 mb-10'>Fill up personal information and start journey with us</p>
            <a href="signup" className='border-2 border-white px-12 py-2 rounded-full inline-block font-semibold hover:bg-white hover:text-green-500'>Sign Up</a>
          </div>
        </div>
      </main>
    </div>
  )
}
