import React, { Component } from "react";

class SayHello extends Component {
  render() {
    console.log(this.props);
    const { name, lastName } = this.props;

    return (
      <div>
        hello {name} {lastName}
      </div>
    );
  }
}

export default SayHello;
