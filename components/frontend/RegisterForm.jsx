"use client"

import Link from "next/link"
import {useRouter} from "next/navigation"

import React,{useState}from 'react'
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

export default function RegisterForm() {
    const router = useRouter();
     const{
        register,
        handleSubmit,
        reset,
        formState:{errors},
     } =useForm();
     const[loading, setLoading]=useState(false);
     const[emailErr,setEmailerr]=useState("");
     async function onSubmit(data) {
      try {
        console.log(data);
        setLoading(true);
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const response =await fetch(`${baseUrl}/api/user`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data),
        });

        if (response.ok){
            setLoading(false);
            toast.success("User Created Successfully");
            reset();
            router.push("/login");
        } else{
            setLoading(false);
            if(response.status==409) {
                setEmailerr("User with this Email already exists");
                toast.error("User with this Email already exists");
            } else{
                console.error("server Error:", responseData.massege);
                toast.error("oops Something went wrong");
            }
        }
      } catch (error) {
       setLoading(false);
       console.error("Network Error:", error);
       toast.error("Something went wrong, please Try Again");
      }  
     }
  return (
    <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
       <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Sign Up to Mansour MarketPlace
                </h2>
       <form onSubmit={handleSubmit(onSubmit)}
        // className="max-w-md mx-auto">
        className="space-y-2">
  {/* <div className="relative z-0 w-full mb-5 group"> */}
  <div>
      {/* <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required /> */}
      {/* <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label> */}
      <label 
      htmlFor="name" 
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
      <input
      {...register("name",{required:true})}
      type="text"
      name="name"
      id="name"
      className=" bg-gray-50 border 
    text-gray-900 sm:text-sm 
    focus:ring-lime-600 
    block w-full p-2.5 
    rounded-lg 
    border-gray-300 
    dark:bg-gray-700 
    dark:border-gray-600 
    dark:placeholder-gray-400 
    dark:text-white 
    focus:border-lime-500
  "
  placeholder="shaibu mansour"
  required=""
      />
     {errors.name &&(
        <small className="text-red-600 test-sm">
            This field is required
            </small>
     )}
  </div>
  <div>
  <label 
      htmlFor="email" 
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input
      {...register("email",{required:true})}
      type="text"
      name="email"
      id="email"
      className=" bg-gray-50 border 
    text-gray-900 sm:text-sm 
    focus:ring-lime-600 
    block w-full p-2.5 
    rounded-lg 
    border-gray-300 
    dark:bg-gray-700 
    dark:border-gray-600 
    dark:placeholder-gray-400 
    dark:text-white 
    focus:border-lime-500
  "
  placeholder="shaibuamsnour10@gamil.com"
  required=""
      />
      {errors.email &&(
        <small className="text-red-600 test-sm">
            This field is required
            </small>
     )}
      <small className="text-red-600 test-sm">
           {emailErr}
            </small>
  </div>
  <div>
  <label 
      htmlFor="password" 
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
      <input
      {...register("password",{required:true})}
      type="password"
      name="password"
      id="password"
      className=" bg-gray-50 border 
    text-gray-900 sm:text-sm 
    focus:ring-lime-600 
    block w-full p-2.5 
    rounded-lg 
    border-gray-300 
    dark:bg-gray-700 
    dark:border-gray-600 
    dark:placeholder-gray-400 
    dark:text-white 
    focus:border-lime-500
  "
  placeholder="........"
  required=""
      />
      {errors.password &&(
        <small className="text-red-600 test-sm">
            This field is required
            </small>
     )}
     
  </div>
  {loading ? (
        <button
        disabled
        type='button'
        className='mt-4 text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 inline-flex items-center'
        >
            <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
</svg>
Creating please wait...
        </button>
      ):(
        <button 
        type='submit'
        className='inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-lime-700 rounded-lg focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-lime-800  '
        >
     Sign Up
        </button>
      )
      }
  {/* <div className="flex items-center">
    <div className="w-full bg-slate-500 h-[1px]"> 
    </div>
    <span className="mx-2">or</span>
    <div className="w-full bg-slate-500 h-[1px]"> 
    </div>
  </div>
  <div className="">
  <button
    type="button"
    onClick={() => signin('google')}
    className="w-full text-slate-950 hover:bg-slate-50 focus:ring-4 focus:ring-slate-100 font-medium rounded-lg text-sm bg-white focus:outline-none border border-slate-200 px-5 py-2.5 text-center justify-center flex items-center me-2 mb-4"
  >
    <FaGoogle className="mr-2 text-red-600 w-4 h-4" />
    Sign up with Google
  </button>

</div> */}
<p className="text-sm font-light text-gray-500 dark:text-gray-400">
Already have an account?{" "}
<Link
href="/login"
className="font-medium text-lime-600 hover:underline dark:text-lime-500">
    Login
</Link>
</p>

 
</form>
    </div>
  );
}
