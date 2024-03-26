'use client'
import React, { useContext, useEffect, useState } from 'react'
import './Trending.css'
import { useRouter } from 'next/navigation'

const Trending = () => {

// Api Authorization
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjVlMzUzNWFlM2U4NmY5NWY4ZGExYWNmMzZjNzBhMiIsInN1YiI6IjY0YjI3NzEzZTBjYTdmMDBlNzcxODA2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fUUeCiyagBGpxNEfAHWalYWnHTJsuJPs0OTRqSMhw88'
    }
    }; 

const router =  useRouter()
const [MovieBtn, setMovieBtn] = useState(true);
const [TvShowBtn, setTvShowBtn] = useState(false);
const [ApiData, setApiData] = useState([]);
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

const btnHandler = (type) =>{
    if(type === 'movie')
    {
        setMovieBtn(true)
        setTvShowBtn(false)
        FetchApiData(type)
    }
    else if(type === 'tv')
    {
        setTvShowBtn(true)
        setMovieBtn(false)
        FetchApiData(type)
    }
}

const  FetchApiData = async (value) => {

    const resp = await fetch(`https://api.themoviedb.org/3/trending/${value}/day?language=en-US&page=1`, options)
    const data = await resp.json()
    const result = data.results;
    setApiData(result)
}
useEffect(()=>{
FetchApiData('movie')
},[])

const DeatilHandler = (type,id) => {
    router.push(`/${type}?id=${id}`)
  }

const MovieCards = ApiData.map((d,id)=>{
    return(
        <div className="MovieCard" onClick={()=>{DeatilHandler(d.media_type,d.id)}}>
            <div className="imgBox">
                <img src={IMAGE_BASE_URL+d.poster_path} alt="" />
                <span className="PLayBtnIcon"><span><i className="ri-play-fill"></i></span></span>
                <div className="MovieResult">
                    <span>HD</span>
                </div>
            </div>
            <div className="MovieInfo">
                <h4>{d.title || d.name}</h4>
                <div className="bar">
                    <div>
                        <span className="date">{d.release_date || d.first_air_date}</span>
                        <span>•</span>
                        <span className="duration">139m</span>
                    </div>
                    <span className="type">{d.media_type}</span>
                </div>
            </div>
        </div>
    )
})


    
  return (
    <div className="TrendingWrapper">
        <div className="trendingHeader">
            <h2>Trending</h2>
                <button onClick={()=>{btnHandler('movie')}} className={`Movie ${MovieBtn === true ? 'active' : ''}`}>
                <i className="ri-play-fill"></i>
                Movies
                </button>
                <button onClick={()=>{btnHandler('tv')}} className={`tvShow ${TvShowBtn === true ? 'active' : ''}`}>
                <i className="ri-list-unordered"></i>
                Tv Show
                </button>
        </div>
        <div className="trendingMoviesCardsSection">
            {MovieCards}
        </div>
    </div>
  )
}

export default Trending
