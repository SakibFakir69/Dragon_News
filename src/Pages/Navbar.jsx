import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MyContextapi } from "../ContextDokan/ContextApi";
import { signOut } from "firebase/auth";
import auth from "../FirebaseCon/Firebase";

function Navbar() {
  const { user , setuser } = useContext(MyContextapi);

  console.log("from navbar", user);

  // user.disply
  ///user.photutl
  ///update profile

  const navgatetoLogin = useNavigate();

  const handleLogOut = ()=>{
    auth.signOut()
    .then(()=>{
      navgatetoLogin('auth/login')
      setuser(false)
      
    })
    .catch(()=>{
      console.log("eror")
    })
  }



  return (
    <div className="flex justify-between px-4 p-4">
      <div></div>
      <div className="flex gap-4">
        <p>Home</p>
        <p>About</p>
        <p>Career</p>
      </div>
      <div className="flex gap-4">
        <div>
          {user ? (
            <div className="flex gap-2">
              <img
                src={user.photoURL || "../assets/user.png"}
                className="rounded-full w-10 h-10"
              />

              <p className="text-xl">Name: {user.displayName || "guest"}</p>
              <NavLink onClick={handleLogOut}
              
                className={`bg-black py-2 px-6 rounded-md text-white `}
              >
                Log Out

              </NavLink>
            </div>
          ) : (
            <div>
              <NavLink to='/auth/login' className={`px-6 py-2 border-2 rounded-md text-xl text-white bg-black`}>Log in</NavLink>
          

           
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
