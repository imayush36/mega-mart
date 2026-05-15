import React, { useState } from "react";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 79999,
      description: "Latest Apple smartphone with A17 chip.",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },

    {
      id: 2,
      name: "Gaming Laptop",
      price: 120000,
      description: "High performance gaming laptop.",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },

    {
      id: 3,
      name: "Headphones",
      price: 2999,
      description: "Noise cancelling premium headphones.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
  ];

  const loginUser = () => {

    if (
      email === "admin@gmail.com" &&
      password === "123456"
    ) {

      setLoggedIn(true);

    }

    else {

      alert("Wrong Email or Password");

    }

  };

  const addToCart = (product) => {

    setCart([...cart, product]);

  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

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
          fontFamily: "Arial",
        },
      },

      React.createElement(

        "div",

        {
          style: {
            background: "#1e293b",
            padding: "40px",
            borderRadius: "20px",
            width: "350px",
            textAlign: "center",
          },
        },

        [

          React.createElement(
            "h1",
            {
              key: 1,
              style: {
                color: "white",
                marginBottom: "20px",
              },
            },
            "Mega Mart Login 🔐"
          ),

          React.createElement("input", {
            key: 2,
            type: "email",
            placeholder: "Enter Email",
            value: email,
            onChange: (e) => setEmail(e.target.value),

            style: {
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: "none",
            },
          }),

          React.createElement("input", {
            key: 3,
            type: "password",
            placeholder: "Enter Password",
            value: password,
            onChange: (e) => setPassword(e.target.value),

            style: {
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: "none",
            },
          }),

          React.createElement(
            "button",
            {
              key: 4,
              onClick: loginUser,

              style: {
                width: "100%",
                padding: "12px",
                background: "#22c55e",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold",
              },
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
                fontSize: "14px",
              },
            },
            "Email: admin@gmail.com | Password: 123456"
          ),
        ]
      )
    );

  }

  // HOME PAGE

  return React.createElement(

    "div",

    {
      style: {
        background: darkMode ? "#0f172a" : "#f1f5f9",
        minHeight: "100vh",
        color: darkMode ? "white" : "black",
        padding: "30px",
        fontFamily: "Arial",
      },
    },

    [

      React.createElement(
        "div",

        {
          key: "navbar",

          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
            flexWrap: "wrap",
            gap: "20px",
          },
        },

        [

          React.createElement(
            "h1",
            {
              key: "logo",
            },
            "🛒 Mega Mart"
          ),

          React.createElement("input", {
            key: "search",
            type: "text",
            placeholder: "Search products...",
            value: search,
            onChange: (e) => setSearch(e.target.value),

            style: {
              padding: "10px",
              borderRadius: "10px",
              border: "none",
              width: "250px",
            },
          }),

          React.createElement(
            "button",
            {
              key: "mode",
              onClick: () => setDarkMode(!darkMode),

              style: {
                padding: "10px 20px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              },
            },

            darkMode ? "Light Mode" : "Dark Mode"
          ),

          React.createElement(
            "h2",
            {
              key: "cart",
            },
            `🛒 ${cart.length}`
          ),
        ]
      ),

      React.createElement(
        "div",

        {
          key: "products",

          style: {
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          },
        },

        filteredProducts.map((product) =>

          React.createElement(

            "div",

            {
              key: product.id,

              style: {
                background: darkMode ? "#1e293b" : "white",
                padding: "20px",
                borderRadius: "15px",
                width: "250px",
                textAlign: "center",
              },
            },

            [

              React.createElement("img", {
                key: "img",
                src: product.image,

                style: {
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                },
              }),

              React.createElement(
                "h2",
                {
                  key: "name",
                },
                product.name
              ),

              React.createElement(
                "p",
                {
                  key: "price",

                  style: {
                    color: "#38bdf8",
                    fontSize: "20px",
                  },
                },

                `₹${product.price}`
              ),

              React.createElement(
                "button",
                {
                  key: "details",

                  onClick: () => setSelectedProduct(product),

                  style: {
                    background: "#22c55e",
                    border: "none",
                    padding: "10px",
                    borderRadius: "10px",
                    marginRight: "10px",
                    cursor: "pointer",
                    color: "white",
                  },
                },

                "Details"
              ),

              React.createElement(
                "button",
                {
                  key: "btn",

                  onClick: () => addToCart(product),

                  style: {
                    background: "#38bdf8",
                    border: "none",
                    padding: "10px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  },
                },

                "Add To Cart"
              ),
            ]
          )
        )
      ),

      selectedProduct &&

        React.createElement(

          "div",

          {
            key: "modal",

            style: {
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.7)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          },

          React.createElement(

            "div",

            {
              style: {
                background: "white",
                color: "black",
                padding: "30px",
                borderRadius: "20px",
                width: "300px",
                textAlign: "center",
              },
            },

            [

              React.createElement("img", {
                key: "img",
                src: selectedProduct.image,

                style: {
                  width: "100%",
                  borderRadius: "10px",
                },
              }),

              React.createElement(
                "h2",
                {
                  key: "title",
                },
                selectedProduct.name
              ),

              React.createElement(
                "p",
                {
                  key: "desc",
                },
                selectedProduct.description
              ),

              React.createElement(
                "h3",
                {
                  key: "price",
                },
                `₹${selectedProduct.price}`
              ),

              React.createElement(
                "button",
                {
                  key: "close",

                  onClick: () => setSelectedProduct(null),

                  style: {
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  },
                },

                "Close"
              ),
            ]
          )
        ),
    ]
  );

}

export default App;