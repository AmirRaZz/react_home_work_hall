import React, { Component } from "react";
import Home from "./components/Home";
import Movies from "./components/Movies";
import AboutUs from "./components/AboutUs";
import NotFound from "./components/NotFound";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import style from "./styles/style.module.scss";

class App1 extends Component {
    render() {
        return (
            <>
                <div className={style.navbar}>
                    <ul>
                        <li>
                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                                to="movies"
                            >
                                Movies
                            </Link>
                        </li>
                        <li>
                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                                to="about-us"
                            >
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/about-us" element={<AboutUs />}></Route>
                        <Route path="/movies" element={<Movies />}></Route>
                        <Route path="/not-found" element={<NotFound />}></Route>
                        <Route
                            path="/*"
                            element={<Navigate to="/not-found" />}
                        ></Route>
                    </Routes>
                </div>
            </>
        );
    }
}

export default App1;
