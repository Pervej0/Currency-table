import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import myData from "../TableData";

const MyTable4 = ({isColorful}) => {
  const [data, setData] = useState(null);
  const [currencyValue, setCurrencyValue] = useState(null);
  
useEffect(() => {
    fetch(
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=EUR,USD,JPY,AUD,CHF,GBP,CAD,NZD&tsyms=EUR,USD,JPY,AUD,CHF,GBP,CAD,NZD"
    )
      .then((res) => res.json())
      .then((data) => setData(Object.entries(data)));
  }, []);

 /*  useEffect(() => {
    fetch(
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=EUR,USD,JPY,AUD,CHF,GBP,CAD,NZD&tsyms=EUR,USD,JPY,AUD,CHF,GBP,CAD,NZD"
    )
      .then((res) => res.json())
      .then((result) => {
        setCurrencyValue(Object.entries(result));
      });
  }, []); */

  let isFirstData = true;
  let myArray = [];
  
  const handleComparison = (value) => {
    
/*      if(isFirstData){
  if(val.length < 64 ){
    val.push(value);
  }
}  */

if(myArray.length < 65 ){
  myArray.push(value);
}
}; 

let result = [], i;
const handleBigArrays = ()=> {
  for (i = 0; i < myArray.length; i += 8) { // adding 4 each time
    result.push([myArray[i], myArray[i + 1], myArray[i + 2], myArray[i + 3], myArray[i + 4], myArray[i + 5], myArray[i + 6], myArray[i + 7]]);
}
console.log(result);
}

  return (
    <div>
      <div className="md:w-3/5 w-full px-4 mx-auto overflow-x-scroll lg:overflow-x-hidden">
        <table className="border text-center">
          <tbody>
            <tr>
              <th className="border py-2 px-3">
                <div className="px-4"></div>
              </th>
              {myData?.map((item, index) => (
                <th key={item.name} className="border py-2 px-3">
                  <div className="flex py-3 px-2 items-center justify-center object-cover">
                    <img src={item[index]} alt="" />
                    <span className="pl-2">{item.name}</span>
                  </div>
                </th>
              ))}
            </tr>
            {data?.map((currency, index) => (
                isColorful ?
              <tr key={currency[0]}>
                <th className="border py-2 lg:px-3 px-0 flex items-center">
                 <img
                    className="lg:block hidden"
                    src={myData[index][index]}
                    alt=""
                  />
                    <div className="px-4">{currency[0]}</div>
                </th>
              {Object.entries(currency[1]).map(
                (value, index) =>
          
                    <td
                      key={index}
                      className={`border
                      ${value[1] === 1 && "bg-blue-300"}`}
                    >
                      {value[1]}                      
                    </td>
                                    
                )}                                  
              </tr> :
              <tr key={currency[0]}>
              <th className="border py-2 lg:px-3 px-0 flex items-center">
               <img
                  className="lg:block hidden"
                  src={myData[index][index]}
                  alt=""
                />
                  <div className="px-4">{currency[0]}</div>
              </th>
            {Object.entries(currency[1]).map(
              (value, index) =>           
                  <td
                    key={index}
                    className={`border
                    ${value[1] === 1 && "bg-blue-300"}`}
                  >
                                      
                  {handleComparison(value[1])}
                  </td>                                            
                  )}                
                  </tr>            
                  ))}
                  {handleBigArrays()}             
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTable4;
