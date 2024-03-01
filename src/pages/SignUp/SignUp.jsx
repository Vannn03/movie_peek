import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const nav = useNavigate();

  const [validationUsername, setValidationUsername] = useState();
  const [validationEmail, setValidationEmail] = useState();
  const [validationPassword, setValidationPassword] = useState();
  const [loading, setLoading] = useState();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    // Perform form validation
    username === ""
      ? setValidationUsername("Your username is required")
      : setValidationUsername("");
    email === ""
      ? setValidationEmail("Your email is required")
      : setValidationEmail("");
    password === ""
      ? setValidationPassword("Your password is required")
      : setValidationPassword("");

    // If all fields are filled, proceed with sign up
    if (username !== "" && email !== "" && password !== "") {
      setLoading(true);

      // Simulate asynchronous operation (e.g., API request) with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Store user data in localStorage (for demonstration purposes)
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      // Navigate to the home page after successful sign up
      nav("/home");

      setLoading(false);
    }
  };

  return (
    <div className="flex h-dvh items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="min-w-[25dvw] bg-zinc-800 pb-8 font-poppins xs:pb-4">
        <header className="w-full bg-zinc-900 py-6 text-center xs:py-4">
          <h1 className="text-3xl font-semibold text-white xs:text-xl">
            SIGN UP
          </h1>
          <p className="mt-2 text-white/50 xs:text-sm">Create an account</p>
        </header>
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-4 px-8 xs:px-4"
        >
          {/* Username field */}
          <div>
            <label htmlFor="username" className="text-white xs:text-sm">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="mt-1 w-full rounded-sm px-4 py-3 text-sm outline-none xs:text-xs"
            />
            {/* Display validation message if username is not entered */}
            <p className="mt-1 text-sm text-red-700 xs:text-xs">
              {validationUsername}
            </p>
          </div>
          {/* Email field */}
          <div>
            <label htmlFor="email" className="text-white xs:text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 w-full rounded-sm px-4 py-3 text-sm outline-none xs:text-xs"
            />
            {/* Display validation message if email is not entered */}
            <p className="mt-1 text-sm text-red-700 xs:text-xs">
              {validationEmail}
            </p>
          </div>
          {/* Password field */}
          <div>
            <label htmlFor="password" className="text-white xs:text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 w-full rounded-sm px-4 py-3 text-sm outline-none xs:text-xs"
            />
            {/* Display validation message if password is not entered */}
            <p className="mt-1 text-sm text-red-700 xs:text-xs">
              {validationPassword}
            </p>
          </div>
          {/* Sign up button */}
          <button className="mb-2 mt-6 rounded-sm border-2 border-red-600 bg-red-600 px-4 py-3 text-white xs:text-sm">
            {/* Display loading spinner or "Sign Up" text based on loading state */}
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full border-4 border-white border-t-zinc-500 p-2" />
              </div>
            ) : (
              "Sign Up"
            )}
          </button>
          <hr className="border-white/50" />
        </form>
        {/* Sign in button */}
        <div className="mt-4 px-8 xs:px-4">
          <button
            className="hover:border-white/2 mt-2 w-full rounded-sm border-2 border-white/0 px-4 py-3 font-medium text-red-400 transition-colors hover:bg-white/10 xs:text-sm"
            onClick={() => nav("/sign-in")}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
