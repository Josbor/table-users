import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import TableUsers from '../components/TableUsers'

const Home = () => {

   
  return (
    <div>
      <TableUsers/>
    </div>
  )
}

export default Home
