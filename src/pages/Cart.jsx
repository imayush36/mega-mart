import { useState } from "react"

const Cart = () => {

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 1200,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      id: 2,
      name: "Gaming Laptop",
      price: 1800,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },
  ])

  const increaseQty = (id) => {

    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decreaseQty = (id) => {

    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }

  const removeItem = (id) => {

    setCartItems(
      cartItems.filter((item) => item.id !== id)
    )
  }

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold mb-10">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl p-5 flex flex-col md:flex-row gap-6 items-center"
            >

              {/* Image */}
              <img
                src={item.image}
                alt=""
                className="w-40 h-40 object-cover rounded-xl"
              />

              {/* Info */}
              <div className="flex-1">

                <h2 className="text-3xl font-bold">
                  {item.name}
                </h2>

                <p className="text-yellow-500 text-2xl font-bold mt-3">
                  ${item.price}
                </p>

                {/* Quantity */}
                <div className="flex items-center gap-4 mt-5">

                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="bg-black text-white px-4 py-2 rounded-lg"
                  >
                    -
                  </button>

                  <span className="text-2xl font-bold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="bg-black text-white px-4 py-2 rounded-lg"
                  >
                    +
                  </button>

                </div>

              </div>

              {/* Remove */}
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white px-6 py-3 rounded-xl"
              >
                Remove
              </button>

            </div>

          ))}

        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 h-fit">

          <h2 className="text-4xl font-bold mb-8">
            Order Summary
          </h2>

          <div className="space-y-4 text-xl">

            <div className="flex justify-between">
              <span>Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>

          </div>

          <button className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold text-xl mt-10 hover:bg-black hover:text-white transition duration-300">
            Proceed To Checkout
          </button>

        </div>

      </div>

    </div>
  )
}

export default Cart