import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useAppSelector } from "../../../app/hooks";
import styled from "styled-components";
import moment from "moment";

const BarChartContainer = styled.div`
  flex: 2;
  > canvas {
    width: 100% !important;
    height: 100% !important;
  }
`;

const BarChart = () => {
  //TODO check all 'any' types
  const { barChartData } = useAppSelector((state) => state.chartsData);
  const [currentBarChartData, setCurrentBarChartData] = useState(barChartData);
  const [currentBarChartLabels, setCurrentBarChartLabels] = useState([]);

  useEffect(() => {
    const extractedAverage = barChartData.map((obj: any) => obj.average);
    const extractedlabels = barChartData.map((obj: any) =>
      moment(obj.start).format("MMM Do YY")
    );

    // @ts-ignore
    extractedlabels.sort((a, b) => new Date(b.date) - new Date(a.date));

    setCurrentBarChartData(extractedAverage);
    setCurrentBarChartLabels(extractedlabels);
  }, [barChartData]);

  return (
    <BarChartContainer>
      <Bar
        data={{
          //TODO extract dates from response and visual it
          labels: currentBarChartLabels,
          datasets: [
            {
              label: "Density",
              data: currentBarChartData,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: true,
        }}
      />
    </BarChartContainer>
  );
};

Chart.register(...registerables);
export default BarChart;
