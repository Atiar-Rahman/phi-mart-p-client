import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import Error from "../components/Error";
import Success from "../components/Success";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { registeruser,errorMes } = useAuthContext()
  const [successMes,setSuccessMes] = useState('')
//   const navigate = useNavigate()
  const onSubmit = async(data) => {
    delete data.confirm_password // delete confirm password 
    console.log("Form Data:", data);
    try{
        const response = await registeruser(data)
        if(response.success){
            setSuccessMes(response.message)
            // setTimeout(()=>navigate('/login'),2000) // after 2s redirect the login page
        }
        
    }catch(err){
        console.log(err)
    }
  };

  return (
    <div className="w-full md:w-1/2 mx-auto my-10">
        {successMes && <Success success={successMes}></Success>}
        {errorMes && <Error error={errorMes}></Error>}
      <h1 className="text-2xl font-bold text-center border-b-4 rounded-2xl border-amber-800 my-6">
        Please Sign Up
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-2xl p-8 rounded-lg"
      >
        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="firstname" className="font-bold">
            First Name:
          </label>
          <input
            type="text"
            id="firstname"
            placeholder="Your First Name"
            {...register("first_name", { required: "First name is required" })}
            className="w-full py-2 px-3 rounded-xl border"
          />
          {errors.first_name && (
            <p className="text-red-500">{errors.first_name.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="lastname" className="font-bold">
            Last Name:
          </label>
          <input
            type="text"
            id="lastname"
            placeholder="Your Last Name"
            {...register("last_name", { required: "Last name is required" })}
            className="w-full py-2 px-3 rounded-xl border"
          />
          {errors.last_name && (
            <p className="text-red-500">{errors.last_name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="font-bold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            {...register("email", { required: "Email is required" })}
            className="w-full py-2 px-3 rounded-xl border"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="font-bold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Your password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Password must be 8+ characters" },
            })}
            className="w-full py-2 px-3 rounded-xl border"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label htmlFor="confirm_password" className="font-bold">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirm_password"
            placeholder="Confirm your password"
            {...register("confirm_password", {
              required: "Confirm password is required",
              validate: (value)=>value===watch('password')|| 'password do not match'
            })}
            className="w-full py-2 px-3 rounded-xl border"
          />
          {errors.confirm_password && (
            <p className="text-red-500">{errors.confirm_password.message}</p>
          )}
        </div>

        {/* Address */}
        <div className="mb-4">
          <label htmlFor="address" className="font-bold">
            Address:
          </label>
          <input
            type="text"
            id="address"
            placeholder="Your address"
            {...register("address")}
            className="w-full py-2 px-3 rounded-xl border"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="font-bold">
            Phone Number:
          </label>
          <input
            type="text"
            id="phone"
            placeholder="Your phone number"
            {...register("phone_number")}
            className="w-full py-2 px-3 rounded-xl border"
          />
        </div>

        {/* Submit */}
        <input
          type="submit"
          value="Sign Up"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl cursor-pointer hover:bg-blue-700"
        />

        <h1 className="mt-4 text-center">
          Already have an account?{" "}
          <NavLink to="/login" className="text-red-500 font-semibold">
            Sign In
          </NavLink>
        </h1>
      </form>
    </div>
  );
};

export default Register;
