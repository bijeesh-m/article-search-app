import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = (e) => {
        const toastId = toast.loading("Logging...");
        e.preventDefault();
        console.log(formData);
        axios
            .post("http://localhost:4000/login", formData, { withCredentials: true })
            .then((res) => {
                console.log(res);
                toast.success("Login success", { id: toastId });
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                toast.error("Error occured", { id: toastId });

            });
    };

    return (
        <div>
            <div>
                <h2 className=" text-center mt-5">Login</h2>
                <form onSubmit={handleLogin} className=" container p-5  d-flex flex-column gap-2 border rounded">
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
