import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "../styles/login.css";

const Login = () => {
  const [type, settype] = useState("");
  const [clicked, setclicked] = useState(false);
  useEffect(() => {
    clicked ? settype("text") : settype("password");
  }, [clicked]);

  return (
    <div>
      <h1>Login Form</h1>
      <div className="wraper">
        <input type={type} placeholder="enter a password"/>
        <button onClick={() => setclicked(!clicked)}>
          {clicked ? (
            <AiFillEye className="icon" />
          ) : (
            <AiFillEyeInvisible className="icon" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Login;
