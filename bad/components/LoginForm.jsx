'use client'
import Link from "next/link";
import { useState } from "react";
import * as z from 'zod';
import { useRouter } from 'next/navigation';
// import { useState } from "react";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formData = {
    email: email,
    password: password
};
const handleintr = async (e) => {
  try {
    // Uncommented code to send a GET request to the specified URL
    const res = await fetch('http://localhost:3333/auth/42', {
      method: 'GET',
    });

    // Check if the response status is 201 (created)
    if (res.status === 201) {
      // Reset the form
      const form = e.target;
      form.reset();

      // Redirect to another page or URL
      window.location.replace('http://localhost:3333/auth/42');
    } else {
      // Handle the case where the response status is not 201
      console.error('Failed to authenticate:', res.statusText);
    }
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error('An error occurred:', error);
  }
};
const handleSubmit =  async (e) => {
  e.preventDefault();
  
  
    const FormSchema = z
  .object({
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
  })
  const validationResult = FormSchema.safeParse(formData);

  if (validationResult.success) {
    // Form data is valid
    const validatedData = validationResult.data;
    console.log('Valid data:', validatedData);
  } else {
    // Form data is invalid
    const validationErrors = validationResult.error.flatten();
    console.error('Validation errors:', validationErrors);
    const form = e.target;
    form.reset();
    return;
  }
  try {
    const res = await fetch('http://localhost:3333/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email": email,
        "username": "simo",
        "lastName": "simo",
        "password": password
      }),
    });
    if (res.status == 201) {

      const form = e.target;
      form.reset();

      // router.push('/');
      router.replace('loginForm');
    }else{
      const form = e.target;
      form.reset();
      return;
    }
    
  } catch (error) {
    const form = e.target;
    form.reset();
        
    console.log("kin wahd hna: ", error);
  }
  }
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* login container */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* form */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
          <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>

          <form onSubmit={handleSubmit}  className="flex flex-col gap-4">
            <input required  onChange={(e)=> setEmail(e.target.value)} className="p-2 mt-8 rounded-xl border w-full" type="email" name="email" placeholder="Email" />
            <div className="relative">
              <input required  onChange={(e)=> setPassword(e.target.value)}  className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password" />
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg> */}
            </div>
            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 ">Login</button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>
          <form   onSubmit={handleintr} className="flex flex-col gap-4">
          <button  className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
            <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
              {/* SVG paths */}
            </svg>
            Login with Google
            
          </button>
          </form>

          <div>
            <Link className="mt-3 text-xs flex justify-between items-center text-[#002D74]" href={"/register"}> Don't have an account ? <span className="underline py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</span>
            </Link>
          </div>
        </div>

        {/* image */}
        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="Login" />
        </div>
      </div>
    </section>
  );
}

        