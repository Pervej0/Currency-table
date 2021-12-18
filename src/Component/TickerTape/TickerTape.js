import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import GetPrice from "../DataTest";
import Ticker from "./SubCompo/Ticker";
import "./TickerTape.css";
import EURUSD from "../../Images/eur_usd.svg";
import AUDUSD from "../../Images/aud_usd.svg";
import GBPUSD from "../../Images/gbp_usd.svg";
import useData from "../../Hooks/useData";


const TickerTape = () => {
   const currencyList = {
    eurusd: useData("eurusd", EURUSD),
    gbpusd: useData("gbpusd", GBPUSD),
    audusd: useData("audusd", AUDUSD),        
}  

  return (
    <div className="py-12 tickerTape-section">
      <h1 className="text-xl">Ticker Tape</h1>
      <div className="border w-9/12 mx-auto p-2">       
        <div className="tickerTape">
     
            <div className="flex gap-5">
              {Object.entries(currencyList).map(item => <Ticker key={item} details={item}/>)}          
            </div> 
               
        </div>
      </div>
    </div>
  );
};

export default TickerTape;
