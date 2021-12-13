import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import myData from "../TableData";

const MyTable4 = ({isColorful}) => {
  const [data, setData] = useState(null);
  const [currencyValue, setCurrencyValue] = useState(null);
const allName = ["EUR", "USD", "JPY", "AUD", "CHF", "GBP", "CAD", "NZD"]
  useEffect(() => {
    fetch(
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=EUR,USD,JPY,AUD,CHF,GBP,CAD,NZD&tsyms=EUR,USD,JPY,AUD,CHF,GBP,CAD,NZD"
    )
      .then((res) => res.json())
      .then((data) => setData(Object.entries(data)));
  }, []);

  useEffect(() => {
    fetch(
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=EUR,USD,JPY,AUD,CHF,GBP,CAD,NZD&tsyms=EUR,USD,JPY,AUD,CHF,GBP,CAD,NZD"
    )
      .then((res) => res.json())
      .then((result) => {
        setCurrencyValue(Object.entries(result));
      });
  }, []);

   const handleComparison = (name) => {
    // console.log(name);
    //  return currencyValue.map((value) => value[1][name]); 
    currencyValue.map((currency,index) => currency.map(staticVal => console.log(staticVal)))

}; 

const handleComparison1 = () => {
   return currencyValue?.map((currency, index) => Object.entries(currency[1]).map(value =>  value[1]))
}; 

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
                  currencyValue && (
                    <td
                      key={index}
                      className={`border
                      ${value[1] === 1 && "bg-blue-300"}`}
                    >
                      {value[1]}                      
                    </td>
                  )
                  
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
                currencyValue && (
                  <td
                    key={index}
                    className={`border
                    ${value[1] === 1 && "bg-blue-300"}`}
                  >
                                      
                {value[1]}
                 
                </td>                
                )                
                )}                
                         
            </tr>            
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTable4;
