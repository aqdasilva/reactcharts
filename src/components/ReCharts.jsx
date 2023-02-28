import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Defining the data to be used in the chart
const data = [
{ name: 'A', value: 12 },
{ name: 'B', value: 15 },
{ name: 'C', value: 8 },
{ name: 'D', value: 20 },
{ name: 'E', value: 10 },
];

// Defining a functional component for the chart
const ReChart = () => {
// Adding a title to the chart

  <div>
    <title>ReCharts</title>
  </div>
  // Returning the BarChart component with the necessary props
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      {/* Adding a grid with dashed lines to the chart */}
      <CartesianGrid strokeDasharray="3 3" />
      {/* Adding the x-axis to the chart with the dataKey prop to specify which key in the data object to use */}
      <XAxis dataKey="name" />
      {/* Adding the y-axis to the chart */}
      <YAxis />
      {/* Adding a tooltip to the chart */}
      <Tooltip />
      {/* Adding a legend to the chart */}
      <Legend />
      {/* Adding a bar to the chart with the dataKey prop to specify which key in the data object to use */}
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};
// Exporting the ReChart component as the default export of the module
export default ReChart;
