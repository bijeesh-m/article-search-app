const Article = require("../models/article.model");

module.exports.getArticles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.status(200).send(articles);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports.getArticleById = async (req, res) => {
    console.log("alksdjf");
    const { id } = req.params;
    console.log(id);
    try {
        const article = await Article.findById(id);
        console.log(article);
        if (article) {
            res.status(200).send(article);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
module.exports.getSearchResults = async (req, res) => {
    
    const { query } = req.params;
    console.log(query);
    try {
        const articles = await Article.find();

        
        console.log(article);
        if (article) {
            res.status(200).send(article);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
