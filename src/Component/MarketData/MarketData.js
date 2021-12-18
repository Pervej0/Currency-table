import React, { useEffect } from 'react';
import EURUSD from "../../Images/eur_usd.svg";
import AUDUSD from "../../Images/aud_usd.svg";
import GBPUSD from "../../Images/gbp_usd.svg";
import useData from "../../Hooks/useData";

const MarketData = () => {

    // console.log(useData("eurusd", EURUSD));
    // console.log(useData("gbpusd", EURUSD));
    // console.log(useData("audusd", AUDUSD));

    const currencyList = {
        eurusd: useData("eurusd", EURUSD),
        gbpusd: useData("gbpusd", GBPUSD),
        audusd: useData("audusd", AUDUSD),        
    } 

    useEffect(() => {
  /*     setTimeout(()=>{
        for(let i = 0; i < countryList.length; i++){            
            let ws = new WebSocket(`wss://stream.binance.com:9443/ws/${countryList[i]}t@ticker`);
             ws.onmessage = (event) => {
                 let socketObj = JSON.parse(event.data);
              const details = {
                 img : currencyImg[i],
                 symbol: socketObj.s,
                 price: socketObj.P,
                 percentage: socketObj.p,
                 } 
                 console.log(socketObj);
             };
           
        }  
      },1000)  */

    }, []);

    return (
        <div className="w-4/5 mx-auto">
            <h2 className="text-3xl my-3">Market Data Widget</h2>
            <table className="w-full border">
            <tbody>
                <tr className="w-full">
                    <th className="border py-3 px-4">Name</th>
                    <th className="border py-3 px-4">Value</th>
                    <th className="border py-3 px-4">Chagne</th>
                    <th className="border py-3 px-4">Chg%</th>
                    <th className="border py-3 px-4">Open</th>
                    <th className="border py-3 px-4">High</th>
                    <th className="border py-3 px-4">Low</th>
                    <th className="border py-3 px-4">Prev</th>
                </tr>
             
                <tr className="bg-blue-100"><td className="text-left  pl-3 py-1 font-semibold" colSpan="8">FOREX</td></tr>
                    {Object.entries(currencyList)?.map(item =>
                                                  
                    <tr key={item[1].symbol} className="border">
                        <th className="uppercase px-3 font-normal flex gap-2">
                            <img width="20" src={item[1]?.img} alt=""/>
                            <span>{item[0]}</span>
                        </th>
                        <td>{item[1].value}
                        </td>
                        <td className={`${parseInt(item[1].priceChange) > 1 ? "text-green-400": "text-red-400"}`}>{item[1].priceChange}                        
                        </td>
                      
                        <td className={`${parseInt(item[1].percentage) > 1 ? "text-green-400": "text-red-400"}`}>
                            {item[1].percentage}%
                        </td>
                        <td>{item[1].open}</td>
                        <td>{item[1].high}</td>
                        <td>{item[1].low}</td>
                        <td>{item[1].prev}</td>
                    </tr>                    
                    )}
                 </tbody>
            </table>
        </div>
    );
};

export default MarketData;