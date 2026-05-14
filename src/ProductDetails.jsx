import { useState } from "react"
import toast from "react-hot-toast"

const ProductDetails = () => {

  const images = [
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  ]

  const [mainImage, setMainImage] = useState(images[0])

  const addToCart = () => {
    toast.success("Product added to cart")
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-2xl p-10">

        {/* Left Side */}
        <div>

          <div className="overflow-hidden rounded-2xl">

            <img
              src={mainImage}
              alt=""
              className="w-full h-[500px] object-cover hover:scale-110 transition duration-500"
            />

          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-5">

            {images.map((img, index) => (

              <img
                key={index}
                src={img}
                alt=""
                onClick={() => setMainImage(img)}
                className="w-24 h-24 object-cover rounded-xl cursor-pointer border-4 border-transparent hover:border-yellow-400"
              />

            ))}

          </div>

        </div>

        {/* Right Side */}
        <div>

          <h1 className="text-5xl font-bold">
            iPhone 15 Pro Max
          </h1>

          <div className="text-yellow-400 text-2xl mt-4">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="text-4xl text-yellow-500 font-bold mt-5">
            $1200
          </p>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            Premium flagship smartphone with amazing camera,
            dynamic island display and luxury design.
          </p>

          {/* Buttons */}
          <div className="flex gap-5 mt-10">

            <button
              onClick={addToCart}
              className="bg-black text-white px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition duration-300"
            >
              Add To Cart
            </button>

            <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl hover:bg-black hover:text-white transition duration-300">
              Buy Now
            </button>

          </div>

          {/* Features */}
          <div className="mt-10 space-y-4 text-lg">

            <p>✅ Free Delivery</p>

            <p>✅ 1 Year Warranty</p>

            <p>✅ Secure Payment</p>

            <p>✅ 7 Days Return Policy</p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ProductDetails