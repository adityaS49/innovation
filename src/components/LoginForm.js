import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [data, setData] = useState({});
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const navigate = useNavigate();
  console.log(data);

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
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data && data.token) { // Assuming data.token exists upon successful login
      navigate("/product");
    }
  }, [data, navigate]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="p-4 w-[300px] shadow-md rounded-lg border-t-4 border-green-400">
        <h1 className="text-lg font-bold my-4 text-center">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setUserName(e.target.value)}
            className="py-2 text-sm font-semibold px-3 border-2 bg-zinc-100/40"
            type="useraname"
            placeholder=" UserName"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="py-2 text-sm font-semibold px-3 border-2 bg-zinc-100/40"
            type="password"
            placeholder="Password"
          />
          <button className="bg-green-400 text-white cursor-pointer px-6 py-2 font-bold">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
