import { useState } from "react";

const useData = (currencyName, img)=>{
    const [details, setDetails] = useState({});

    let ws = new WebSocket(`wss://stream.binance.com:9443/ws/${currencyName}t@ticker`);
    ws.onmessage = (event) => {
        let socketObj = JSON.parse(event.data);
        setDetails((prev) => {
            return {...prev, img : img,
                symbol: socketObj.s,
                value: socketObj.v,
                priceChange: socketObj.P,
                percentage: socketObj.p,
                open: socketObj.o,
                high: socketObj.h,
                low: socketObj.l,
                prev: socketObj.c,
            }
        })
    }
    return details;
}

export default useData;