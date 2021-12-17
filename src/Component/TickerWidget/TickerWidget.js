import React, { useEffect, useState } from "react";
import SingleTicker from "../SingleTicker";
import SingleTickerWidget from "./Compo/SingleTickerWidget";
import EURUSD from "../../Images/eur_usd.svg";
import CASJPY from "../../Images/cad_jyp.svg";

const TickerWidget = () => {
  const [singleData, setSingleData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const countryList = ["btcusd", "eurusd", "audusd"];
    const currencyImg = [EURUSD, CASJPY, EURUSD];

    return () => {
      let currenciesDetails = [];
      let details = {};
      for (let i = 0; i < countryList.length; i++) {
        let ws = new WebSocket(
          `wss://stream.binance.com:9443/ws/${countryList[i]}t@ticker`
        );
        ws.onmessage = (event) => {
          let socketObj = JSON.parse(event.data);
          /*   details = {
            img: currencyImg[i],
            symbol: socketObj.s,
            price: socketObj.P,
            percentage: socketObj.p,
          }; */
        };

        currenciesDetails.push(details);
      }
    };
  }, []);

  //   console.log(singleData);

  return (
    <div className="border">
      <div className="grid grid-cols-5">
        <SingleTickerWidget />
      </div>
    </div>
  );
};

export default TickerWidget;
