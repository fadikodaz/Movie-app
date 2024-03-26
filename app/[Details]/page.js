'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import './Details.css'
import ChildNavBar from '../../components/ChildNavBar/page'
import WatchMore from '../../components/WatchMore/page.jsx'
import DetailsContainer from '@/components/DetailsContainer/page'


const Details = ({params}) => {  

  
  const Media_Type = params.Details
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
  const [data, setApiData] = useState('');
  const [getGenres, setGenres] = useState([]);
  const [production_companies, setProduction_companies] = useState([]);
  const searchParams = useSearchParams()
  const id = searchParams.get('id')


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjVlMzUzNWFlM2U4NmY5NWY4ZGExYWNmMzZjNzBhMiIsInN1YiI6IjY0YjI3NzEzZTBjYTdmMDBlNzcxODA2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fUUeCiyagBGpxNEfAHWalYWnHTJsuJPs0OTRqSMhw88'
    }
  };

  const  FetchApiData = async (id) => {
    const resp = await fetch(`https://api.themoviedb.org/3/${Media_Type}/${id}`, options)
    const result = await resp.json()
    setApiData(result)
    setGenres(result.genres)
    setProduction_companies(result.production_companies)
    }
  useEffect(()=>{
    FetchApiData(id)
  },[id])





  return (
  <div className='detailWrapper'>

  <ChildNavBar/>

  <div className='backdropContainer'>
      <img className='backdropImg' src={IMAGE_BASE_URL+data.backdrop_path} alt="" />
        <div className="DetailContainerWrapper">
             <DetailsContainer DetailsData={data} genre={getGenres} pr={production_companies}/>
        </div>
  </div>

  

  <WatchMore id={id} type={Media_Type}  />

  </div> 
  )
}

export default Details
