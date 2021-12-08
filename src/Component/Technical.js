import React from 'react';
import "./Technical.css"; 

const Technical = () => {
    const technicalData = {
        time: [1, 5, 10, 30],
        count: 5000,
    }
    // let rotation = Math.floor(technicalData.count/100)
    const boxColor = {
        boxShadow: "inset 0 30px 60px -15px #f23044",
        borderTopLeftRadius: "110vw",
        borderTopRightRadius: "110vw",
        height: "auto",    
        width: "100%",
        margin: "0 auto"
    }
    return (
        <div className="border">
            <h3 className="text-gray-600 text-center py-2">Technical Analysis</h3>
            <div>
                {technicalData.time.map(item =><button key={item} type="button" className="inline-block px-4 text-lg font-semibold border">{item}min</button>)}
            </div>
            <div className="technical-box relative inline-block p-16">
                <div className="border">
                    <div style={boxColor}>              
                        <svg xmlns="http://www.w3.org/2000/svg" width="220" height="110"><path fill="#F44336" d="M0 110a110 110 0 0120.4-63.8l3.3 2.3A106 106 0 004 110"/><path fill="#EF9A9A" d="M21.6 44.5A110 110 0 0175.1 5.7l1.2 3.8a106 106 0 00-51.5 37.4"/><path fill="#D1D4DC" d="M77 5a110 110 0 0166 0L141.8 9a106 106 0 00-63.6 0"/><path fill="#5B9CF6" d="M145 5.7a110 110 0 0153.4 38.8l-3.2 2.4a106 106 0 00-51.5-37.4"/><path fill="#2962FF" d="M199.6 46.2A110 110 0 01220 110h-4a106 106 0 00-19.7-61.5"/></svg>
                    </div>
                </div>
            <div style={{width: "50px"}}className="absolute leading-3 left-0 right-0 top-10 mx-auto">
                <small className="uppercase font-semibold">Nutral</small>
            </div>
            <div style={{width: "50px", bottom: "9.5rem"}}className="absolute leading-3 left-12">
                <small className="uppercase font-semibold">Sell</small>
            </div>
            <div style={{width: "50px", bottom: "9.5rem"}} className="absolute leading-3 right-12">
                <small className="uppercase font-semibold">Buy</small>
            </div>
            <div style={{width: "50px", bottom: "5rem"}} className="absolute leading-3 left-2">
                <small className="uppercase font-semibold">Strong Sell</small>
            </div>
            <div style={{width: "50px", bottom: "5rem"}} className="absolute leading-3 right-2">
                <small className="uppercase font-semibold">Strong Buy</small>
            </div>
            {/* anticator */}
            <div style={{bottom: "3rem"}}  className="anticator-box absolute left-0 right-0 text-center">
                <div className="anticator border inline-block">
                    <div style={{transform: "rotate(-90deg)"}} className="anticator-line bottom-5 bg-black mx-auto">
                    </div>
                    <div className="anticator-pointer"></div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Technical;