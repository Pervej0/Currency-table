import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import GetPrice from "../DataTest";
import Ticker from "./SubCompo/Ticker";
import "./TickerTape.css";
import EUR_USD from "../../Images/eur_usd.svg";

const TickerTape = () => {
  const [EUR_USD_Data, setEUR_USD_Data] = useState(0);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@ticker");
    ws.onmessage = (event) => {
      let socketObj = JSON.parse(event.data);
      setEUR_USD_Data(socketObj.p.split("."));
      setAllData((prev) => {
        return { ...prev, price: socketObj.p, lasTrade: socketObj.l };
      });
    };
  }, []);

  /*      EUR_USD_Data && (
console.log(EUR_USD_Data)
    )  */
  const EUR_USD_Dtails = {
    EUR_USD: EUR_USD_Data,
    img: EUR_USD,
  };
  /*   const ETH_USD_Dtails = {
        EUR_USD : EUR_USD_Data,
        img: ["https://i.ibb.co/Rjp1Mjn/usd.png"]        
    } */
  return (
    <div className="py-12">
      <h1 className="text-xl">Ticker Tape</h1>
      <div className="border w-9/12 mx-auto p-2">
        <marquee behavior="alternate">
          <div className="flex gap-5">
            <Ticker CompareCurrency={EUR_USD_Dtails} />
            <Ticker CompareCurrency={EUR_USD_Dtails} />
            <Ticker CompareCurrency={EUR_USD_Dtails} />
            <Ticker CompareCurrency={EUR_USD_Dtails} />
            {/* <Ticker CompareCurrency={EUR_USD_Dtails}/>  */}
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default TickerTape;
