import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { getUsertList } from './api/api';
import { useDispatch } from 'react-redux';
import { addUsers } from './features/usersSlice';
import Home from './container/Home';

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    const execute = async () => {
    const listUsers=await getUsertList();
    dispatch(addUsers(listUsers))
    }
    execute()
  },[])

  return (
    <div className="App">
      <Home/>
    </div>
  )
}

export default App
