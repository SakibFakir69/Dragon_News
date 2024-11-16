



import React from 'react'
import { useActionData, useLoaderData } from 'react-router-dom'

function Details() {
    const data = useLoaderData();
    const idNews = data.data;
    

  return (
    <div>
        {
            idNews.length
        }
        

    </div>
  )
}

export default Details