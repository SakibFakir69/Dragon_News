import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContextapi } from "../ContextDokan/ContextApi";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
function Regsisation() {

    const {handelRegsitationUser,setuser}= useContext(MyContextapi);


    const navgateToHome = useNavigate();



    const handelRegbtn = (event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const photoURL = event.target.photoURL.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


        handelRegsitationUser( email , password)
        .then((result)=>{
            console.log("created");

            const x = result.user;

            // update profile 

            updateProfile(x,{displayName:name,photoURL:photoURL})
            .then(()=>{
                console.log("user update succesfully");
                setuser(x);
                navgateToHome("/")
            })
            .catch((error)=>{
                console.log("error from update prfile")
            })
            
        })
        .catch((error)=>{
            console.log("we found error on Reg",error)
        })

    }





  return (
    <div>
      <div className="flex justify-center mt-20">
        <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form class="card-body" onSubmit={handelRegbtn}>

            {/* name ,photourl */}

            <div className="flex flex-col space-y-3">
                <input type="text" className="border-2 px-16 py-2 rounded-md" name="name" placeholder="Enter your  name"/>
                
                <input type="text" className="border-2 px-16 py-2 rounded-md" name="photoURL" placeholder="Enter your  Photourl"/>
            </div>
            


            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                class="input input-bordered"
                required
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
            <div>
                <p className="text-center mt-4 text-xl">You have account to 

                    <Link to='/auth/login' className="text-green-500 ml-2">Login</Link>
                </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Regsisation;
