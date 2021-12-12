import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import myData from '../TableData';

const MyTable2 = ({isColorful}) => {
    const [data, setData] = useState([]);
    // const [currencyValue, setCurrencyValue] = useState(null);
    
    
    useEffect(()=>{
        fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=EUR,USD,JPY,AUD,CHF,GBP,CAD,NZD&tsyms=EUR,USD,JPY,AUD,CHF,GBP,CAD,NZD").then(res => res.json()).then(result => {
            setData(Object.entries(result));          
        })        
    },[])
     useEffect(()=>{
        fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=EUR,USD,JPY,AUD,CHF,GBP,CAD,NZD&tsyms=EUR,USD,JPY,AUD,CHF,GBP,CAD,NZD").then(res => res.json()).then(result => {
            setData((prev)=> [...prev, result])                      
        })  
    },[])

    console.log(data)
        const handleComparison = (value) =>{
        // return currencyValue?.[1][1][value];
    } 
     
//  console.log(handleComparison("EUR"))

    return (
        <div>
           <div className="md:w-3/5 w-full px-4 mx-auto overflow-x-scroll lg:overflow-x-hidden">
            <table className="border text-center">
                <tbody>
                <tr>
                    <th className="border py-2 px-3">
                        <div className="px-4"></div>
                    </th>                
                    {myData?.map((item,index) =>  (
                    <th key={item.name} className="border py-2 px-3">
                        <div className="flex py-3 px-2 items-center justify-center object-cover">
                        <img src={item[index]} alt=""/>
                            <span className="pl-2">{item.name}</span>
                        </div>
                    </th>))}
              </tr>
               {
                    data.slice(0,8).map((currency, index) =>
                        
                        isColorful ?
                        <tr key={currency[0]}>
                            <th className="border py-2 lg:px-3 px-0 flex items-center">                                
                            <img className="lg:block hidden" src={myData[index][index]} alt=""/>
                                <div className="px-4">{currency[0]}</div>                              
                            </th>                                                                  
                              {
                                <>
                                   <td className={`border ${currency[1]["EUR"] > 1 ? "bg-green-600 text-white": "bg-red-500 text-white"} ${currency[1]["EUR"] === 1 && "bg-blue-300"}`}>{currency[1]["EUR"]}</td>

                                   <td className={`border ${currency[1]["USD"] > 1 ? "bg-green-600 text-white": "bg-red-500 text-white"} ${currency[1]["USD"] === 1 && "bg-blue-300"}`}>{currency[1]["USD"]}</td>

                                   <td className={`border ${currency[1]["JPY"]> 1? "bg-green-600 text-white": "bg-red-500 text-white"} ${currency[1]["JPY"] === 1 && "bg-blue-300"}`}>{currency[1]["JPY"]}</td>

                                   <td className={`border ${currency[1]["AUD"]> 1? "bg-green-600 text-white": "bg-red-500 text-white"} ${currency[1]["AUD"] === 1 && "bg-blue-300"}`}>{currency[1]["AUD"]}</td>

                                   <td className={`border ${currency[1]["CHF"]> 1? "bg-green-600 text-white": "bg-red-500 text-white"} ${currency[1]["CHF"] === 1 && "bg-blue-300"}`}>{currency[1]["CHF"]}</td>

                                   <td className={`border ${currency[1]["GBP"]> 1? "bg-green-600 text-white": "bg-red-500 text-white"} ${currency[1]["GBP"] === 1 && "bg-blue-300"}`}>{currency[1]["GBP"]}</td>

                                   <td className={`border ${currency[1]["CAD"]> 1? "bg-green-600 text-white": "bg-red-500 text-white"} ${currency[1]["CAD"] === 1 && "bg-blue-300"}`}>{currency[1]["CAD"]}</td>

                                   <td className={`border ${currency[1]["NZD"]> 1? "bg-green-600 text-white": "bg-red-500 text-white"} ${currency[1]["NZD"] === 1 && "bg-blue-300"}`}>{currency[1]["NZD"]}</td>
                                </>                           
                                }                                                     
                        </tr>
                        :                       
                        <tr key={currency[0]}>
                            <th className="border py-2 lg:px-3 px-0 flex items-center">                                
                                <img className="lg:block hidden" src={myData[index][index]} alt=""/>
                                <div className="px-4">{currency[0]}</div>                            
                            </th>                   
                          {
                            <>
                                <td className={`border ${currency[1]["EUR"]> 1.5 && "bg-green-300 text-white"}`} >{currency[1]["EUR"]}</td>

                                <td className={`border ${currency[1]["USD"]> 1.5 && "bg-green-300 text-white"}`}>{currency[1]["USD"]}</td>

                                <td className={`border ${currency[1]["JPY"]> 1.5 && "bg-green-300 text-white"}`}>{currency[1]["JPY"]}</td>

                                <td className={`border ${currency[1]["AUD"]> 1.5 && "bg-green-300 text-white"}`}>{currency[1]["AUD"]}</td>

                                <td className={`border ${currency[1]["CHF"]> 1.5 && "bg-green-300 text-white"}`}>{currency[1]["CHF"]}</td>

                                <td className={`border ${currency[1]["GBP"]> 1.5 && "bg-green-300 text-white"}`}>{currency[1]["GBP"]}</td>

                                <td className={`border ${currency[1]["CAD"]> 1.5 && "bg-green-300 text-white"}`}>{currency[1]["CAD"]}</td>

                                <td className={`border ${currency[1]["NZD"]> 1.5 && "bg-green-300 text-white"}`}>{currency[1]["NZD"]}</td>
                            </>                           
                            }                                                  
                    </tr> 
                    
                    )}
                </tbody>
            </table>
          </div>
        </div>
    );
};

export default MyTable2;