import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import API from "../services/api"
import toast from "react-hot-toast"

const Home = () => {

  const [cart, setCart] = useState([])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    API.get("/")
      .then((res) => {

        console.log(res.data)

        setTimeout(() => {
          setLoading(false)
        }, 1500)

      })
      .catch((err) => console.log(err))

  }, [])

  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: "$1200",
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      id: 2,
      name: "Gaming Laptop",
      price: "$1800",
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: "$400",
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      id: 4,
      name: "Nike Shoes",
      price: "$250",
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
  ]

  const addToCart = (product) => {

    setCart([...cart, product])

    toast.success(`${product.name} added to cart`)
  }

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Navbar */}
      <nav className="bg-black text-white flex justify-between items-center px-8 py-4 sticky top-0 z-50">

        <h1 className="text-5xl font-bold text-yellow-400">
          Mega Mart
        </h1>

        <div className="flex gap-8 text-xl">

          <Link to="/">
            Home
          </Link>

          <Link to="/login">
            Login
          </Link>

          <Link to="/cart">
            Cart ({cart.length})
          </Link>

          <Link to="/wishlist">
            Wishlist
          </Link>

          <Link to="/product">
            Product
          </Link>

        </div>

      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white text-center py-24">

        <h1 className="text-7xl font-bold mb-6">
          Welcome To Mega Mart
        </h1>

        <p className="text-3xl">
          Best Deals On Electronics, Fashion & More
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mt-10 px-5">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-2xl p-4 rounded-2xl border border-gray-300 shadow-xl outline-none text-xl text-black"
          />

        </div>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mt-8">

          <button
            onClick={() => setCategory("All")}
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            All
          </button>

          <button
            onClick={() => setCategory("Electronics")}
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl hover:bg-black hover:text-white transition duration-300"
          >
            Electronics
          </button>

          <button
            onClick={() => setCategory("Fashion")}
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl hover:bg-black hover:text-white transition duration-300"
          >
            Fashion
          </button>

        </div>

      </div>

      {/* Products */}
      <div className="p-10">

        <h2 className="text-5xl font-bold mb-10">
          Trending Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {loading ? (

            [...Array(4)].map((_, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-5 animate-pulse"
              >

                <div className="bg-gray-300 h-64 rounded-xl"></div>

                <div className="bg-gray-300 h-6 rounded mt-5"></div>

                <div className="bg-gray-300 h-6 rounded mt-3 w-2/3"></div>

                <div className="bg-gray-300 h-10 rounded mt-5"></div>

              </div>

            ))

          ) : (

            products
              .filter((product) =>
                product.name.toLowerCase().includes(search.toLowerCase())
              )
              .filter((product) =>
                category === "All"
                  ? true
                  : product.category === category
              )
              .map((product) => (

                <div
                  key={product.id}
                  className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden hover:scale-105 hover:shadow-3xl transition duration-300 relative"
                >

                  {/* Discount */}
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    20% OFF
                  </div>

                  {/* Wishlist */}
                  <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow">
                    ❤️
                  </button>

                  {/* Product Image */}
                  <div className="overflow-hidden">

                    <img
                      src={product.image}
                      alt=""
                      className="h-64 w-full object-cover hover:scale-110 transition duration-500"
                    />

                  </div>

                  {/* Product Info */}
                  <div className="p-5">

                    <h3 className="text-3xl font-bold">
                      {product.name}
                    </h3>

                    <div className="text-yellow-400 mt-2 text-xl">
                      ⭐⭐⭐⭐⭐
                    </div>

                    <p className="text-yellow-500 text-3xl font-bold mt-3">
                      {product.price}
                    </p>

                    <p className="text-gray-500 mt-2">
                      Category: {product.category}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col gap-3 mt-5">

                      <button
                        onClick={() => addToCart(product)}
                        className="bg-black text-white px-4 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300"
                      >
                        Add To Cart
                      </button>

                      <Link
                        to="/product"
                        className="bg-yellow-400 text-black text-center px-4 py-3 rounded-lg font-bold hover:bg-black hover:text-white transition duration-300"
                      >
                        Buy Now
                      </Link>

                    </div>

                  </div>

                </div>

              ))

          )}

        </div>

      </div>

    </div>
  )
}

export default Home