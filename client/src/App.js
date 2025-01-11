import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Home from "./pages/Home";
import {Toaster} from "react-hot-toast"
import Article from "./pages/Article";

function App() {
    return (
        <div className="App">
            <Toaster/>
            <Header />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/article/:id" element={<Article />} />
            </Routes>
        </div>
    );
}

export default App;
