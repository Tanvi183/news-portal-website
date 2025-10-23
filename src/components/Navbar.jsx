import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  // console.log(user);

    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure you want to log out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "Cancel"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        Swal.fire({
                            icon: "success",
                            title: "Logged Out!",
                            text: "You have been successfully logged out.",
                            showConfirmButton: false,
                            timer: 1500 // auto-close after 1.5 seconds
                        });
                    })
                    .catch((error) => {
                        console.error("Logout Error:", error);
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong during logout. Please try again.",
                        });
                    });
            }
        });
    };


    const getNavLinkClass = ({ isActive }) => 
        isActive ? "text-primary font-bold" : "text-accent hover:text-primary";

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/" className={getNavLinkClass} >Home</NavLink>
        <NavLink to="/about" className={getNavLinkClass}>About</NavLink>
        <NavLink to="/career" className={getNavLinkClass}>Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={`${user ? user.photoURL : userImg}`} alt="User image" />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10 ">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10 ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
