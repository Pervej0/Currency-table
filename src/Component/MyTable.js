import React, { useEffect, useState } from "react";
 import myData from "./TableData";

const MyTable = ({isColorFull}) => {
  const [data, setData] = useState([]);
  const [currencyValues, setCurrencyValues] = useState(null);
  
  /* 
  Getting fake data from "fakeData.json" file and displaying those through map function.
   */ 

  useEffect(()=>{
    fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=EUR,USD,JPY,AUD,CHF,GBP,CAD,NZD&tsyms=EUR,USD,JPY,AUD,CHF,GBP,CAD,NZD").then(res => res.json()).then(data => {
      if(data){
       /*  for(let currencies in data){
          console.log(Object.entries(data[currencies]));        
          setCurrencyValues(Object.entries(data[currencies]))
        } */
        console.log(data);
      //  console.log(currencies);
      //  setCurrencyValues(currencies)
      }
    }).catch(error => console.log(error))
  },[])

    useEffect(() => {
    fetch("./RealData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
// myData.map(item => console.log(item))
 console.log(currencyValues);

//  const allName = ["EUR", "USD", "JPY", "AUD", "CHF", "GBP", "CAD", "NZD"]


  return (
    <>
      <div className="md:w-3/5 w-full px-4 mx-auto overflow-x-scroll lg:overflow-x-hidden">
        <table className="border text-center">
          <tbody>
            <tr>
              <th className="border py-2 px-3">
                <div className="px-4"></div>
              </th>
              {/* upper header displaying through map item */}
              {myData?.map((item) => (
                <th key={item.name} className="border py-2 px-3">
                  <div className="flex py-3 px-2 items-center justify-center object-cover">
                    <img src={item.img} alt=""/>
                    <span className="pl-2">{item.name}</span>
                  </div>
                </th>
              ))}
            </tr>
            {/* table left bar and currency data inserted through the use of map item index cause index number used as our property name. So to show currency rate inside td (table data) we can call easily with the help of item index number.*/}
            {data.map((item) => (
              <tr key={item.name}>
                <th className="border py-2 lg:px-3 px-0 flex items-center">
                    <img className="lg:block hidden" src={item.img} alt=""/>
                  <div className="px-4">{item.name}</div>
                </th>
                
                 {/*  {Object.entries(item[item.name])?.map((currency, index) => <td key={index} className={`border ${currency[1] > 0? "bg-green-600 text-white": "bg-red-500 text-white"}`} >
                    {currency[1]}
                  </td>)} */}
                  {
                    currencyValues.map(currency => <td>Hello</td>)
                  }

                {/* {isColorFull? <> 
                {item[item.name].map((curren) => (
                    <td key={curren.country} className={`border ${curren.cur > 0? "bg-green-600 text-white": "bg-red-500 text-white"}`} >
                    {curren.cur}
                  </td>
                ))}
                </>:
                <>{item[item.name].map((curren) => (
                  
                  <td key={curren.country} className={`border ${curren.cur >3 && "bg-green-200"} ${curren.cur < 0 && "bg-red-200"}`}>
                  {curren.cur}
                </td>
              ))}
              </>
                } */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyTable;
