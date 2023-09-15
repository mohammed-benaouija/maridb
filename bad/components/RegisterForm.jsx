'use client'
import Link from "next/link";
import * as z from 'zod';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import LoginFrom from '../components/LoginForm'

// import { Provider } from 'next-auth/client';


// import RegisterForm from '../components/RegisterForm';

// import React from 'react';
// export default LoginForm;
export default function RegisterForm() {



  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ configPassword, setConfigPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const FormSchema = z
  // .object({
    const schema = {
    name: z.string().min(1, setError("Username is required")).max(100),
    email: z.string().min(1, setError("Email is required")).email(setError("Invalid email")),

    };
    if(error){

      // return;
      console.log(error),
      schema.password = z.string().min(8, setError("Password must have than 8 characters"));
      // .min(1, setError("Password is required"))
      // .min(8, setError("Password must have than 8 characters"));
      schema.configPassword =  z.string().min(1, setError("Password confirmation is required"));
    };
  
  // .refine( password ===  configPassword, {
  //   path: ['confirmPassword'],
  //   message: 'Password do not match',
  // });
    if(!error)
    {
      const form = e.target;
      form.reset();
      return;
    }
    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }
    try {
      const res = await fetch('http://localhost:3333/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "email": email,
          "username": name,
          "lastName": "sifmo",
          "password": password
        }),
      });
      
      if (res.status == 201) {
          router.push('/');
          } else {
            const form = e.target;
            form.reset();
            console.log("user regitration faild.");
          }
          
        } catch (error) {
          const form = e.target;
          form.reset();
          
      console.log("kin wahd error hna: ", error);
    }
  };
  return (

    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input onChange={(e) => setName(e.target.value)} type="text" placeholder=" Name" />
          <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          <input onChange={(e) => setConfigPassword(e.target.value)} type="password" placeholder="Config Password" />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">Register</button>
          {error && (
            <div className=" bg-red-500 text-white w-fit textt-s, py-2 px-2 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-1 text-right" href={"/"}> Already have an account ? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
