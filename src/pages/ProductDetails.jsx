const ProductDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-xl">

        <img
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
          alt=""
          className="rounded-2xl w-full"
        />

        <div>

          <h1 className="text-5xl font-bold">
            iPhone 15 Pro
          </h1>

          <div className="text-yellow-400 text-2xl mt-4">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="text-3xl text-yellow-500 font-bold mt-4">
            $1200
          </p>

          <p className="text-gray-600 mt-6 text-lg">
            Premium Apple smartphone with modern features.
          </p>

          <div className="flex gap-4 mt-8">

            <button className="bg-black text-white px-8 py-4 rounded-xl">
              Add To Cart
            </button>

            <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold">
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ProductDetails