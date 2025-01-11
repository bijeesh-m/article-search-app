import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [articles, setArticles] = useState([]);


    const navigate = useNavigate()

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

    return (
        <div className=" container p-3">
            <h3>Recent Articles</h3>
            {articles.map((art) => {
                return (
                    <div key={art._id} class="card w-75 mb-3">
                        <div class="card-body">
                            <h5 class="card-title">{art.title}</h5>
                            <p class="card-text">
                              {art.category}
                            </p>
                            <button onClick={()=>navigate(`/article/${art._id}`)}  href="#" class="btn btn-primary">
                                view article
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Home;
