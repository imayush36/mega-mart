import { useState } from "react"

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {

    e.preventDefault()

    alert("Login Successful 🚀")
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-black via-gray-900 to-black p-5">

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-10 w-full max-w-md text-white">

        <h1 className="text-5xl font-bold text-center mb-8 text-yellow-400">
          Mega Mart
        </h1>

        <h2 className="text-3xl font-bold text-center mb-8">
          Login
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 rounded-xl bg-white/20 outline-none border border-white/20"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-4 rounded-xl bg-white/20 outline-none border border-white/20"
          />

          <button
            type="submit"
            className="bg-yellow-400 text-black py-4 rounded-xl font-bold hover:bg-white transition duration-300"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6 text-gray-300">
          Forgot Password?
        </p>

      </div>

    </div>
  )
}

export default Login