import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { AiFillLock } from "react-icons/ai";
import { AiFillUnlock } from "react-icons/ai";


const Login = () => {
  const [password, setPassword] = useState("");

  const isPasswordInvalid = password.trim() === "";

  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <div class="input-container mb-8">
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name="text"
          className="input"
          placeholder="***************"
        />
      </div>

      {isPasswordInvalid ? (
        <>
          <div class="btn-container-disabled">
            <a class="btn-content" href="#">
              <AiFillLock className="h-[30px]"/>
            </a>
          </div>
        </>
      ) : (
        <Link to="/home">
          <div class="btn-container">
            <div class="btn-content flex justify-center items-center relative transition-all" href="#">
              <AiFillLock className="h-[30px] hover:hidden"/>
              <AiFillUnlock className="h-[30px]"/>
            </div>
          </div>
        </Link>
      )}
    </section>
  );
};

export default Login;
