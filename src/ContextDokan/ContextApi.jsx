

import React, { createContext, useEffect, useState } from 'react'

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateCurrentUser } from 'firebase/auth';
import auth from '../FirebaseCon/Firebase';
export const MyContextapi = createContext();
function ContextApi({children}) {


   // create user whith eamil nad password 

   const handelRegsitationUser = (email,password)=>{

    return createUserWithEmailAndPassword(auth , email,password)
   }
  //  login user handel

   const handelLoginuser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
   }

   const [ user , setuser ] = useState(null);
   console.log(user,"context api");

   

   useEffect(()=>{


    const unscribe = onAuthStateChanged(auth , (currentUser)=>{
      console.log(currentUser , "from useeefft")

    
    })

    return ()=> unscribe();
   })





    const authInfo = {
      handelRegsitationUser,
      handelLoginuser,
      setuser,
      user

    }



  return (
    <div>

        <MyContextapi.Provider value={authInfo}>
            {children}

        </MyContextapi.Provider>


    </div>
  )
}

export default ContextApi