// import React from 'react';

// const NewsCard = ({news}) => {
//     return (
//         <div>
//             <h3>{news.title}</h3>
//             <img src={news.image_url} alt="" />
//         </div>
//     );
// };

// export default NewsCard;

import { FaBookmark, FaRegEye, FaShareAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    details,
    thumbnail_url,
    rating,
    total_view,
    tags,
  } = news;

  return (
    <div className=" rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition">
      {/* Author Section */}
      <div className="bg-base-200 p-3 flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author?.name}</h3>
            <p className="text-sm text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <button className=" flex gap-2.5 text-gray-600 hover:text-blue-500">
            <FaBookmark />
          <FaShareAlt size={18} />
        </button>
      </div>

      {/* News Title */}
      <h2 className="font-bold text-lg text-gray-900 mb-3">{title}</h2>

      {/* Thumbnail */}
      <div className="mb-3">
        <img
          src={thumbnail_url}
          alt="news thumbnail"
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      {/* Details */}
      <p className="text-gray-600 text-sm mb-3">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <span className="text-blue-600 cursor-pointer font-medium">
              {" "}
              Read More
            </span>
          </>
        ) : (
          details
        )}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-md"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-2 border-t border-gray-200">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(rating.number)].map((_, i) => (
            <AiFillStar key={i} />
          ))}
          <span className="text-gray-700 text-sm ml-1">{rating.number}</span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <FaRegEye />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
