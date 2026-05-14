import React, { useState } from "react"

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginUser = () => {

    if (
      email === "admin@gmail.com" &&
      password === "123456"
    ) {
      setLoggedIn(true)
    }

    else {
      alert("Wrong Email or Password")
    }

  }

  const products = [

    {
      name: "iPhone 15",
      price: "₹79,999",
      image:
        "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg"
    },

    {
      name: "MacBook Air",
      price: "₹1,09,999",
      image:
        "https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg"
    },

    {
      name: "Nike Shoes",
      price: "₹5,999",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0d5c65d1-7b7d-4d6b-b9d5-7b94dbf3cf70/air-force-1-07-shoes-WrLlWX.png"
    }

  ]

  // LOGIN PAGE
  if (!loggedIn) {

    return React.createElement(

      "div",

      {
        style: {
          background: "#0f172a",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial"
        }
      },

      React.createElement(

        "div",

        {
          style: {
            background: "#1e293b",
            padding: "40px",
            borderRadius: "20px",
            width: "350px"
          }
        },

        [

          React.createElement(
            "h1",
            {
              key: 1,
              style: {
                color: "white",
                textAlign: "center"
              }
            },
            "Mega Mart Login 🔐"
          ),

          React.createElement(
            "input",
            {
              key: 2,
              placeholder: "Enter Email",
              value: email,
              onChange: (e) => setEmail(e.target.value),

              style: {
                width: "100%",
                padding: "14px",
                marginTop: "20px",
                borderRadius: "10px",
                border: "none"
              }
            }
          ),

          React.createElement(
            "input",
            {
              key: 3,
              type: "password",
              placeholder: "Enter Password",
              value: password,
              onChange: (e) => setPassword(e.target.value),

              style: {
                width: "100%",
                padding: "14px",
                marginTop: "20px",
                borderRadius: "10px",
                border: "none"
              }
            }
          ),

          React.createElement(
            "button",
            {
              key: 4,
              onClick: loginUser,

              style: {
                width: "100%",
                padding: "14px",
                marginTop: "20px",
                background: "#22c55e",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold"
              }
            },
            "Login 🚀"
          ),

          React.createElement(
            "p",
            {
              key: 5,
              style: {
                color: "#cbd5e1",
                marginTop: "20px",
                textAlign: "center"
              }
            },
            "Email: admin@gmail.com | Password: 123456"
          )

        ]

      )

    )

  }

  // HOME PAGE
  return React.createElement(

    "div",

    {
      style: {
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial"
      }
    },

    [

      React.createElement(

        "div",

        {
          key: 10,

          style: {
            background: "#020617",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }
        },

        [

          React.createElement(
            "h1",
            {
              key: 11,
              style: {
                color: "#facc15"
              }
            },
            "Mega Mart 🛒"
          ),

          React.createElement(
            "button",
            {
              key: 12,

              onClick: () => setLoggedIn(false),

              style: {
                background: "#ef4444",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold"
              }
            },
            "Logout"
          )

        ]

      ),

      React.createElement(

        "div",

        {
          key: 13,

          style: {
            textAlign: "center",
            padding: "60px"
          }
        },

        [

          React.createElement(
            "h1",
            {
              key: 14,

              style: {
                fontSize: "60px"
              }
            },
            "Welcome To Mega Mart 🚀"
          ),

          React.createElement(
            "p",
            {
              key: 15,

              style: {
                color: "#cbd5e1",
                fontSize: "22px",
                marginTop: "20px"
              }
            },
            "Modern E-Commerce Website"
          )

        ]

      ),

      React.createElement(

        "div",

        {
          key: 16,

          style: {
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            paddingBottom: "50px"
          }
        },

        products.map((product, index) =>

          React.createElement(

            "div",

            {
              key: index,

              style: {
                background: "#1e293b",
                width: "280px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
              }
            },

            [

              React.createElement(
                "img",

                {
                  key: 20 + index,

                  src: product.image,

                  style: {
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                    background: "white"
                  }
                }
              ),

              React.createElement(

                "div",

                {
                  key: 30 + index,

                  style: {
                    padding: "20px",
                    textAlign: "center"
                  }
                },

                [

                  React.createElement(
                    "h2",
                    {
                      key: 40 + index
                    },
                    product.name
                  ),

                  React.createElement(
                    "p",
                    {
                      key: 50 + index,

                      style: {
                        color: "#facc15",
                        fontSize: "24px",
                        marginTop: "10px"
                      }
                    },
                    product.price
                  ),

                  React.createElement(
                    "button",

                    {
                      key: 60 + index,

                      style: {
                        background: "#22c55e",
                        color: "white",
                        border: "none",
                        padding: "12px 20px",
                        borderRadius: "10px",
                        marginTop: "20px",
                        cursor: "pointer",
                        fontWeight: "bold"
                      }
                    },

                    "Add To Cart 🛒"
                  )

                ]

              )

            ]

          )

        )

      )

    ]

  )

}