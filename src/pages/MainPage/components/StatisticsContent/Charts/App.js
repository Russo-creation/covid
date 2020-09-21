import React, { Component } from "react";
import ChartWrapper from "./ChartWrapper";

class App extends Component {
  state = {
    gender: "men",
  };

  render() {
    return (
      <div id="mainChart">
        <ChartWrapper
          statistics={this.props.statistics}
          statisticsDate={this.props.statisticsDate}
          chartIndex={this.props.chartIndex}
          gender={this.state.gender}
        />
      </div>
    );
  }
}

export default App;
