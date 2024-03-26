'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import './ChildNavBar.css'
import MiniSearchBar from '@/components/MiniSearchBar/page'
import { useRouter } from 'next/navigation'


const NavBar = () => {


    const router = useRouter()
    const [genreList, setGenreList] = useState([])
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjVlMzUzNWFlM2U4NmY5NWY4ZGExYWNmMzZjNzBhMiIsInN1YiI6IjY0YjI3NzEzZTBjYTdmMDBlNzcxODA2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fUUeCiyagBGpxNEfAHWalYWnHTJsuJPs0OTRqSMhw88'
        }
        }; 

    const  FetchApiData = async () => {

        const resp = await fetch(`https://api.themoviedb.org/3/genre/movie/list`, options)
        const data = await resp.json()
        setGenreList(data.genres)
    };
    useEffect(()=>{
    FetchApiData()
    },[]);

    const genreListHandler = (type,id) => {
        router.push(`/genre/${type}`)
    }


const listData = genreList.map((li)=>{
    return <li className='genreBtn' onClick={()=>{genreListHandler(li.name,li.id)}} key={li.id} >{li.name}</li>
})



  return (
    <div className="navBar">
        <div className='left'>
            <div className="MenuBtn"><i className="ri-menu-2-line"></i></div>
            <div className="logo"><span>HD</span> <h2>Movies</h2></div>
                <ul>
                    <li><Link className='LinkTag' href="/">Home</Link></li>
                    <li className='genre'><Link className='LinkTag' href="#">Genre</Link> 
                    <div className='genreList'>{listData}</div>
                    </li>
                    <li><Link className='LinkTag' href="/Movies">Movies</Link></li>
                    <li><Link className='LinkTag' href="/TvShows">Tv Shows</Link></li>
                    <li><Link className='LinkTag' href="/Animation">Anime</Link></li>
                </ul>
        </div>
        <div className='right'>
            <MiniSearchBar />
            <button>
                Login
            </button>
        </div>
    </div>
  )
}

export default NavBar
