

import React, { createContext } from 'react'


export const MyContextapi = createContext();
function ContextApi({children}) {


    const authInfo = {

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