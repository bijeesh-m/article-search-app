const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//////////////// USER REGISTRATION /////////////////
module.exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    const isExist = await User.findOne({ email: email });

    if (!isExist) {
        const user = await User.create({
            username: username,
            email: email,
            password: password,
        });

        res.status(200).json({ message: "Registration success", user: user });
    } else {
        res.status(409).json({ message: "User already exist" });
    }
};

//////////////// USER LOGIN ////////////////////////
module.exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const isExist = await User.findOne({ email: email });

        if (isExist) {
            const auth = await bcrypt.compare(password, isExist.password);

            if (auth) {
                const token = jwt.sign({ id: isExist._id, username: isExist.username }, process.env.JWT_SECRET, {
                    expiresIn: "1hr",
                });

                res.cookie("authToken", token, { httpOnly: true });
                res.status(200).json({ message: "Login success!", user: isExist });
            } else {
                res.status(400).send("Invalid password!");
            }
        }
    } catch (error) {
        console.log(error);
    }
};
