import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { validateEmail, validatePassword } from "../utils";
import { useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // Constants here
    const token = localStorage.getItem("encoded-token");
    const name = localStorage.getItem("name");
    const [authToken, setAuthToken] = useState(token);
    const [userName, setUserName] = useState(name);
    const navigate = useNavigate();
    const [error, setError] = useState({
        emailError: "",
        passwordError: "",
    });

    // Validating email and password
    const validateEmailAndPass = (email, password) => {
        if (validateEmail(email) && validatePassword(password)) {
            return true;
        } else if (!validateEmail(email)) {
            setError({
                passwordError: "",
                emailError: "Enter a valid email.",
            });
        } else if (!validatePassword(password)) {
            setError({
                passwordError: "Must include a number, Minimum 6 char",
                emailError: "",
            });
        }
    };

    // Login form handler here
    const loginFormHandler = async (loginFormData, rememberMe) => {
        if (validateEmailAndPass(loginFormData.email, loginFormData.password)) {
            setError({ passwordError: "", emailError: `` });
            try {
                let res = await axios.post("/api/auth/login", loginFormData);
                const {
                    status,
                    data: {
                        encodedToken,
                        foundUser: { userName },
                    },
                } = res;

                if (status === 200) {
                    // If remember me is true then remember
                    if (rememberMe) {
                        localStorage.setItem("encoded-token", encodedToken);
                        localStorage.setItem("name", userName);
                    }
                    setUserName(userName);
                    setAuthToken(encodedToken);
                    navigate("/", { replace: true });
                    toast.success(`Welcome back ${userName}`);
                }
            } catch (error) {
                const { status, statusText } = error.response;
                if (status === 404) {
                    setError({
                        passwordError: "",
                        emailError: `Email ${statusText}!`,
                    });
                } else if (status === 401) {
                    setError({
                        emailError: "",
                        passwordError: `Wrong password!`,
                    });
                }
            }
        }
    };

    const signUpFormHandler = async (signupFormData) => {
        if (
            validateEmailAndPass(signupFormData.email, signupFormData.password)
        ) {
            setError({ passwordError: "", emailError: `` });
            try {
                let res = await axios.post("/api/auth/signup", signupFormData);
                console.log("res: ", res);
                const {
                    status,
                    data: {
                        encodedToken,
                        createdUser: { userName },
                    },
                } = res;

                if (status === 201) {
                    setAuthToken(encodedToken);
                    setUserName(userName);
                    localStorage.setItem("encoded-token", encodedToken);
                    localStorage.setItem("name", userName);
                    navigate("/", { replace: true });
                    toast.success(`Welcome ${userName}`);
                }
            } catch (error) {
                console.error(error.message);
            }
        }
    };

    // Sign out handler here
    const signOutHandler = () => {
        setAuthToken("");
        setUserName("");
        toast.success("Sign out successfull");
        navigate("/explore");
        localStorage.removeItem("encoded-token");
        localStorage.removeItem("name");
    };

    return (
        <AuthContext.Provider
            value={{
                authToken,
                setAuthToken,
                userName,
                error,
                setError,
                loginFormHandler,
                signOutHandler,
                signUpFormHandler,
            }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
