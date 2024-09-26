import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";
import Container from "../../components/Container";
import { FcGoogle } from "react-icons/fc";

// Define the form inputs interface for TypeScript
interface SignUpFormInputs {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  // Using TypeScript types for state
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string>("");
  const [anyError, setAnyError] = useState<string | null>(null);

  // Register form fields using React Hook Form with TypeScript typing
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  // Handling form submission with type-safe data
  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    try {
      setAnyError(null); // Clear previous errors
      console.log("Form Submitted", data); // Perform form submission logic here (e.g., API call)
    } catch (error) {
      setAnyError("An error occurred. Please try again."); // Handle error
    }
  };

  // Toggle password visibility
  const togglePasswordView = () => {
    setViewPassword(!viewPassword);
  };

  return (
    <div className="w-screen h-screen py-5 bg-gray-200">
      <Container className="flex *:flex-1 h-full border rounded-xl overflow-hidden shadow">
        {/* Left Side (Form Area) */}
        <div className="bg-white flex flex-col items-center justify-center p-4 w-full md:w-1/2">
          {/* Form Header */}
          <div className="space-y-2">
            <h3 className="text-3xl font-bold">Sign In Your Account</h3>
            <p className="text-sm text-gray-500 font-medium text-center">
              Welcome Back! Please enter your details
            </p>
          </div>

          {/* Google Sign-up Button */}
          <button className="mt-3 shadow-sm bg-transparent outline-none border border-gray-300 text-gray-500 text-base font-semibold rounded-sm w-full max-w-[350px] p-2 flex items-center gap-2 justify-center">
            <FcGoogle className="text-lg" /> Sign up with Google
          </button>

          {/* Divider */}
          <div className="flex items-center w-full max-w-[350px] gap-1 text-gray-500 font-medium">
            <hr className="flex-1 border-b" />
            OR
            <hr className="flex-1 border-b" />
          </div>

          {/* Form */}
          <div className="w-full max-w-[350px]">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              {/* Email Input */}
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block mb-1 text-base font-semibold text-gray-900"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: "Your email is required" })}
                  className="shadow-sm bg-transparent outline-none border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
                  placeholder="Enter email"
                />
                {errors.email && (
                  <span className="text-red-600 font-medium">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Password Input */}
              <div className="relative mb-2">
                <label
                  htmlFor="password"
                  className="block mb-1 text-base font-semibold text-gray-900"
                >
                  Your Password
                </label>
                <input
                  type={viewPassword ? "text" : "password"}
                  id="password"
                  {...register("password", {
                    required: "Your password is required",
                  })}
                  className="shadow-sm bg-transparent outline-none border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
                  placeholder="Enter password"
                />
                <span
                  onClick={togglePasswordView}
                  className="absolute right-2 top-10"
                >
                  {viewPassword ? (
                    <FaRegEye className="cursor-pointer" />
                  ) : (
                    <FaEyeSlash className="cursor-pointer" />
                  )}
                </span>
                {errors.password && (
                  <span className="text-red-600 font-medium">
                    {errors.password.message}
                  </span>
                )}
                <p className="text-red-600 font-medium my-1">{passwordError}</p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
              >
                <span className="w-max mx-auto">Sign Up</span>
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Don't have an account?{" "}
              <Link to={"/signup"} className="hover:underline font-semibold">
                Sign up
              </Link>
            </p>
          </div>

          {anyError && (
            <p className="text-red-500 font-semibold my-1">{anyError}</p>
          )}
        </div>

        {/* Right Side (Image/Design) */}
        <div className="h-full w-full bg-[#111111] hidden md:block"></div>
      </Container>
    </div>
  );
};

export default SignIn;
