import React from 'react';
import "./componentStyles/Table.css";
import numeral from 'numeral';

function Table({ countries }) {
    return (
        <div className="table">
            <h3>Live Cases by Country</h3>
            <table>
                {countries.map(({ country, cases }) => (
                    <tr key={country}>
                        <td>{country}</td>
                        <td><strong>{numeral(cases).format("0,0,0")}</strong></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Table
