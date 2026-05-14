import { FaBox, FaShoppingCart, FaUsers, FaDollarSign } from "react-icons/fa"

const Admin = () => {

  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: "$1200",
      stock: 12,
    },
    {
      id: 2,
      name: "Gaming Laptop",
      price: "$1800",
      stock: 8,
    },
    {
      id: 3,
      name: "Nike Shoes",
      price: "$250",
      stock: 20,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold mb-10">
        Admin Dashboard
      </h1>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

        <div className="bg-black text-white rounded-2xl p-8 shadow-2xl">

          <FaDollarSign className="text-5xl text-yellow-400" />

          <h2 className="text-2xl mt-5">
            Revenue
          </h2>

          <p className="text-4xl font-bold mt-3">
            $25K
          </p>

        </div>

        <div className="bg-black text-white rounded-2xl p-8 shadow-2xl">

          <FaShoppingCart className="text-5xl text-yellow-400" />

          <h2 className="text-2xl mt-5">
            Orders
          </h2>

          <p className="text-4xl font-bold mt-3">
            320
          </p>

        </div>

        <div className="bg-black text-white rounded-2xl p-8 shadow-2xl">

          <FaUsers className="text-5xl text-yellow-400" />

          <h2 className="text-2xl mt-5">
            Users
          </h2>

          <p className="text-4xl font-bold mt-3">
            1200
          </p>

        </div>

        <div className="bg-black text-white rounded-2xl p-8 shadow-2xl">

          <FaBox className="text-5xl text-yellow-400" />

          <h2 className="text-2xl mt-5">
            Products
          </h2>

          <p className="text-4xl font-bold mt-3">
            85
          </p>

        </div>

      </div>

      {/* Product Table */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 overflow-x-auto">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">
            Product Management
          </h2>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-black hover:text-white transition duration-300">
            Add Product
          </button>

        </div>

        <table className="w-full">

          <thead>

            <tr className="border-b text-left">

              <th className="py-4">ID</th>

              <th>Name</th>

              <th>Price</th>

              <th>Stock</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {products.map((product) => (

              <tr
                key={product.id}
                className="border-b hover:bg-gray-100 transition duration-300"
              >

                <td className="py-5">
                  {product.id}
                </td>

                <td>
                  {product.name}
                </td>

                <td>
                  {product.price}
                </td>

                <td>
                  {product.stock}
                </td>

                <td className="flex gap-4 py-5">

                  <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300">
                    Edit
                  </button>

                  <button className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-black transition duration-300">
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default Admin