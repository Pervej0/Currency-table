import React, { useEffect, useState } from "react";

const MyTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  //   console.log(getData);
  const tableHeader = ["EUR", "USD", "JPY", "GBP", "CHF", "AUD"];

  /* const data = [
    {
      name: "EUR",
      0: [
        { country: "EUR", cur: 0 },
        { country: "USD", cur: 2 },
        { country: "JPY", cur: 1 },
        { country: "GBP", cur: 0.22 },
        { country: "CHF", cur: 0.322 },
        { country: "AUD", cur: 2 },
      ],
    },
    {
      name: "USD",
      1: [
        { country: "EUR", cur: 2 },
        { country: "USD", cur: 0 },
        { country: "JPY", cur: 0.023 },
        { country: "GBP", cur: 0.322 },
        { country: "CHF", cur: 0.522 },
        { country: "AUD", cur: 3 },
      ],
    },
    {
      name: "JPY",
      2: [
        { country: "EUR", cur: 3 },
        { country: "USD", cur: 2 },
        { country: "JPY", cur: 0 },
        { country: "GBP", cur: 0.22 },
        { country: "CHF", cur: 0.622 },
        { country: "AUD", cur: 4 },
      ],
    },
    {
      name: "GBP",
      3: [
        { country: "EUR", cur: 3 },
        { country: "USD", cur: 2 },
        { country: "JPY", cur: 0.232 },
        { country: "GBP", cur: 0 },
        { country: "CHF", cur: 0.622 },
        { country: "AUD", cur: 4 },
      ],
    },
    {
      name: "CHF",
      4: [
        { country: "EUR", cur: 3 },
        { country: "USD", cur: 2 },
        { country: "JPY", cur: 0.232 },
        { country: "GBP", cur: 3 },
        { country: "CHF", cur: 0 },
        { country: "AUD", cur: 0.66 },
      ],
    },
    {
      name: "AUD",
      5: [
        { country: "EUR", cur: 5 },
        { country: "USD", cur: 4 },
        { country: "JPY", cur: 0.33 },
        { country: "GBP", cur: 1 },
        { country: "CHF", cur: 2 },
        { country: "AUD", cur: 0 },
      ],
    },
  ]; */

  return (
    <>
      <div className="w-3/5 mx-auto">
        <table className="border text-center">
          <tbody>
            <tr>
              <th className="border py-2 px-3">
                <div className="px-4"></div>
              </th>
              {tableHeader.map((item) => (
                <th key={item} className="border py-2 px-3">
                  {item}
                </th>
              ))}
            </tr>
            {data.map((item, index) => (
              <tr key={item.name}>
                <th className="border py-2 px-3">
                  <div className="px-4">{item.name}</div>
                </th>
                {item[index].map((curren) => (
                  <td key={curren.country} className="border">
                    {curren.cur}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyTable;
