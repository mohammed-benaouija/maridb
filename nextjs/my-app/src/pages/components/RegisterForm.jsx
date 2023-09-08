"use client"
import Link from "next/link";
import { useState } from "react";
export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }
    try {
      const res = await fetch('api/register/route', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, password
        })
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("user regitration faild.");
      }

    } catch (error) { }
  };
  const [message, setMessage] = useState('');
  const handleSubmit1 = async (event) => {
    const firstName = event.target.first_name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const res = await fetch('/register/route', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, password
      })
    });
    if (res.ok) {
      const form = e.target;
      form.reset();
    } else {
      console.log("user regitration faild.");
    }


    console.log('handleSubmit ran');
    event.preventDefault();

    // 👇️ access input values using name prop
    console.log('first 👉️', firstName);
    console.log('second 👉️', email);
    setMessage(`Hey, ${firstName} ${email} ${password}`);

    event.target.reset();
  };
  return (
    <div>
      {/* <div>
        <form onSubmit={handleSubmit1}>
          <input id="first_name" name="first_name" type="text" className='border-2 border-sky-500' />
          <input id="email" name="email" type="text" className='border-2 border-sky-500' />
          <input id="password" name="password" type="text" className='border-2 border-sky-500' />
          <button type="submit" className='m-8 border-2'>Submit form</button>
        </form>
        <h2>{message}</h2>
      </div> */}
      <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
          <h1 className="text-xl font-bold my-4">Register</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder=" Name" />
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder=" Name" />
            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            <button className="bg-green-600" text-white font-bold cursor-pointer px-6 py-2>Register</button>
            {error && (
              <div className=" bg-red-500 text-white w-fit textt-s, py-1 px-2 rounded-md mt-2">
                {error}
              </div>
            )}

            <Link className="text-sm mt-1 text-right" href={"/"}> Already have an account ? <span className="underline">Login</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}