import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Content = () => {
  const [content, setContent] = useState({
    user_id: "",
    content_id: "",
  });

  const [success, setSuccess] = useState("");

  const getAllContent = () => {
    axios
      .get("http://localhost:5000/getAllLikes")
      .then((response) => {
        console.log(response.data.likes);
      })
      .catch((error) => {
        
      });
  };

  useEffect(() => {
    getAllContent();
  }, [content]);

  const handleChange = (e) => {
    setContent({
      ...content,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/createContent", content)
      .then((response) => {
        console.log(response.data);
        setSuccess("Content Created Successfully");
        setTimeout(() => {
          setSuccess(""); 
        }, 3000);
      })
      .catch((error) => {
      });
  };

  return (
    <>
      {success ? (
        <div className="bg-green-500 text-white text-center p-3">{success}</div>
      ) : (
        ""
      )}

      <div
        className="
        flex
        flex-col
        justify-center
        items-center
        bg-gray-100
        h-screen
        font-mono
        text-base
        gap-4
        p-3
        "
      >
        <h1
          className="
          text-3xl
          font-bold
          text-gray-700
          mb-3
          "
        >
          Create Content
        </h1>
        <label
          className="
          text-xl
          font-bold
          text-gray-700
          mb-3
          "
        >
          User ID
        </label>
        <input
          className="
          border-2
          border-gray-400
          rounded-lg
          p-2
          w-80
          focus:outline-none
          focus:ring-2
          focus:ring-gray-400
          focus:border-transparents
          "
          type="text"
          name="user_id"
          value={content.user_id}
          onChange={handleChange}
        />
        <label
          className="
          text-xl
          font-bold
          text-gray-700
          mb-3
          "
        >
          Content{" "}
        </label>
        <input
          className="
          border-2
          border-gray-400
          rounded-lg
          p-2
          w-80
          focus:outline-none
          focus:ring-2
          focus:ring-gray-400
          focus:border-transparents
          "
          type="text"
          name="content_id"
          value={content.content_id}
          onChange={handleChange}
        />
        <button
          className="
          bg-gray-700
          text-white
          font-bold
          py-2
          px-4
          rounded
          focus:outline-none
          focus:shadow-outline
          "
          type="submit"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>

        <Link to="/allPost">
          <button
            className="
            bg-gray-700
            text-white
            font-bold
            py-2
            px-4
            rounded
            focus:outline-none
            focus:shadow-outline
            "
          >
            View All Post
          </button>
        </Link>
      </div>
    </>
  );
};

export default Content;
