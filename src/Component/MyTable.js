import React, { useEffect, useState } from "react";

const MyTable = ({isColorFull}) => {
  const [data, setData] = useState([]);
  /* 
  Getting fake data from "fakeData.json" file and displaying those through map function.
   */ 
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="w-3/5 mx-auto overflow-x-scroll md:overflow-x-hidden">
        <table className="border text-center">
          <tbody>
            <tr>
              <th className="border py-2 px-3">
                <div className="px-4"></div>
              </th>
              {/* upper header displaying through map item */}
              {data.map((item) => (
                <th key={item.name} className="border py-2 px-3">
                <div className="flex py-3 px-2 items-center justify-center object-cover">
                  <img src={item.img} alt=""/>
                  <span className="pl-2">{item.name}</span>
                  </div>
                </th>
              ))}
            </tr>
            {/* table left bar and currency data inserted through the use of map item index cause index number used as our property name. So to show currency rate inside td (table data) we can call easily with the help of item index number.*/}
            {data?.map((item, index) => (
              <tr key={item.name}>
                <th className="border py-2 px-3 flex items-center">
                    <img src={item.img} alt=""/>
                  <div className="px-4">{item.name}</div>
                </th>
                {isColorFull? <> 
                {item[index].map((curren) => (
                  
                    <td key={curren.country} className={`border ${curren.cur > 0? "bg-green-600 text-white": "bg-red-500 text-white"}`} >
                    {curren.cur}
                  </td>
                ))}
                </>:
                <>{item[index].map((curren) => (
                  
                  <td key={curren.country} className={`border ${curren.cur >3 && "bg-green-200"} ${curren.cur < 0 && "bg-red-200"}`}>
                  {curren.cur}
                </td>
              ))}
              </>
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyTable;
