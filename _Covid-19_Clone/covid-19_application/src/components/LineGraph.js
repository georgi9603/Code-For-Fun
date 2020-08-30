import React from 'react';
import './componentStyles/LineGraph.css';
import { Line } from 'react-chartjs-2';
import { lineChartOptions } from '../Utils/utils';

function LineGraph({ last120DaysData }) {
    return (
        <div className="lineGraoh">
            <h3>Worldwide new cases</h3>
            {Object.keys(last120DaysData)?.length > 0 && (
                <Line
                    options={lineChartOptions}
                    data={{
                        datasets: [{
                            backgroundColor: "rgba(204,16,52,0.5)",
                            borderColor: "#CC1034",
                            data: last120DaysData
                        }]
                    }}
                />
            )}
        </div>
    )
}

export default LineGraph
