import React, { useState } from "react";

export function Login(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(){
    let payloads = {
      email: email,
      password: password
    }

    let headers = {
      "Content-Type": "application/json",
      // Autorization: "Bearer " + token"     
    }

    try {
      let res = await fetch("http://127.0.0.1:5000/lgoin", {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payloads)
      })
      if (res.ok){
        let data = await res.json()
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-8">
          LockBox Login
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-gray-300 text-sm mb-2 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-gray-300 text-sm mb-2 font-medium"
            >
              Master Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a strong password"
              className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Create Secure Account
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          I don't have an account{" "}
          <a
            href="/signup"
            className="text-blue-400 hover:text-blue-500 underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}