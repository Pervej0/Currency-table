import React from "react";

const Ticker = ({ details }) => {
  console.log(details);
  return (
    <div className="items-center gap-4 ticker-container">
      <div className="border-r border-gray-400 flex gap-5 pr-4">
        <div className="pr-8">
          <img
            className="inline"
            style={{ height: "30px", width: "30px" }}
            src={details[1].img}
            alt=""
          />
          <small
            className="font-semibold inline pl-2"
            style={{ fontSize: "12px" }}
          >
            {details[0]}
          </small>
        </div>
        <div className="text-left flex gap-5">
          <h1 className="text-2xl">{details[1].value}</h1>
          <div                         
          >
            <small
              className={`${
                parseInt(details[1].percentage) < 1 ? "text-red-400" : "text-green-500"
              } uppercase`}
            >
              ({details[1].percentage}%)
            </small>
            <h3 className={`${
                parseInt(details[1].priceChange) < 1 ? "text-red-400" : "text-green-500"
              }`}>
              ({details[1].priceChange})
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
