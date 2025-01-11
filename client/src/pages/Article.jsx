import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Article = () => {
    const [article, setArticle] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:4000/articles/${id}`, { withCredentials: true })
            .then((res) => {
                console.log(res);
                setArticle(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className=" container mt-5">
            <div class="card ">
                <div class="card-header">Featured</div>
                <div class="card-body">
                    <h3 class="card-title">{article.title}</h3>
                    <p class="card-text">{article.content}</p>
                    <h6>{article.author}</h6>
                </div>
                <div class="card-footer text-body-secondary">2 days ago</div>
            </div>
        </div>
    );
};

export default Article;
