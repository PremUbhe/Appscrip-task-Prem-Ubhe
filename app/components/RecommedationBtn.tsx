"use client";
import React from "react";
import { useState } from "react";

const RecommedationBtn = () => {
  const [show, toggleShow] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="RecBtn py-2 px-5"
        onClick={() => toggleShow(!show)}
      >
        {`RECOMMENDED`}
      </button>
      {show && (
        <ul className="Reclist list-none bg-white absolute z-10 rounded border">
          <li className="cursor-pointer hover:bg-slate-200 py-1 px-3">
            NEWEST FIRST
          </li>
          <li className="cursor-pointer hover:bg-slate-200 py-1 px-3">
            POPULAR
          </li>
          <li className="cursor-pointer hover:bg-slate-200 py-1 px-3">
            PRICE : HIGH TO LOW
          </li>
          <li className="cursor-pointer hover:bg-slate-200 py-1 px-3">
            PRICE : LOW TO HIGH
          </li>
        </ul>
      )}
    </div>
  );
};

export default RecommedationBtn;
