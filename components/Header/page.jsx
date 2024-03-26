'use client'
import React, { useContext } from 'react'
import './Header.css'
import NavBar from '../NavBar/page'
import SearchField from '../SearchField/page'
import { MyContext } from '@/app/context/page'

const Header = () => {

  const FetchApiData = useContext(MyContext)

  const background = FetchApiData.BacdropImage

  return (
      <div className="header">
            <img className='img' src={background} alt="" />
            <NavBar/>
            <div className="Heading">
                <h2>Find Movies, TV shows and more</h2>
            </div>
            <SearchField />
      </div>
  )
}

export default Header
