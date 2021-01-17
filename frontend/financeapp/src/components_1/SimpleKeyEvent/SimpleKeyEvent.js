import React from "react";
import { InputGroup, FormControl} from "react-bootstrap";
import ReactDOM from 'react-dom';

export class SimpleKeyEvent extends React.Component {
    constructor() {
      super();
      this.state = {
      name: "React-bootstrap key enter event"
    };
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyUp(event) {
    if (event.charCode === 13) {
      this.setState({ inputValue: event.target.value });
    }
  }

  render() {
    const { inputValue } = this.state;

    return (
      <div>
        <InputGroup>
          <FormControl placeholder="Enter amount spent " onKeyPress={this.onKeyUp} />
        </InputGroup>
        <hr />
        <span>Input value is : {inputValue}</span>
      </div>
    );
  }
}
ReactDOM.render(<SimpleKeyEvent />, document.querySelector("#root"));
export default SimpleKeyEvent;