import { NavLink, useNavigate } from "react-router-dom";
import logo_cake from "../assets/logo-cake.png"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/apiRequest";

export default function NavBar() {

    const user = useSelector((state) => state.auth.login.currentUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout)
    }

    return (
        <nav className=" fixed z-10 left-0 w-full top-0 bg-purple-500 shadow">
            <div className="justify-between px-4 mx-auto  md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div className="w-24 max-w-28 -mt-6 mb-4 h-12">
                            <img className="w-24" src={logo_cake}></img>
                        </div>

                    </div>
                </div>

                <div className="hidden space-x-2 md:inline-block">
                    {
                        user ? (
                            <div className="flex justify-between items-center">
                                <div className="text-white text-lg mr-6 font-[500]">Hi, <span>{user.user.username}</span></div>
                                <button onClick={handleLogout}
                                    className="px-2 py-2 text-white bg-gray-600  rounded-md shadow hover:bg-gray-800"  >Logout</button>

                            </div>

                        ) : (
                            <>
                                <NavLink className="px-2 py-2 text-white bg-gray-600  rounded-md shadow hover:bg-gray-800" to="/sign-in" >Sign in</NavLink>
                                <NavLink className="px-2 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100" to="/sign-up" >Sign up</NavLink>
                            </>
                        )
                    }


                </div>
            </div>
        </nav>
    );
}