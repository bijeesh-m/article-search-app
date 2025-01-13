const express = require("express");
const articleController = require("../controllers/article.controller");
const authenticate = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/articles", articleController.getArticles);
router.get("/articles/:id", authenticate, articleController.getArticleById);

module.exports = router;
