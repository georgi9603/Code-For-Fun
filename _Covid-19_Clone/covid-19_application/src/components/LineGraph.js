import React from 'react';
import { Line } from 'react-chartjs-2';
import { lineChartOptions } from '../Utils/utils';
import './componentStyles/LineGraph.css';

function LineGraph({ last120DaysData, dataType = "cases" }) {
    let datasets;

    switch (dataType) {
        case "recovered":
            datasets = [{
                backgroundColor: "rgba(0, 177, 106, 1)",
                borderColor: "green",
                data: last120DaysData
            }]
            break;
        case "deaths":
            datasets = [{
                backgroundColor: "rgba(204,16,52,0.5)",
                borderColor: "#CC1034",
                data: last120DaysData
            }]
            break;
        default:
            datasets = [{
                backgroundColor: "rgba(65, 131, 215, 1)",
                borderColor: "blue",
                data: last120DaysData
            }]
            break;
    }

    return (
        <div className="lineGraoh">
            <h3>Worldwide new {dataType}</h3>
            {Object.keys(last120DaysData)?.length > 0 && (
                <Line
                    options={lineChartOptions}
                    data={{
                        datasets: datasets
                    }}
                />
            )}
        </div>
    )
}

export default LineGraph
