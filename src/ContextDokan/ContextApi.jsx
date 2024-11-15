

import React, { createContext, useState } from 'react'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
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






    const authInfo = {
      handelRegsitationUser,
      handelLoginuser,
      setuser

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