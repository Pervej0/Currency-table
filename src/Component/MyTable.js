import React, { useEffect, useState } from "react";

const MyTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  //   console.log(getData);
//   const tableHeader = ["EUR", "USD", "JPY", "GBP", "CHF", "AUD"];
  return (
    <>
      <div className="w-3/5 mx-auto">
        <table className="border text-center">
          <tbody>
            <tr>
              <th className="border py-2 px-3">
                <div className="px-4"></div>
              </th>
              {data.map((item) => (
                <th key={item.name} className="border py-2 px-3">
                <div className="flex py-3 px-2 object-cover">
                  <img src={item.img} alt=""/>
                  <span className="pl-2">{item.name}</span>
                  </div>
                </th>
              ))}
            </tr>
            {data?.map((item, index) => (
              <tr key={item.name}>
                <th className="border py-2 px-3 flex">
                    <img src={item.img} alt=""/>
                  <div className="px-4">{item.name}</div>
                </th>
                {item[index].map((curren) => (
                  <td key={curren.country} className={`border  ${curren.cur > 0? "bg-green-400": "bg-red-400"}`} >
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
