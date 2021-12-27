import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';
import { Button } from 'react-bootstrap';


function App() {
  const state = useSelector((state: State) => state.bank)
  const dispatch = useDispatch()

  console.log(state)

  const {depositMoney, withdrawMoney, bankrupt} = bindActionCreators(actionCreators, dispatch)
  return (
    <div className="App">
      <h1>{state}</h1>
  
      <Button variant="success" onClick={() => depositMoney(1000)}>Deposit</Button>
      <Button variant="danger" onClick={() => withdrawMoney(1000)}>Withdraw</Button>
      <Button variant="secondary" onClick={() => bankrupt()}>Bankrupt</Button>
    </div>
  );
}

export default App;
