/* eslint-disable no-unused-vars */
import React from 'react'
//import { Cards, Cards1 } from '../cards'
import MainCards from './MainCards'
import Categories from './Categories'
import GalleryVertical from '../card'

const Home = () => {
  return (
    <div>
      <Categories/>
      <hr/>
     {/* <MainCards/>*/ } 
      <GalleryVertical/>

    </div>
  )
}

export default Home