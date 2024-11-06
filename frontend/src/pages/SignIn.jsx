import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../app/user/userSlice";

const SignIn = () => {
  const { error, loading } = useSelector((store) => store.user);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    try {
      const res = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const err = await res.json();
        dispatch(signInFailure(err.message || "An error occurred"));
        return;
      }
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(err.message || "An error occurred"));
    }
  };

  return (
    <div className="max-w-lg mx-auto text-center my-7">
      <h1 className="capitalize font-semibold text-3xl">sign in</h1>
      {error && <p className="text-red-500 p-2">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
        <input
          type="email"
          placeholder="email"
          id="email"
          value={formData.email}
          className="p-3 border rounded-lg focus:outline-none"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          value={formData.password}
          className="p-3 border rounded-lg focus:outline-none"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-gray-600 text-white p-3 rounded-lg font-semibold uppercase"
        >
          {loading ? "loading" : " sign in"}
        </button>
      </form>
      <p className="text-start px-3">
        Do not have an account ?{" "}
        <span className="text-blue-700 px-2">
          <Link to="/sign-up">sign-up</Link>
        </span>
      </p>
    </div>
  );
};

export default SignIn;
