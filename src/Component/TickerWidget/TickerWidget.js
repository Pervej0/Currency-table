import React from 'react';
import SingleTicker from '../SingleTicker';

const TickerWidget = () => {
    return (
        <div className="border">
            <div className='grid grid-cols-5'>
                <SingleTicker/>
                <SingleTicker/>
                <SingleTicker/>
            </div>
        </div>
    );
};

export default TickerWidget;