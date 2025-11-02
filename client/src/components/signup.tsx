import React, { useState } from "react";

export function Signup() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let payloads = {
      username: username,
      email: email,
      password: password
    }

    let headers = {
      "Content-Type": "application/json",
      // Autorization: "Bearer " + token"
    }

    try {
      let res = await fetch("http://localhost:4000/api/v1/auth/signup", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payloads)
      });
      let data = await res.json();
      if (res.ok) {
        // Handle successful signup (e.g., redirect or show success message)
      } else {
        throw new Error(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  }
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-8">
          LockBox Signup
        </h1>

        <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
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
              htmlFor="username"
              className="text-gray-300 text-sm mb-2 font-medium"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Choose a username"
              className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            <a href="#" className="text-blue-400">generate a password</a>
            <p className="text-xs text-gray-500 mt-1">
              This will unlock all your stored passwords. Keep it safe.
            </p>
          </div>

          <button
            type="submit"
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Create Secure Account
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-400 hover:text-blue-500 underline"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}