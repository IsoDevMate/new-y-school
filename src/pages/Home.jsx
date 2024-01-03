/* eslint-disable no-unused-vars */
import React from 'react'
import { Cards, Cards1 } from '../cards'
import MainCards from './MainCards'
import Categories from './Categories'
import HomeCards from './HomeCards'

const Home = () => {
  return (
    <div>
      <Categories/>
      <MainCards/>
      {/* <MainCards/> */}
    </div>
  )
}

export default Home