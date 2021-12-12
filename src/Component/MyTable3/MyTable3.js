import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import myData from '../TableData';

const MyTable3 = () => {
    const [data, setData] = useState(null);
    const [currencyValue, setCurrencyValue] = useState(null);

    useEffect(()=>{
        fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=EUR,USD,JPY,AUD,CHF,GBP,CAD,NZD&tsyms=EUR,USD,JPY,AUD,CHF,GBP,CAD,NZD").then(res => res.json()).then(data => setData(Object.entries(data)))
    },[])

    useEffect(()=>{
        fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=EUR,USD,JPY,AUD,CHF,GBP,CAD,NZD&tsyms=EUR,USD,JPY,AUD,CHF,GBP,CAD,NZD").then(res => res.json()).then(data =>{
            setCurrencyValue(Object.entries(data).forEach((item,index)=> {
                const modified = [myData,...item]
                console.log(modified)
            }))
        })
    },[])
//   console.log(myData);
    //  console.log(currencyValue);
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
                    {data?.map((currency, index) =>
                        <tr key={currency[0]}>
                            <th className="border py-2 lg:px-3 px-0 flex items-center">                                
                                <img className="lg:block hidden" src={myData[index][index]} alt=""/>
                                <div className="px-4">{currency[0]}</div>                              
                            </th> 
                            {Object.entries(currency[1]).map(value => <td>{value[1]}</td>)}
                        </tr>                        
                        )}
                </tbody>
            </table>
          </div>        
        </div>
    );
};

export default MyTable3;