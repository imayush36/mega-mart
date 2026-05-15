function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <nav className="bg-black text-white p-4 flex justify-between">
        <h1 className="text-2xl font-bold">Mega Mart</h1>

        <div className="space-x-4">
          <a href="/">Home</a>
          <a href="/login">Login</a>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Mega Mart 🛒
        </h1>

        <p className="text-xl text-gray-600">
          Best E-Commerce Website
        </p>

        <button className="bg-black text-white px-6 py-3 rounded mt-6 hover:bg-gray-800">
          Shop Now
        </button>
      </div>

    </div>
  );
}

export default Home;