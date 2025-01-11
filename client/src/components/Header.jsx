import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [query, setQuery] = useState("");
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:4000/articles")
            .then((res) => {
                console.log(res);
                setArticles(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const filteredArticles = articles.filter((art) => {
        return art.title.toLowerCase().includes(query.toLowerCase());
    });

    console.log(filteredArticles);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <p className="navbar-brand" href="#">
                        Article
                    </p>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <p className="nav-link active" aria-current="page" href="#">
                                    Home
                                </p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link" href="#">
                                    Features
                                </p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link" href="#">
                                    Pricing
                                </p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link">
                                    <Link to={"/login"}>Sign In</Link>
                                </p>
                            </li>
                        </ul>
                        <div class="input-group w-50 mx-5 mb-3">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Search articles"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />

                            {query && (
                                <div className="position-absolute top-100 z-1 p-4 bg-light w-100 rounded">
                                    {filteredArticles.length !== 0 ? (
                                        filteredArticles.map((art) => {
                                            return (
                                                <p
                                                    className="cursor-pointer	"
                                                    onClick={() => window.location.replace(`/article/${art._id}`)}
                                                >
                                                    {art.title}
                                                </p>
                                            );
                                        })
                                    ) : (
                                        <h6 className=" text-danger">No results found</h6>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
