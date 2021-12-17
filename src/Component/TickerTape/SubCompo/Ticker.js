import React from "react";

const Ticker = ({ CompareCurrency }) => {
  let percentage = 0;
  if (CompareCurrency.EUR_USD[0] > CompareCurrency.EUR_USD[1]) {
    const count =
      (CompareCurrency.EUR_USD[1] / CompareCurrency.EUR_USD[0]) * 100;
    percentage = count.toFixed(2);
  } else {
    const count =
      (CompareCurrency.EUR_USD[0] / CompareCurrency.EUR_USD[1]) * 100;
    percentage = count.toFixed(2);
  }

  return (
    <div className="items-center gap-4 ticker-container">
      <div className="border-r border-gray-400 flex gap-5 pr-4">
        <div className="pr-8">
          <img
            className="inline"
            style={{ height: "30px", width: "30px" }}
            src={CompareCurrency.img}
            alt=""
          />
          <small
            className="font-semibold inline pl-2"
            style={{ fontSize: "12px" }}
          >
            EURUSD
          </small>
        </div>
        <div className="text-left flex gap-5">
          <h1 className="text-2xl">{CompareCurrency.EUR_USD[0]}</h1>
          <div
            className={
              CompareCurrency.EUR_USD[0] < CompareCurrency.EUR_USD[1]
                ? "text-green-500"
                : "text-red-500"
            }
          >
            <small
              className={`${
                parseInt(percentage) < 1 ? "text-red-400" : "text-green-500"
              }`}
            >
              ({percentage}%)
            </small>
            <h3 className="text-lg inline-block ml-2">
              ({CompareCurrency.EUR_USD[1]})
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
