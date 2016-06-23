/**
 * Created by Administrator on 2016/6/20 0020.
 */
"use strict";
import  React from 'react'
import  ReactDOM from 'react-dom'
import  {createStore} from 'redux'


function ss() {

}

class Views extends React.Component {


  constructor(props) {
    super(props)
  }

  render() {
    const {value, clicks} = this.props
    return (
      <div>
        xxx{value}
        <button onClick={clicks}>xxx</button>
      </div>
    )
  }
}

function counter(state = 0, action) {
  switch (action.type) {
    case'ADD' :
      return state + 1
    default :
      return state
  }
}

const store = createStore(counter);
const rootEl = document.getElementById('root');


function render() {
  ReactDOM.render(
    <Views
      value={store.getState()}
      clicks={()=>store.dispatch({type:'ADD'})}
    />
    , rootEl
  )
}

render();
store.subscribe(render);
