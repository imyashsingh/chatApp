import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Layout from "./components/Layout/Layout";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
    const { authUser } = useAuthContext();
    return (
        <>
            <Toaster />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        index
                        element={authUser ? <Home /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/login"
                        element={authUser ? <Navigate to="/" /> : <Login />}
                    />
                    <Route
                        path="/signup"
                        element={authUser ? <Navigate to="/" /> : <SignUp />}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
