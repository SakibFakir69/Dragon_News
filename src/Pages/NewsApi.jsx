import React from "react";
import { NavLink ,Link} from "react-router-dom";

function NewsApi({ data }) {
  console.log(data);

  const {
    author,
    details,

    image_url,
    rating,
    thumbnail_url,
    title,
    total_view,
    _id
  } = data;

  //   show here

  return (
    <div>
      <div className="flex justify-between p-4 bg-gray-300 mt-2 rounded-md m-2">
        <div className="flex  gap-2">
          <div>
            <img src={author.img} alt="" className="w-10 rounded-3xl " />
          </div>
          <div>
            <p>{author.name}</p>
            <p>{author.published_date}</p>
          </div>
        </div>

        <div>
          <i class="ri-share-fill"></i>
          <i class="ri-bookmark-fill"></i>
        </div>
      </div>
      <div>
        <p className="text-xl font-semibold">{title}</p>
        <img src={thumbnail_url} />
        <p>{details}</p>
        <Link to={`/news/${_id}`} className="text-orange-500">Read more</Link>
        <hr></hr>
        <div className="flex justify-between p-4">
          <p>{rating.number}</p>
          <p>{total_view}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsApi;
