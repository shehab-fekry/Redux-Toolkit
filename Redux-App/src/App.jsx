import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'; // import redux hooks
import { depositMoney, withdrawMoney } from './Store/Actions/account'; // import (account) actions
import { getUsers } from './Store/Actions/users';

function App() {
  let state = useSelector(state => state); // access state
  let dispatch = useDispatch(); // defining dispatch to be used with actions 

  console.log(state)

  return (
    <>
      <div className='app'>
        <div>{state.account.money}</div>
        <button onClick={() => dispatch(depositMoney(1000))}>deposit</button>
        <button onClick={() => dispatch(withdrawMoney(1000))}>withdraw</button>
        <hr/>
        <button onClick={() => dispatch(getUsers())}>ReduxThunk-API</button>
      </div>
    </>
  )
}

export default App
