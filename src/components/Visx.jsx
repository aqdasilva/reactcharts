import { AreaClosed, Line, Bar } from '@visx/shape';
import { GridRows, GridColumns } from '@visx/grid';
import { scaleLinear } from '@visx/scale';
import { curveMonotoneX } from '@visx/curve';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { extent } from 'd3-array';
import { LinearGradient } from '@visx/gradient';

const data = [
  { x: 1, y: 3 },
  { x: 2, y: 5 },
  { x: 3, y: 4 },
  { x: 4, y: 2 },
  { x: 5, y: 6 },
];

const width = 600;
const height = 400;
const margin = { top: 20, bottom: 20, left: 20, right: 20 }; // Defining width, height, and margins for the SVG

const xScale = scaleLinear({
  domain: extent(data, (d) => d.x), // Setting the x domain of the graph to the extent of the data points
  range: [margin.left, width - margin.right], // Setting the x range of the graph to the margins
});

const yScale = scaleLinear({
  domain: [0, Math.max(...data.map((d) => d.y))], // Setting the y domain of the graph to the range of y values in the data points
  range: [height - margin.bottom, margin.top], // Setting the y range of the graph to the margins
});

const gradientColor = "#8bc34a"; // Setting a gradient color for the graph


const VisxChart = () => {
  return (
    <svg width={width} height={height}>
      <LinearGradient
        id="area-gradient"
        from={gradientColor}
        to={gradientColor}
        toOpacity={0.1}
      />

      <GridRows scale={yScale} width={width} height={height} stroke="#e0e0e0" />  {/* // Adding horizontal grid lines to the graph */}
      <GridColumns scale={xScale} width={width} height={height} stroke="#e0e0e0" /> {/*// Adding vertical grid lines to the graph */}

      <AreaClosed // Adding an AreaClosed component to the graph
        data={data} // Providing the data points for the AreaClosed component
        x={(d) => xScale(d.x)} // Mapping the x values of the data points to the xScale
        y={(d) => yScale(d.y)} // Mapping the y values of the data points to the yScale
        yScale={yScale} // Specifying the yScale to use for the AreaClosed component
        strokeWidth={2} // Setting the stroke width of the AreaClosed component
        stroke="transparent" // Making the stroke of the AreaClosed component transparent
        fill="url(#area-gradient)" // Filling the AreaClosed component with a gradient color
        curve={curveMonotoneX} // Specifying the curve to use for the AreaClosed component
      />
       <Line // Adding a Line component to the graph
        data={data} // Providing the data points for the Line component
        x={(d) => xScale(d.x)} // Mapping the x values of the data points to the xScale
        y={(d) => yScale(d.y)}
        stroke="#8bc34a" // Setting the stroke color of the Line component
        strokeWidth={2} // Setting the stroke width of the Line component
        curve={curveMonotoneX} // Specifying the curve to use for the Line component
      />

    {data.map((d) => (
        <Bar // Adding a Bar component for each data point to the graph
          key={d.x} // Providing a unique key for each Bar component
          x={xScale(d.x) - 5} // Setting the x position of the Bar component
          y={yScale(d.y)} // Setting the y position of the Bar component
          height={height - yScale(d.y) - margin.bottom} // Setting the height of the Bar component
          width={10} // Setting the width of the Bar component
          fill="#8bc34a" // Setting the fill color of the Bar component
        />
      ))}

    <AxisLeft // Adding a left axis to the graph
        scale={yScale} // Providing the yScale to use for the axis
        top={margin.top} // Setting the top position of the axis
        left={margin.left} // Setting the left position of the axis
        label={'Value'} // Adding a label to the axis
        stroke="#1b1a1e" // Setting the stroke color of the axis
        tickStroke="#1b1a1e" // Setting the tick stroke color of the axis
        hideAxisLine // Hiding the axis line of the axis
        hideTicks // Hiding the ticks of the axis
        hideZero // Hiding the zero point of the axis
        labelProps={{ fill: '#1b1a1e', fontSize: 12, fontWeight: 600 }} // Setting the style of the label
        tickLabelProps={() => ({ fill: '#1b1a1e', fontSize: 11, textAnchor: 'end', fontWeight: 400, dx: '-0.25em', dy: '0.25em' })} // Setting the style of the tick labels
      />

       <AxisBottom // Adding a bottom axis to the graph
        scale={xScale} // Providing the xScale to use for the axis
        top={height - margin.bottom} // Setting the top position of the axis
        label={'Time'} // Adding a label to the axis
        stroke="#1b1a1e" // Setting the stroke color of the axis
        tickStroke="#1b1a1e" // Setting the tick stroke color of the axis
        hideAxisLine // Hiding the axis line of the axis
        hideTicks // Hiding the ticks of the axis
        labelProps={{ fill: '#1b1a1e', fontSize: 12, fontWeight: 600 }} // Setting the style of the label
        tickLabelProps={() => ({ fill: '#1b1a1e', fontSize: 11, textAnchor: 'middle', fontWeight: 400, dy: '0.25em' })} // Setting the style of the tick labels
      />
    </svg>
  );
};

export default VisxChart;
