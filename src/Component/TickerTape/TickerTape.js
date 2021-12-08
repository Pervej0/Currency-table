import React from 'react';
import Ticker from './SubCompo/Ticker';

const TickerTape = () => {
    const EUR_USD_Dtails = {
        EUR_USD : [23.15805, 2.00126],
        img: ["https://i.ibb.co/NYKXFdP/f5ed10ec1625eb393ada7073b9afd17e.png", "https://i.ibb.co/hYNTSSy/gbp.png"]        
    }
    const ETH_USD_Dtails = {
        EUR_USD : [23.15805, 2.00126],
        img: ["https://i.ibb.co/Rjp1Mjn/usd.png"]        
    }
    return (
        <div className="py-12">
            <h1 className="text-xl">Ticker Tape</h1>
            <div className="border w-9/12 mx-auto p-2"> 
            <div className="flex gap-5">
                <Ticker CompareCurrency={EUR_USD_Dtails}/>
                <Ticker CompareCurrency={ETH_USD_Dtails}/> 
            </div>
            </div>
        </div>
    );
};

export default TickerTape;