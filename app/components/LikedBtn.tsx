"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as liked } from "@fortawesome/free-solid-svg-icons";

const LikedBtn = () => {
  const [show, toggleShow] = useState(false);

  return (
    <div>
      <button type="button" title="like" onClick={() => toggleShow(!show)}>
        {show === true ? (
          <FontAwesomeIcon className=" text-red-500" icon={liked} size="2xl" />
        ) : (
          <FontAwesomeIcon icon={faHeart} size="2xl" />
        )}
      </button>
    </div>
  );
};

export default LikedBtn;
