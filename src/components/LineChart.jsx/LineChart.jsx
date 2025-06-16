import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ HistoricalData }) => {
    const [data, setData] = useState([["Date", "Prices"]]);

    useEffect(() => {
        if (HistoricalData && HistoricalData.prices) {
            let dataCopy = [["Date", "Prices"]];
            HistoricalData.prices.forEach((item) => {
                const formattedDate = new Date(item[0]).toLocaleDateString().slice(0, -5);
                dataCopy.push([formattedDate, item[1]]);
            });
            setData(dataCopy);
        }
    }, [HistoricalData]);

    return (
        <Chart
            chartType="LineChart"
            data={data}
            height="100%"
            legendToggle
        />
    );
};

export default LineChart;
