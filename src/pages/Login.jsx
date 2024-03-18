import React from "react";
import { Link } from "react-router-dom";
import './Login.css'
import { AiFillLock } from "react-icons/ai";

const Login = () => {
    return (
        <section className="flex flex-col justify-center items-center h-screen">
            <div class="input-container">
                <input type="text" name="text" class="input" placeholder="search..." />
                <span class="icon">
                    <AiFillLock />
                </span>
            </div>
            <Link to='/home'>Aller à l'accueil</Link>
        </section>
    );
};

export default Login;
