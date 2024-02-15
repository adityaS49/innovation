import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import Snackbar from "./Snackbar";
const LoginForm = () => {
  const [data, setData] = useState({});
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const navigate = useNavigate();
  console.log(data);
  console.log(showSnackbar);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
          password: passWord,
          expiresInMins: 1, // optional
        }),
      });
      const response = await res.json();
      if (response) {
        setData(response);
      } else {
        setShowSnackbar(true);
      }
    } catch (error) {
      setShowSnackbar(true);
      console.log(error);
    }
  };

  useEffect(() => {
    if (data && data.token) {
      // Assuming data.token exists upon successful login
      navigate("/product");
    }
  }, [data, navigate]);

  return (
    <body>
      <section class="container">
        <div class="login-container">
          <div class="circle circle-one"></div>
          <div class="form-container">
            <img
              src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
              alt="illustration"
              class="illustration"
            />
            <h1 class="opacity">LOGIN</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                placeholder="USERNAME"
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="PASSWORD"
              />
              <button class="opacity">SUBMIT</button>
            </form>
            {showSnackbar && (
              <Snackbar
                message="Invalid Credentials"
                onClose={() => setShowSnackbar(false)}
              />
            )}
          </div>
        </div>
      </section>
    </body>
  );
};

export default LoginForm;
