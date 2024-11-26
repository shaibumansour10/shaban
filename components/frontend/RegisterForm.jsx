"use client"

import Link from "next/link"
import {useRouter} from "next/navigation"
import SubmitButton from "@/components/formInputs/SubmitButton"
import TextInput from "@/components/formInputs/TextInput"
import React,{useState}from 'react'
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

export default function RegisterForm({role}) {
    const router = useRouter();
     const{
        register,
        handleSubmit,
        reset,
        formState:{errors},
     } =useForm();
     const[loading, setLoading]=useState(false);
     const[emailErr,setEmailErr]=useState("");
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
        const responseData = await response.json();
        if (response.ok){
      
          console.log(responseData)
            setLoading(false);
            toast.success("User Created Successfully");
            reset();
            // router.push("/login");
        } else{
            setLoading(false);
            if(response.status==409) {
                setEmailErr("User with this Email already exists");
                toast.error("User with this Email already exists");
            } else {
                console.error("server Error:", responseData.error);
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
       
        className="">
  {/* <div className="relative z-0 w-full mb-5 group"> */}
  
 <TextInput
 label=""
 name="role"
 type="hidden"
 register={register}
 defaultValue={role}
 errors={errors}
 className="sm:col-span-2 mb-3"
 />
 <TextInput
 label="Your name"
 name="name"
 type="text"
 register={register}
 errors={errors}
 className="sm:col-span-2 mb-3"
 />
 <TextInput
 label="Your email"
 name="email"
 type="email"
 register={register}
 errors={errors}
  className="sm:col-span-2 mb-3"
 />
 {emailErr && <small className="text-red-600 -mt-2 mb-2"> {emailErr} </small>}
 <TextInput
 label="Your password"
 name="password"
 type="password"
 register={register}
 errors={errors}
  className="sm:col-span-2 mb-3"
 />
  <SubmitButton
  isLoading={loading}
  buttonTitle="Sign Up"
  loadingButtonTitle="Create a User please wait...."/>
      
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
<p className="text-sm font-light text-gray-500 dark:text-gray-400 py-4">
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
