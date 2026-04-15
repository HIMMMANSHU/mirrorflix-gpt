import React from 'react'

const Login = () => {
  return (
    <div className="relative">
      <img
        alt="bg-image"
        className="h-screen w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6a77b075-d304-4342-a055-c9e435c98b6f/web/IN-en-20260406-TRIFECTA-perspective_82b47017-148f-45be-8db8-d82a0f936d18_large.jpg"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex items-center justify-center">
        <form className="w-11/12 max-w-md rounded bg-black/75 p-12 text-white">
          <h1 className="mb-8 text-5xl font-bold">Sign In</h1>

          <input
            type="text"
            placeholder="Email or phone number"
            className="mb-4 w-full rounded bg-gray-700/90 p-4 text-lg outline-none placeholder:text-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-8 w-full rounded bg-gray-700/90 p-4 text-lg outline-none placeholder:text-gray-300"
          />

          <button className="mb-4 w-full rounded bg-red-600 p-4 text-2xl font-semibold hover:bg-red-700">
            Sign In
          </button>

          <div className="mb-12 flex items-center justify-between text-xl text-gray-300">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-5 w-5" />
              Remember me
            </label>
            <p>Need help?</p>
          </div>

          <p className="mb-4 text-xl text-gray-400">
            New to Netflix? <span className="font-semibold text-white">Sign up now.</span>
          </p>
          <p className="text-lg text-gray-400">
            This page is protected by Google reCAPTCHA to ensure you are not a bot.{" "}
            <span className="cursor-pointer text-blue-500">Learn more.</span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login