import React, { useState } from "react"

function App() {

  const [darkMode, setDarkMode] = useState(true)

  const [cartCount, setCartCount] = useState(0)
  const [wishlistCount, setWishlistCount] = useState(0)

  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const [products] = useState([

    {
      name: "iPhone 15",
      price: "₹79,999",
      stock: 12,
      category: "Mobile",
      rating: "⭐ 4.8",
      image:
        "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg"
    },

    {
      name: "MacBook Air",
      price: "₹1,09,999",
      stock: 5,
      category: "Laptop",
      rating: "⭐ 4.9",
      image:
        "https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg"
    },

    {
      name: "Nike Shoes",
      price: "₹5,999",
      stock: 20,
      category: "Shoes",
      rating: "⭐ 4.7",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0d5c65d1-7b7d-4d6b-b9d5-7b94dbf3cf70/air-force-1-07-shoes-WrLlWX.png"
    }

  ])

  // Search + Filter
  const filteredProducts = products.filter((product) => {

    const matchSearch =
      product.name.toLowerCase().includes(search.toLowerCase())

    const matchCategory =
      selectedCategory === "All"
        ? true
        : product.category === selectedCategory

    return matchSearch && matchCategory
  })

  return React.createElement(

    "div",

    {
      style: {
        backgroundColor: darkMode ? "#0f172a" : "#f1f5f9",
        minHeight: "100vh",
        color: darkMode ? "white" : "black",
        fontFamily: "Arial",
      }
    },

    [

      // Navbar
      React.createElement(
        "div",
        {
          key: 1,
          style: {
            backgroundColor: darkMode ? "#020617" : "white",
            padding: "18px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }
        },

        [

          React.createElement(
            "h1",
            {
              key: 2,
              style: {
                color: "#facc15",
                fontSize: "32px",
              }
            },
            "Mega Mart 🛒"
          ),

          React.createElement(
            "div",
            {
              key: 3,
              style: {
                display: "flex",
                gap: "15px",
                alignItems: "center",
                flexWrap: "wrap",
              }
            },

            [

              React.createElement(
                "input",
                {
                  key: 4,
                  type: "text",
                  placeholder: "Search products...",
                  value: search,
                  onChange: (e) => setSearch(e.target.value),
                  style: {
                    padding: "12px",
                    width: "260px",
                    borderRadius: "10px",
                    border: "none",
                    outline: "none",
                  }
                }
              ),

              React.createElement(
                "button",
                {
                  key: 5,
                  onClick: () => setDarkMode(!darkMode),
                  style: {
                    padding: "12px 16px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                  }
                },
                darkMode ? "☀️" : "🌙"
              ),

              React.createElement(
                "button",
                {
                  key: 6,
                  style: {
                    padding: "12px 18px",
                    borderRadius: "10px",
                    border: "none",
                    backgroundColor: "#e11d48",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }
                },
                `❤️ ${wishlistCount}`
              ),

              React.createElement(
                "button",
                {
                  key: 7,
                  style: {
                    padding: "12px 18px",
                    borderRadius: "10px",
                    border: "none",
                    backgroundColor: "#22c55e",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }
                },
                `🛒 ${cartCount}`
              )

            ]

          )

        ]

      ),

      // Hero Section
      React.createElement(
        "div",
        {
          key: 8,
          style: {
            backgroundImage:
              "url(https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "420px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }
        },

        [

          React.createElement(
            "h1",
            {
              key: 9,
              style: {
                fontSize: "70px",
                textShadow: "0 0 20px black",
              }
            },
            "Mega Sale Is Live 🔥"
          ),

          React.createElement(
            "p",
            {
              key: 10,
              style: {
                fontSize: "28px",
                textShadow: "0 0 10px black",
              }
            },
            "Premium Shopping Experience"
          )

        ]

      ),

      // Category Filter
      React.createElement(
        "div",
        {
          key: 11,
          style: {
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginTop: "40px",
            flexWrap: "wrap",
          }
        },

        [

          "All",
          "Mobile",
          "Laptop",
          "Shoes"

        ].map((category, index) =>

          React.createElement(
            "button",
            {
              key: index,
              onClick: () => setSelectedCategory(category),
              style: {
                padding: "12px 18px",
                borderRadius: "10px",
                border: "none",
                backgroundColor:
                  selectedCategory === category
                    ? "#facc15"
                    : "#334155",
                color:
                  selectedCategory === category
                    ? "black"
                    : "white",
                cursor: "pointer",
                fontWeight: "bold",
              }
            },
            category
          )

        )

      ),

      // Products
      React.createElement(
        "div",
        {
          key: 12,
          style: {
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            padding: "50px",
          }
        },

        filteredProducts.map((product, index) =>

          React.createElement(
            "div",
            {
              key: index,
              style: {
                backgroundColor: darkMode ? "#1e293b" : "white",
                width: "290px",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
              }
            },

            [

              React.createElement(
                "img",
                {
                  key: 20 + index,
                  src: product.image,
                  alt: product.name,
                  style: {
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                    backgroundColor: "white",
                    padding: "15px",
                  }
                }
              ),

              React.createElement(
                "div",
                {
                  key: 30 + index,
                  style: {
                    padding: "20px",
                  }
                },

                [

                  React.createElement(
                    "h2",
                    {
                      key: 40 + index,
                    },
                    product.name
                  ),

                  React.createElement(
                    "p",
                    {
                      key: 50 + index,
                      style: {
                        color: "#facc15",
                        marginTop: "10px",
                        fontSize: "22px",
                      }
                    },
                    product.price
                  ),

                  React.createElement(
                    "p",
                    {
                      key: 60 + index,
                      style: {
                        marginTop: "10px",
                      }
                    },
                    product.rating
                  ),

                  React.createElement(
                    "p",
                    {
                      key: 70 + index,
                      style: {
                        marginTop: "10px",
                      }
                    },
                    `Category: ${product.category}`
                  ),

                  React.createElement(
                    "div",
                    {
                      key: 80 + index,
                      style: {
                        display: "flex",
                        gap: "10px",
                        marginTop: "20px",
                      }
                    },

                    [

                      React.createElement(
                        "button",
                        {
                          key: 90 + index,
                          onClick: () =>
                            setWishlistCount(wishlistCount + 1),
                          style: {
                            flex: 1,
                            padding: "12px",
                            borderRadius: "10px",
                            border: "none",
                            backgroundColor: "#e11d48",
                            color: "white",
                            cursor: "pointer",
                            fontWeight: "bold",
                          }
                        },
                        "❤️"
                      ),

                      React.createElement(
                        "button",
                        {
                          key: 100 + index,
                          onClick: () =>
                            setCartCount(cartCount + 1),
                          style: {
                            flex: 3,
                            padding: "12px",
                            borderRadius: "10px",
                            border: "none",
                            backgroundColor: "#22c55e",
                            color: "white",
                            cursor: "pointer",
                            fontWeight: "bold",
                          }
                        },
                        "Add To Cart 🛒"
                      )

                    ]

                  )

                ]

              )

            ]

          )

        )

      ),

      // Footer
      React.createElement(
        "div",
        {
          key: 200,
          style: {
            backgroundColor: "#020617",
            padding: "30px",
            textAlign: "center",
            color: "#94a3b8",
          }
        },
        "© 2026 Mega Mart | Complete E-Commerce Website 🚀"
      )

    ]

  )

}

export default App