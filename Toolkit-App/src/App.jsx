import './App.css'

import { useDispatch, useSelector } from 'react-redux';
import { incement, incementPayload, decrement, decrementPayload } from './Store/Slices/counterSlice';
import { fetchUsers } from './Store/Slices/userSlice';

function App() {
  let dispatch = useDispatch();   // a hook to dispatch actions
  let counter = useSelector(state => state.counterSlice.counter);   // better way of fetching state
  let state = useSelector(state => state);   // not recommended aproach of fetching the root state

  console.log(state)

  return (
    <>
      <div className='app'>
        <div>{counter}</div>
        <button onClick={() => {dispatch(incement())}}>INCREMENT</button>
        <button onClick={() => {dispatch(decrement())}}>DECREMENT</button>
        <hr/>
        <button onClick={() => {dispatch(incementPayload(100))}}>INC-PAYLOAD</button>
        <button onClick={() => {dispatch(decrementPayload(100))}}>DEC-PAYLOAD</button>
        <hr/>
        <button onClick={() => {dispatch(fetchUsers())}}>ReduxThunk-API</button>
      </div>
    </>
  )
}

export default App
