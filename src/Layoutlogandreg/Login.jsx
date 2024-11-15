import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContextapi } from "../ContextDokan/ContextApi";
function Login() {


    const {handelLoginuser,setuser} = useContext(MyContextapi);

    const navgateTohome = useNavigate();



    const handelLogin = (event)=>{
        event.preventDefault();

        const email =event.target.email.value;
        const password  = event.target.password.value;


        handelLoginuser(email,password)
        .then((result)=>{
            
            console.log(result);
            const userx = result.user;
            console.log(userx,"sdfsdf")
            setuser(userx);
            
            navgateTohome('/')


        })
        .catch((error)=>{
            console.log("this error from log in")
        })

        

    }



  return (
    <div className="">
      <div className="flex justify-center mt-20">
        <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border-2">
          <form class="card-body" onSubmit={handelLogin}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
          </form>
          <div className="text-center mb-4">
            <p className="text-xl">You have no account 
                <Link to={`/auth/regsitation`} className="ml-2 text-green-500">Register</Link>
            
            </p>
          </div>
        </div>
        <div>
        
        </div>
      </div>
    </div>
  );
}

export default Login;
