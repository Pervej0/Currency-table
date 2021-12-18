import React, { useEffect, useState } from "react";
import SingleTicker from "../SingleTicker";
import SingleTickerWidget from "./Compo/SingleTickerWidget";
import EURUSD from "../../Images/eur_usd.svg";
import AUDUSD from "../../Images/aud_usd.svg";
import GBPUSD from "../../Images/gbp_usd.svg";
import useData from "../../Hooks/useData";

const TickerWidget = () => {

 /*  var socket = io.connect('http://198.38.93.116:1088');

  socket.emit('SubAdd', {subs: ['0~Coinbase~BTC~USD']});
  //socket.emit('SubRemove', {subs: ['0~Coinbase~BTC~USD']});
  //on message received we print all the data inside the #container div
  socket.on('m', function (data) {
      var ticketlist = "";
       const _data= data.split('~');
       $("#p").html(parseFloat(_data[8]));
  });

  socket.on('pump_prices', function (data) {
      console.log(JSON.parse(data));
      // var ticketlist = "";
      //  const _data= data.split('~');
      //  $("#p").html(parseFloat(_data[8]));
  }); */

  const currencyList  = {
    eurusd: useData("eurusd", EURUSD),
    gbpusd: useData("gbpusd", GBPUSD),
    audusd: useData("audusd", AUDUSD),        
} 
  return (
    <div className="border w-5/6 mx-auto py-2">
      <div className="grid grid-cols-3 gap-5">
        {Object.entries(currencyList).map(item =>
           <SingleTickerWidget key={item[1].symbol} details={item}/>
          )}
      </div>
    </div>
  );
};

export default TickerWidget;
