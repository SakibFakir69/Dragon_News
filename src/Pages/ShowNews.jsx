

import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewsApi from './NewsApi';

function ShowNews() {
    const data = useLoaderData();

    console.log(data.data)

  return (
    <div>

        {
            data.data.map((item,key)=> <NewsApi data={item} key={key}/>)
        }
       


    </div>
  )
}

export default ShowNews