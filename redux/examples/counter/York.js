/**
 * Created by Administrator on 2016/6/20 0020.
 */







import React  from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

class Counter extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    const {value, onIncrement} = this.props;
    return (
       <p>
         Click : {value}
         <button onClick={onIncrement}>xxx</button>
       </p>
    )
  }
}

Counter.propTypes = {
  value : React.PropTypes.number.isRequired,
  onIncrement: React.PropTypes.func.isRequired,
}


function counter(state = 0,action) {
   switch (action.type){
     case 'INC':
           return state + 1;
     default : return state
   }
}
const store = createStore(counter);
const rootEl = document.getElementById('root');
function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={()=>store.dispatch({type:'INC'})}
    />
 ,
    rootEl
  )
}


render()
store.subscribe(render)

