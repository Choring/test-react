// props.ver
import React, {Component} from 'react'
import Animal2 from './Animal2';

class App extends Component {
  render() {
    return(
        <div>
          <Animal2 
          type='cat' 
          name='scv' 
          size='small' 
          sound='low' 
          appearence='cute'>
          </Animal2>
        </div>
    )
  }
}
export default App;