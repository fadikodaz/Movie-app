'use client'
import React, { useState } from 'react'
import Trending from '@/components/Trending/page'
import Header from '@/components/Header/page'

const Home = () => {

  return (
    <div className='HomePage'>
          <Header/>
          <Trending />
    </div>
  )
}

export default Home
