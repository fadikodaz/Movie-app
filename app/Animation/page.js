'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import backFallImage from '../../public/assets/no-poster.png'
import '../../style/AllPages.css'
import ChildNavBar from '../../components/ChildNavBar/page'
import Image from 'next/image';

const Animation = () => {

    const router =  useRouter()
    const [ApiData, setApiData] = useState([]);
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjVlMzUzNWFlM2U4NmY5NWY4ZGExYWNmMzZjNzBhMiIsInN1YiI6IjY0YjI3NzEzZTBjYTdmMDBlNzcxODA2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fUUeCiyagBGpxNEfAHWalYWnHTJsuJPs0OTRqSMhw88'
        }
        }; 

    const  FetchApiData = async () => {
        const resp = await fetch(`https://api.themoviedb.org/3/search/movie?query=animation&language=en-US&page=1`, options)
        const data = await resp.json()
        const result = data.results;
        setApiData(result)
    }
    useEffect(()=>{
    FetchApiData()
    },[])

    const DeatilHandler = (type,id) => {
        router.push(`/${type}?id=${id}`)
    }

    const MovieCards = ApiData.map((d,id)=>{
        return(
            <div className="MovieCard" onClick={()=>{DeatilHandler('movie',d.id)}}>
                <div className="imgBox">
                    {
                    d.poster_path 
                    ?
                    <img src={IMAGE_BASE_URL+d.poster_path} alt={d.name || d.title} />
                    :
                    (<Image priority className='img' src={ backFallImage} alt={d.name || d.title} />)
                    }
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
    <>
    <ChildNavBar />
    <div className="Wrapper">
        <div className="CardsHeader">
            <h2>Trending</h2>
        </div>
        <div className="MoviesCardsSection">
            {MovieCards}
        </div>
    </div>
    </>
  )
}

export default Animation
