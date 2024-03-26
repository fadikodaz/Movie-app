'use client'
import './SearchResults.css'
import backFallImage from '../../public/assets/no-poster.png'
import ChildNavBar from '../../components/ChildNavBar/page'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'


const SearchResults = () => {

  const router = useRouter()
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
  const [ApiData, setApiData] = useState([]);
  const searchParams = useSearchParams()
  const query = searchParams.get('s')

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjVlMzUzNWFlM2U4NmY5NWY4ZGExYWNmMzZjNzBhMiIsInN1YiI6IjY0YjI3NzEzZTBjYTdmMDBlNzcxODA2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fUUeCiyagBGpxNEfAHWalYWnHTJsuJPs0OTRqSMhw88'
  }
};


const  FetchApiData = async (query) => {
    const resp = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&language=en-US&page=1`, options)
    const data = await resp.json()
    const result = data.results;
    setApiData(result)
}
useEffect(()=>{
  FetchApiData(query)
})

const DeatilHandler = (type,id) => {
  router.push(`/${type}?id=${id}`)
}

const MovieCards = ApiData.map((d,id)=>{
  return(
      <div className="MovieCard" key={id} onClick={()=>{DeatilHandler(d.media_type,d.id)}}>
            <div className="imgBox">
              {
                d.poster_path 
                ?
                (<img src={IMAGE_BASE_URL+d.poster_path} alt={query} />)
                :
                (<Image src={ backFallImage} alt={query} />)
              }               
                <span className="PLayBtnIcon">
                  <span><i className="ri-play-fill"></i></span>
                </span>
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
    <>
        <ChildNavBar/>
    <div className="TrendingWrapper">
            <div className="trendingHeader">
                <h2>You search for " {query} "</h2>
            </div>
            <div className="trendingMoviesCardsSection">
            {

              MovieCards.length > 0
              ?
              MovieCards
              :
              <h1 className='errorMsg'>'Loading...'</h1>
            }
            </div>
    </div>
    </>
  )
}

export default SearchResults
