import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = (e) => {
        const toastId = toast.loading("Logging...");
        e.preventDefault();
        console.log(formData);

        // if (Object.keys(errors).length === 0) {
        axios
            .post("http://localhost:4000/login", formData, { withCredentials: true })
            .then((res) => {
                console.log(res);
                toast.success("Login success!", { id: toastId });
                localStorage.setItem("userToken", res.data.token);
                window.location.replace("/");
                setErrors({});
            })
            .catch((err) => {
                console.log(err);
                // toast.error(err.response.data, { id: toastId });
            });
        // } else {
        //     setErrors(err);
        //     toast.dismiss();
        // }
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name) {
            errors.name = "Name is required.";
        }
        if (!formData.email) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid.";
        }
        if (!formData.message) {
            errors.message = "Message is required.";
        }
        return errors;
    };

    return (
        <div>
            <div>
                <form onSubmit={handleLogin} className=" container p-5  mt-5 d-flex flex-column gap-2 border rounded">
                    <h2 className=" text-center">Login</h2>

                    <input
                        value={formData.email}
                        onChange={(e) => handleChange(e)}
                        className=" form-control"
                        type="email"
                        name="email"
                        id="email"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        value={formData.password}
                        onChange={(e) => handleChange(e)}
                        className=" form-control"
                        type="password"
                        name="password"
                        id="password"
                    />
                    <button className=" btn btn-primary">Login</button>
                    <p>
                        Don't have an account ?<Link to={"/register"}> register</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
