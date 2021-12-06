import React from 'react';

const MyTable = () => {
    const tableHeader = ["EUR", "USD", "JPY", "GBP", "CHF", "AUD"]
    const currency = [
        {country: "a", cur: 0},
        {country: "b", cur: 2},
        {country: "c", cur: 1},
        {country: "d", cur: 0.22},
        {country: "e", cur: 0.322},
        {country: "f", cur: 2}
    ];
    return (
        <>
        <div className="w-3/5 mx-auto">
            <table className="border text-center">
                <tbody>
                <tr>
                <th className="border py-2 px-3"><div className="px-4"></div></th> 
                {tableHeader.map(item =>
                <>
                    <th key={item} className="border py-2 px-3">{item}</th> 
                </>
                )}
                </tr>
                <tr>
                    <th>
                        <div className="px-4 border">EUR</div>
                    </th>
                    {currency.map(item => <td>{item.cur}</td> )}
                </tr>
                <tr>
                    <th>
                        <div className="px-4 border">USD</div>
                    </th>
                    {currency.map(item => <td className="border">{item.cur}</td>)}
                </tr>
                <tr>
                    <th>
                        <div className="px-4 border">JPY</div>
                    </th>
                    <td className="border">.004</td>
                </tr>
                <tr>
                    <th>
                        <div className="px-4 border">GBP</div>
                    </th>
                    <td className="border">.004</td>
                </tr>
                <tr>
                    <th>
                        <div className="px-4 border">CHF</div>
                    </th>
                    <td className="border">.004</td>
                </tr>
                <tr>
                    <th>
                        <div className="px-4 border">CHF</div>
                    </th>
                    <td className="border">.004</td>
                </tr>
            </tbody> 
            </table>
            </div>
        </>
    );
};

export default MyTable;