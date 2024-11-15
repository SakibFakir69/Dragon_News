import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Leftbar() {
  const [btn, setbtn] = useState([]);

  ///useeffect

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
      .then((res) => res.json())
      .then((data) => setbtn(data.data.
        news_category
        ));
  },[]);


  return (
    <div>
      <p className="text-xl font-semibold"> All Caterogy</p>

      <div className="flex flex-col gap-4 p-2">

        {
            btn.
            map((item,key)=><NavLink key={item.category_id} className={`px-5 py-1 rounded-sm`} to={`/category/${item.category_id}`} >{item.category_name}</NavLink>)            
        }
        



      </div>
    </div>
  );
}

export default Leftbar;
