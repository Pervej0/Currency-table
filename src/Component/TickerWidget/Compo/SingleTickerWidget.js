import React, { useEffect, useState } from "react";

const SingleTickerWidget = ({details}) => {
  console.log(details);
  return (
    <div className="px-2">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img width="25" src={details[1].img} alt="" />
          <span className="uppercase text-sm">{details[0]}</span>
        </div>
        <div>
          <small>{details[1].value}</small>
        </div>
      </div>
      <div className="text-left flex gap-2">
        {/* <span>{details[1].value > 1}</span> */}
        <h2 className={`${parseInt(details[1].priceChange) > 1 ? "text-green-400" : "text-red-400"} text-2xl`}>{details[1].percentage}% 
          <span className="text-sm pl-2">{details[1].priceChange}</span>
        </h2>
      </div>
    </div>
  );
};

export default SingleTickerWidget;
