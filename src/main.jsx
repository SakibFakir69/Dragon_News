import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextApi from './ContextDokan/ContextApi.jsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import HomeLayouts from './HomeLayout.jsx/HomeLayouts.jsx'
import Errorpage from './Pages/Errorpage.jsx'
import ShowNews from './Pages/ShowNews.jsx'
import Auth from './Layoutlogandreg/Auth.jsx'
import Login from './Layoutlogandreg/Login.jsx'
import Regsisation from './Layoutlogandreg/Regsisation.jsx'
import Detailspage from './Details/Detailspage.jsx'
import Details from './Pages/Details.jsx'



const route = createBrowserRouter([
  {
    path : '/',
    element : <HomeLayouts/>,
    errorElement : <Errorpage/>,
    children : [

      {
        path : '',
        element : <Navigate to='/category/01'></Navigate>
      },
      {
        path : '/category/:category_id',
        element : <ShowNews/>,
        loader : ({params})=> fetch(` https://openapi.programming-hero.com/api/news/category/${params.category_id}`)

      }
    

    ]
    

  },
  ,
  {
    path : 'auth',
    element : <Auth/>,
    children :[
      {
        path : '/auth/login',
        element : <Login/>
      },
      {
        path : '/auth/regsitation',
        element : <Regsisation/>
      }
    ]
  },
  {
    path : 'news',
    element : <Detailspage/>,
    children :[
      {
        path : '/news/:id',
        element : <Details/>,
        loader : ({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextApi>
      {/* access any componnetthis folder */}
      <RouterProvider router={route}/>
      
    </ContextApi>
  </StrictMode>,
)
