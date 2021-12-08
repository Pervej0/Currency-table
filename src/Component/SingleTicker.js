import React from 'react';

const SingleTicker = () => {
    const EUR_USD = [23.15805, 2.00126]
    let percentage = 0;
   
    if(EUR_USD[0] > EUR_USD[1]){
        const count = EUR_USD[1]/EUR_USD[0] * 100;
        percentage = count.toFixed(2)
    }else{
        const count = EUR_USD[0]/EUR_USD[1] * 100;
        percentage = count.toFixed(2)        
    }
    
    return (
        <div className="sm:w-3/5 lg:w-1/5 w-full px-14 mx-auto">
            <div className="border pl-5 py-2">
                <div className="flex items-center gap-5">
                    <div>
                        <img className="rounded-full" src="https://i.ibb.co/NYKXFdP/f5ed10ec1625eb393ada7073b9afd17e.png" alt=""/>
                        
                        <img className="rounded-full -mt-2" src="https://i.ibb.co/hYNTSSy/gbp.png" alt=""/>
                    </div>
                    <div className="text-left">
                        <h3 className="font-semibold">EURUSD</h3>
                        <small className="uppercase">EURO / U.S Dollar</small>
                    </div>
                </div>
                <div className="text-left flex gap-5">
                    <h1 className="text-2xl">{EUR_USD[0]}</h1>
                    <div className={EUR_USD[0] < EUR_USD[1] ? "text-green-500": "text-red-500"}>
                       <small>{EUR_USD[0] < EUR_USD[1] ? "Yes": "No"},&nbsp;{percentage}%</small>
                       <h3 className="text-lg inline-block ml-2">({EUR_USD[1]})</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTicker;