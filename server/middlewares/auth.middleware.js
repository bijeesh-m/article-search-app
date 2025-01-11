const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const token = req.cookies.authToken;
    console.log(token);
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
            if (err) {
                res.status(400).send("Invalid token!");
            } else {
                next();
            }
        });
    }else{
        res.status(401).send("Unauthenticated!")
    }
};

module.exports = authenticate;
