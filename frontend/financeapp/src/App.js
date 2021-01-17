import {DropDown} from "./components_1/categories/categories.js"
import {SimpleKeyEvent} from "./components_1/SimpleKeyEvent/SimpleKeyEvent.js"
const NewComponent = DropDown;
const NewComponent1 = SimpleKeyEvent;
function App(){
  return(
    <div>
      <NewComponent name ="DropDown">
      </NewComponent>
      <NewComponent1 name ="SimpleKeyEvent">
      </NewComponent1>
    </div> 
  )
}
export default App;