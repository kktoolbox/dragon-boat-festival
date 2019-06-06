import React from "react";
import RiceDumpling from "./images/rice-dumpling.png";

const LevelTitle = ({ level, title }) => {
  return (
    <h2>
      Level {level}: {title}
    </h2>
  );
};
class App extends React.Component {
  MAX_DUMPLING = 10;
  state = {
    count: 0,
    transformed: false
  };
  handleAdd = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleRemove = () => {
    if (this.state.count === 0) {
      return alert("外面沒粽子了");
    }
    this.setState({ count: this.state.count - 1 });
  };
  handleClear = () => {
    this.setState({ count: 0 });
  };
  handleTransform = () => {
    this.setState({ transformed: !this.state.transformed });
  };
  render() {
    return (
      <div>
        <h1>
          端午節快樂 -{" "}
          {this.state.transformed ? (
            <img src={RiceDumpling} height="50" alt="rice-dumpling" />
          ) : (
            "粽子"
          )}
          ：{this.state.count}
        </h1>
        <div>
          <LevelTitle level={1} title="去吧！粽子" />
          <button onClick={this.handleAdd}>去吧！</button>
        </div>
        <div>
          <LevelTitle level={2} title="回來吧！粽子" />
          <button onClick={this.handleRemove}>回來吧！</button>
        </div>
        <div>
          <LevelTitle level={3} title="消失吧！粽子" />
          <button onClick={this.handleClear}>消失吧！</button>
        </div>
        <div>
          <LevelTitle level={4} title="變形吧！粽子" />
          <button onClick={this.handleTransform}>變形吧！</button>
        </div>
        <div>
          <LevelTitle level={5} title="點爆吧！粽子" />
          {this.state.count < this.MAX_DUMPLING ? (
            <button onClick={this.handleAdd}>
              點爆吧！還有 {this.MAX_DUMPLING - this.state.count} 次
            </button>
          ) : (
            "粽子爆了"
          )}
        </div>
      </div>
    );
  }
}

export default App;
