import React from "react";
import { GiCutDiamond } from "react-icons/gi";
import { FaBookReader } from "react-icons/fa";
import { AiFillHome, AiOutlineSearch, AiFillLock, AiFillContacts } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";



<<<<<<< HEAD

=======
>>>>>>> e86644c9ea21d0e490ae3868b91436dda7e8c3a1
export default function Header() {
    var isAuthenticated = true
    return (
        <h1>
            <nav>
                <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
                    <GiCutDiamond />
                    <div>
                        <h4>MG-GEMS</h4>
                    </div>
                </motion.div>



                <div>
                    <Link to="/">
                        <AiFillHome />
                        <span>Home</span>
                    </Link>

<<<<<<< HEAD
                    <Link to="/contact">
=======
                    <Link to="/about">
>>>>>>> e86644c9ea21d0e490ae3868b91436dda7e8c3a1
                        <AiFillContacts />
                        <span>Contact Us</span>
                    </Link>

                    <Link to="/about">
                        <FaBookReader />
                        <span>About</span>
                    </Link>


                    <Link to="/contact">
                        <AiOutlineSearch />
                        <span>Search</span>
                    </Link>

                    <Link to="/cart">
                        <FiShoppingCart />
                    </Link>


<<<<<<< HEAD
                    <Link to="/me">
=======
                    <Link to="/contact">
>>>>>>> e86644c9ea21d0e490ae3868b91436dda7e8c3a1
                        <AiFillLock />
                        <span>Login/Signup</span>
                    </Link>

                  

                    <Link to={isAuthenticated ? "/me" : "/login"}>
                        {isAuthenticated ? <FaUser /> : <FiLogIn />}
                    </Link>
                </div>
            </nav>
        </h1>
    );
}
