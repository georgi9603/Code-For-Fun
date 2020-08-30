import numeral from 'numeral';

export const sortCountriesByCasesDesc = (countries) => {
    return [...countries]
        .sort((a, b) => a.cases > b.cases ? -1 : 1)
}

export const sortCountriesByNewCasesDesc = (countries) => {
    return [...countries]
        .sort((a, b) => a.todayCases > b.todayCases ? -1 : 1)
}

export const transformChartData = last120DaysData => {
    const chartData = [];
    let lastDataPoint;

    for (let date in last120DaysData.cases) {
        if (lastDataPoint) {
            let newDataPoint = {
                x: date,
                y: last120DaysData['cases'][date] - lastDataPoint
            }
            chartData.push(newDataPoint);
        }
        lastDataPoint = last120DaysData['cases'][date];
    }
    return chartData;
}

export const lineChartOptions = {
    legend: {
        display: false,
    },
    element: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: true,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem, last120DaysData) {
                return numeral(tooltipItem.value).format("+0,0")
            }
        }
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll"
                }
            }
        ],
        yAxes: [
            {
                gridLines: {
                    display: false
                },
                ticks: {
                    callback: function (value, index, values) {
                        return numeral(value).format("0a")
                    }
                }
            }
        ]
    }
}