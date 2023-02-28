import React, { useState } from "react";
import { VictoryChart, VictoryBar, VictoryLabel } from "victory";

const VicChart = () => {
  const [externalMutations, setExternalMutations] = useState(undefined);

  const removeMutation = () => {
    setExternalMutations(undefined);
  };

  const clearClicks = () => {
    setExternalMutations([
      {
        childName: "Bar-1",
        target: ["data"],
        eventKey: "all",
        mutation: () => ({ style: undefined }),
        callback: removeMutation
      }
    ]);
  };

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    marginTop: "10px"
  };

  return (
    <div>
      <button onClick={clearClicks} style={buttonStyle}>
        Reset
      </button>
      <VictoryChart domain={{ x: [0, 5] }} externalEventMutations={externalMutations}>
        {/* Adding a chart title */}
        <VictoryLabel text="Click on a bar to turn it orange" x={225} y={30} textAnchor="middle" />
        <VictoryBar name="Bar-1"
          style={{ data: { fill: "grey" } }}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 4 },
            { x: 3, y: 1 },
            { x: 4, y: 5 }
          ]}
          events={[
            {
              target: "data",
              childName: "Bar-1",
              eventHandlers: {
                onClick: () => ({
                  target: "data",
                  mutation: () => ({ style: { fill: "orange" } })
                })
              }
            }
          ]}
        />
      </VictoryChart>
    </div>
  );
};

export default VicChart;
