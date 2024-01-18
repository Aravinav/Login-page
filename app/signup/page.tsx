'use client'
import { FaRegUser, FaRegEnvelope } from "react-icons/fa6";
import {MdLockOutline} from 'react-icons/md'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signup() {
    let payload = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password
    }

    // You may want to handle the response from the server here
    axios.post('http://localhost:8080/api/signup', payload)
      .then(response => {
        // handle success
        console.log(response);
      })
      .catch(error => {
        // handle error
        console.error(error);
      });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className='flex flex-col items-center bg-white rounded-2xl shadow-2xl w-1/4 max-w-md md:max-w-lg lg:max-w-xl justify-center text-center p-4'>
        <h1 className="text-3xl font-bold text-green-500 mb-3">Sign Up</h1>
        <div className='border-2 w-10 border-green-500 inline-block mb-5'></div>
        <form onSubmit={signup}>
          {/* Your form inputs go here */}
          {/* ... */}

          <button type="submit" className="border-2 text-green-500 border-green-500 rounded-full px-6 py-2 inline-block hover:bg-green-500 hover:text-white mb-2">Submit</button>
        </form>

        <a href="/" className="text-xs">Back to Login</a>
      </div>
    </div>
  );
}
