import React, { useState } from "react"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginUser = () => {

    if (
      email === "admin@gmail.com" &&
      password === "123456"
    ) {
      setIsLoggedIn(true)
    }

    else {
      alert("Invalid Email or Password")
    }
  }

  // LOGIN PAGE
  if (!isLoggedIn) {

    return React.createElement(

      "div",

      {
        style: {
          backgroundColor: "#0f172a",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial",
        }
      },

      [

        React.createElement(
          "div",
          {
            key: 1,
            style: {
              backgroundColor: "#1e293b",
              padding: "40px",
              borderRadius: "20px",
              width: "350px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
            }
          },

          [

            React.createElement(
              "h1",
              {
                key: 2,
                style: {
                  color: "white",
                  textAlign: "center",
                }
              },
              "Mega Mart Login 🔐"
            ),

            React.createElement(
              "input",
              {
                key: 3,
                type: "email",
                placeholder: "Enter Email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                style: {
                  padding: "14px",
                  borderRadius: "10px",
                  border: "none",
                  fontSize: "16px",
                }
              }
            ),

            React.createElement(
              "input",
              {
                key: 4,
                type: "password",
                placeholder: "Enter Password",
                value: password,
                onChange: (e) => setPassword(e.target.value),
                style: {
                  padding: "14px",
                  borderRadius: "10px",
                  border: "none",
                  fontSize: "16px",
                }
              }
            ),

            React.createElement(
              "button",
              {
                key: 5,
                onClick: loginUser,
                style: {
                  padding: "14px",
                  borderRadius: "10px",
                  border: "none",
                  backgroundColor: "#22c55e",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "18px",
                }
              },
              "Login 🚀"
            ),

            React.createElement(
              "p",
              {
                key: 6,
                style: {
                  color: "#cbd5e1",
                  textAlign: "center",
                }
              },
              "Email: admin@gmail.com | Password: 123456"
            )

          ]

        )

      ]

    )

  }

  // HOME PAGE
  return React.createElement(

    "div",

    {
      style: {
        backgroundColor: "#0f172a",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
      }
    },

    [

      React.createElement(
        "div",
        {
          key: 7,
          style: {
            backgroundColor: "#020617",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }
        },

        [

          React.createElement(
            "h1",
            {
              key: 8,
              style: {
                color: "#facc15",
              }
            },
            "Mega Mart 🛒"
          ),

          React.createElement(
            "button",
            {
              key: 9,
              onClick: () => setIsLoggedIn(false),
              style: {
                padding: "12px 18px",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "#ef4444",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
              }
            },
            "Logout"
          )

        ]

      ),

      React.createElement(
        "div",
        {
          key: 10,
          style: {
            textAlign: "center",
            paddingTop: "100px",
          }
        },

        [

          React.createElement(
            "h1",
            {
              key: 11,
              style: {
                fontSize: "60px",
              }
            },
            "Welcome To Mega Mart 🚀"
          ),

          React.createElement(
            "p",
            {
              key: 12,
              style: {
                marginTop: "20px",
                fontSize: "22px",
                color: "#cbd5e1",
              }
            },
            "Your E-Commerce Website Is Ready"
          )

        ]

      )

    ]

  )

}

export default App