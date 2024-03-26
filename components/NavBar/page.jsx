'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import './NavBar.css'


const NavBar = () => {
  return (
        <div className="navBar">
            <div className="MenuBtn"><i className="ri-menu-2-line"></i></div>
               <div className='left'>
                <div className="logo"><span>HD</span> <h2>Movies</h2></div>
                    <ul>
                        <li><Link className='LinkTag' href="/">Home</Link></li>
                        <li className='genre'><Link className='LinkTag' href="">Genre</Link></li>
                        <li><Link className='LinkTag' href="/Movies">Movies</Link></li>
                        <li><Link className='LinkTag' href="/TvShows">Tv Shows</Link></li>
                        <li><Link className='LinkTag' href="/Animation">Anime</Link></li>
                    </ul>
               </div>
                <div className='right'>
                    <button>
                        Login
                    </button>
                </div>
            </div>
  )
}

export default NavBar
