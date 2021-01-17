import React from "react";
import ReactDOM from "react-dom";
import "./App.css"

import "./styles.css";
import { CaButton } from "./components/cashbutton/cashbutton";
import { DButton } from "./components/debitbutton/debitbutton";
import { CButton } from "./components/creditbutton/creditbutton";
import Form from "./components/form/form";
import { ConButton } from "./components/confirm button/confirmbutton";

import Logo from "./TOP.jpg"
import Graphic from "./graphic1.jpg"
import Space from "./spacing.jpg"
import Week from "./week.jpg"

function clickCash() {
  alert('You selected Cash!');
}

function clickCredit() {
  alert('You selected Credit!');
}

function clickDebit() {
  alert('You selected Debit!');
}

function clickBudget() {
  alert('Your Budget has been updated !');
}

function App() {
  return (
    
    <div className="App">
    <div/>
    <img src={Logo}/>
    <div>
    <img src={Space}/>
    </div>
    <img src={Graphic}/>
      <div>
      <CaButton onClick={clickCash}
      type="button"
      buttonStyle="btn--success--outline"
      buttonSize="btn--large"
      >Cash</CaButton>
      <span style={{paddingLeft: '5px'}}></span>
      <CButton onClick={clickCredit}
      type="button"
      buttonStyle="btn--warning--outline"
      buttonSize="btn--large"
      >Credit</CButton>
      <span style={{paddingLeft: '5px'}}></span>
      <DButton onClick={clickDebit}
      type="button"
      buttonStyle="btn--danger--outline"
      buttonSize="btn--large"
      >Debit</DButton>
      <span style={{paddingLeft: '5px'}}></span>
      </div>
      <img src={Space}/>
      <div>
      <Form/>
      </div>
      <div>
      <ConButton onClick={clickBudget}>Confirm?</ConButton>
      </div>
      <div>
      <img src={Space}/>
      </div>
      <b>
      <text>Your Budget is $100</text>
      </b>
      <div>
      <img src={Space}/>
      <div/>
      <img src={Week}/>
      </div>
      <div>
      <b>
      <text>You spent $537 this week! </text>
      </b>
      </div>
    </div>
    
  );
}

export default App;