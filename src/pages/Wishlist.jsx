import toast from "react-hot-toast"

const Wishlist = () => {

  const wishlistItems = [
    {
      id: 1,
      name: "Apple Watch Ultra",
      price: "$799",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      id: 2,
      name: "Nike Air Max",
      price: "$299",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 3,
      name: "Gaming Headphones",
      price: "$199",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
  ]

  const addToCart = (name) => {
    toast.success(`${name} added to cart`)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold mb-10">
        My Wishlist
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {wishlistItems.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition duration-300"
          >

            {/* Image */}
            <div className="overflow-hidden">

              <img
                src={item.image}
                alt=""
                className="w-full h-72 object-cover hover:scale-110 transition duration-500"
              />

            </div>

            {/* Info */}
            <div className="p-6">

              <h2 className="text-3xl font-bold">
                {item.name}
              </h2>

              <p className="text-yellow-500 text-2xl font-bold mt-3">
                {item.price}
              </p>

              <div className="text-yellow-400 mt-3 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-4 mt-6">

                <button
                  onClick={() => addToCart(item.name)}
                  className="bg-black text-white py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition duration-300"
                >
                  Add To Cart
                </button>

                <button className="bg-red-500 text-white py-3 rounded-xl hover:bg-black transition duration-300">
                  Remove
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Wishlist