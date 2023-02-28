import React from "react"
import ReChart from './components/ReCharts';
import VicChart from "./components/Victory";
import VisxChart from './components/Visx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Charts
        </p>
        <div>
          <section className="chart-container">
            <div className="chart">
              <ReChart />
            </div>
            <div className="chart">
              <VisxChart />
            </div>
            <div className="chart">
             <VicChart />
            </div>
          </section>
        </div>
      </header>
    </div>
  );
}

export default App;
