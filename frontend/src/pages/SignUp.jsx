import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     setLoading(true);
     setError(false);
    try {
      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json(); // Parse the error response
        setError(errorData.message || "An error occurred during sign up.");
        return; // Exit early to avoid proceeding to success handling
      }

      const data = await res.json();
      console.log(data);
      setLoading(false);
      navigate("/sign-in");
    } catch (error) {
      setError("An unexpected error occurred. Please try again."); // General fallback message
      console.log("Error in sign up:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-7 text-center">
      <h1 className="text-3xl my-5 capitalize font-semibold">sign up</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="name"
          id="name"
          className="p-3 border rounded-lg capitalize focus:outline-none"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="p-3 border rounded-lg capitalize focus:outline-none"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="p-3 border rounded-lg capitalize focus:outline-none"
          onChange={handleChange}
          value={formData.password}
        />
        <button
          type="submit"
          disabled={loading} // Disable button when loading
          className="bg-slate-700 p-3 font-semibold text-white uppercase rounded-lg hover:opacity-90 transition duration-200"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <p className="text-start capitalize my-3">
        have an account?
        <span className="mx-3 text-blue-700 text-1xl">
          <Link to="/sign-in">sign in</Link>
        </span>
      </p>
    </div>
  );
};

export default SignUp;
