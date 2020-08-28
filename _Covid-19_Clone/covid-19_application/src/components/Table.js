import React from 'react';
import "./componentStyles/Table.css"

function Table({ countries, newCases }) {
    return (
        <div className="table">
            <table>
                {countries.map(({ country, cases, todayCases }) => (
                    <tr key={country}>
                        <td>{country}</td>
                        <td><strong />{newCases ? todayCases : cases}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Table
