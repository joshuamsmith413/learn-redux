import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, signIn} from './actions';


function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {!isLogged ? <button onClick={() => dispatch(signIn())}>Sign In</button> : <button onClick={() => dispatch(signIn())}>Sign out</button>}
      {isLogged ? <h3>Valuable info I shouldn't see if im not logged in</h3> : null}
    </div>
  );
}

export default App;
