import axios from "axios";
import {
    loginFailed, loginStart, loginSuccess,
    logoutStart, logoutFailed, logoutSuccess,
    registerFailed,
    registerStart,
    registerSuccess
} from "./authSilce";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:8005/login", user)
        dispatch(loginSuccess(res.data))
        navigate("/")
    } catch (e) {
        dispatch(loginFailed())
    }
}

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post("http://localhost:8005/register", user);
        dispatch(registerSuccess())
        navigate("/sign-in")
    } catch (e) {
        dispatch(registerFailed())
    }
}

export const logout = async (dispatch, navigate) => {
    dispatch(logoutStart());
    try {
        await axios.post("http://localhost:8005/register")
        localStorage.removeItem('token');
        dispatch(logoutSuccess())
        navigate("/sign-in")

    } catch (e) {
        dispatch(logoutFailed())
    }
}