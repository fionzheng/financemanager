import React from 'react';
import ReactDOM from 'react-dom';


export class DropDown extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {value: 'Entertainment'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('You chose ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your spending type:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Entertainment">Eintertainment</option>
            <option value="Shopping">Shopping</option>
            <option value="Groceries">Groceries</option>
            <option value="Rent">Rent</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



ReactDOM.render(<DropDown />, document.querySelector("#root"));

export default DropDown;

