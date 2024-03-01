import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const nav = useNavigate();

  const [validationEmail, setValidationEmail] = useState();
  const [validationPassword, setValidationPassword] = useState();
  const [loading, setLoading] = useState();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    // Perform email and password validation
    email === "" || email !== localStorage.getItem("email")
      ? setValidationEmail("Your email is incorrect")
      : setValidationEmail("");
    password === "" || password !== localStorage.getItem("password")
      ? setValidationPassword("Your password is incorrect")
      : setValidationPassword("");

    // If email and password match stored data, proceed with sign in
    if (
      email !== "" &&
      email === localStorage.getItem("email") &&
      password !== "" &&
      password === localStorage.getItem("password")
    ) {
      setLoading(true);

      // Simulate asynchronous operation (e.g., API request) with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Update localStorage data (for demonstration purposes)
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      // Navigate to the home page after successful sign in
      nav("/home");

      setLoading(false);
    }
  };

  return (
    <div className="flex h-dvh items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="min-w-[25dvw] bg-zinc-800 pb-8 font-poppins xs:pb-4">
        <header className="w-full bg-zinc-900 py-6 text-center xs:py-4">
          <h1 className="text-3xl font-semibold text-white xs:text-xl">
            SIGN IN
          </h1>
          <p className="mt-2 text-white/50 xs:text-sm">Login to your account</p>
        </header>
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-4 px-8 xs:px-4"
        >
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
            {/* Display validation message if email is incorrect */}
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
            {/* Display validation message if password is incorrect */}
            <p className="mt-1 text-sm text-red-700 xs:text-xs">
              {validationPassword}
            </p>
          </div>
          {/* Sign in button */}
          <button className="mb-2 mt-6 rounded-sm border-2 border-red-600 bg-red-600 px-4 py-3 text-white xs:text-sm">
            {/* Display loading spinner or "Sign In" text based on loading state */}
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full border-4 border-white border-t-zinc-500 p-2" />
              </div>
            ) : (
              "Sign In"
            )}
          </button>
          <hr className="border-white/50" />
        </form>
        {/* Sign up button */}
        <div className="mt-4 px-8 xs:px-4">
          <button
            className="hover:border-white/2 mt-2 w-full rounded-sm border-2 border-white/0 px-4 py-3 font-medium text-red-400 transition-colors hover:bg-white/10 xs:text-sm"
            onClick={() => nav("/")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
