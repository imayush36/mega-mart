import toast from "react-hot-toast"

const Checkout = () => {

  const placeOrder = () => {
    toast.success("Order Placed Successfully")
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold mb-10">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Shipping Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-2xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Shipping Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="p-4 rounded-xl border outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="p-4 rounded-xl border outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="p-4 rounded-xl border outline-none"
            />

            <input
              type="text"
              placeholder="City"
              className="p-4 rounded-xl border outline-none"
            />

            <input
              type="text"
              placeholder="State"
              className="p-4 rounded-xl border outline-none"
            />

            <input
              type="text"
              placeholder="ZIP Code"
              className="p-4 rounded-xl border outline-none"
            />

          </div>

          <textarea
            placeholder="Full Address"
            rows="5"
            className="w-full mt-6 p-4 rounded-xl border outline-none"
          ></textarea>

        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 h-fit">

          <h2 className="text-3xl font-bold mb-8">
            Order Summary
          </h2>

          <div className="space-y-4 text-xl">

            <div className="flex justify-between">
              <span>Items</span>
              <span>3</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$20</span>
            </div>

            <div className="flex justify-between">
              <span>Tax</span>
              <span>$10</span>
            </div>

            <div className="border-t pt-4 flex justify-between font-bold text-2xl">
              <span>Total</span>
              <span>$2030</span>
            </div>

          </div>

          {/* Payment Buttons */}
          <div className="flex flex-col gap-4 mt-8">

            <button
              onClick={placeOrder}
              className="bg-yellow-400 text-black py-4 rounded-xl font-bold hover:bg-black hover:text-white transition duration-300"
            >
              Cash On Delivery
            </button>

            <button
              onClick={placeOrder}
              className="bg-black text-white py-4 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition duration-300"
            >
              Pay With Card
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Checkout