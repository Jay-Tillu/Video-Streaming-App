import React, { useRef, useState } from "react";
import Header from "./Header";
import bgImage from "../assets/bg-image.png";
import { checkValidData } from "../utils/form-validation";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const emailReference = useRef(null);
  const passwordReference = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const onSignInButtonClick = () => {
    const message = checkValidData(
      emailReference.current.value,
      passwordReference.current.value
    );

    setErrorMessage(message);
  };

  return (
    <div className="h-screen overflow-hidden bg-cover bg-center bg-no-repeat">
      <Header />
      <div className="absolute">
        <img src={bgImage} alt="Background Image" />
      </div>
      <form
        className="w-3/12 absolute p-10 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-65"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 my-2 w-full rounded-md bg-gray-800 text-[#aeaeae]"
          />
        )}
        <input
          ref={emailReference}
          type="text"
          placeholder="Email address"
          className="px-4 py-3 my-2 w-full rounded-md bg-gray-800 text-[#aeaeae]"
        />
        <input
          ref={passwordReference}
          type="password"
          placeholder="Password"
          className="px-4 py-3 my-2 w-full rounded-md bg-gray-800  text-[#aeaeae]"
        />

        <p className="text-[#E50914] font-bold p-2 w-full">{errorMessage}</p>

        <button
          className="p-2 my-4 bg-[#E50914] w-full rounded-md"
          onClick={onSignInButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-stone-400 mt-3 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already have an account? Sign in."}
        </p>
      </form>
    </div>
  );
};

export default Login;
