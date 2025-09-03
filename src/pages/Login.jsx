import { NavLink, useNavigate } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Login = () => {
  const { loginUser } = useAuthContext();
  const [loading,setLoading] = useState(true)
//   for user navigate function call
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    try{
        await loginUser(data)
    // when user login successful navigate this url
    navigate('/dashboard')
    }catch(err){
        console.log("Login faild",err)
    }finally{
        setLoading(false)
    }

  };

  return (
    <div className="w-1/2 mx-auto shadow-2xl p-6 md:my-10">
      <h1 className="text-2xl font-bold">Sign in</h1>
      <p className="text-gray-500 mb-10">
        Enter your email and password to access your email
      </p>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Enter your email"
            className="w-full px-3 py-2 outline rounded-xl"
            name="email"
            id="email"
          />
          {errors.email && (
            <span className="text-sm text-red-200">{errors.email.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", { required: "password is required" })}
            placeholder="Enter your password"
            className="w-full px-3 py-2 outline rounded-xl"
            name="password"
            id="password"
          />
          {errors.password && (
            <span className="text-sm text-red-200">{errors.email.message}</span>
          )}
        </div>
        <input
          type="submit"
          className="btn btn-outline bg-amber-700 mt-10 w-full rounded-xl text-white" disabled={loading}
          value={loading? "Loggin in...": "Login"}
        />
      </form>
      <div className="text-center my-5">
        <h1>
          Don't have an account?{" "}
          <NavLink className={"text-red-500"}>SignUp</NavLink>
        </h1>
      </div>
    </div>
  );
};

export default Login;
