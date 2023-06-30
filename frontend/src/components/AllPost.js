import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const AllPost = () => {
  const [allContent, setAllContent] = useState([]);

  const getAllContent = () => {
    axios
      .get("http://localhost:5000/getAllLikes")
      .then((response) => {
        console.log(response.data.likes);
        setAllContent(response.data.likes);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    getAllContent();
  }, []);

  const handleLike = (id) => {
    console.log(id);

    axios
      .put(`http://localhost:5000/like/${id}`)
      .then((response) => {
        console.log(response.data);
        getAllContent();
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <h1
        className="
        text-3xl
        font-bold
        text-center
        text-gray-900
        mb-10
        mt-10
        "
      >
        All Content
      </h1>
      <div
        className="
        grid
        grid-cols-3
        gap-4
        bg-gray-100
        h-screen
        font-mono
        text-base
        p-3

        "
      >
        {allContent.map((content) => {
          return (
            <div
              className="
              bg-white
              shadow-md
              rounded
              px-8
              pt-6
              pb-8
              mb-4
              flex
              flex-col
              justify-center
              items-center
              gap-4
              
              "
            >
              <p
                className="
                text-gray-700
                text-base
                "
              >
                User Id : {content.user_id}
              </p>
              <p
                className="
                text-gray-700
                text-base
                "
              >
                Content : {content.content_id}
              </p>
              <button
                className="
                bg-blue-500
                hover:bg-blue-700
                text-white
                font-bold
                py-2
                px-4
                rounded
                "
                onClick={() => handleLike(content._id)}
              >
                Likes - {content.likes}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllPost;
