import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

const Home = () => {

    const listUsers=useSelector((state:RootState)=>state.users.value)
    console.log(listUsers)
  return (
    <div>
      <p>hola</p>
    </div>
  )
}

export default Home
