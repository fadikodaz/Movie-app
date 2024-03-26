'use client'
import React, { createContext, useEffect, useState } from 'react'
export const MyContext = createContext()

const page = ({children}) => {

  const [ApiData, setApiData] = useState([]);
  const [BacdropImage, setBacdropImage] = useState('');
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjVlMzUzNWFlM2U4NmY5NWY4ZGExYWNmMzZjNzBhMiIsInN1YiI6IjY0YjI3NzEzZTBjYTdmMDBlNzcxODA2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fUUeCiyagBGpxNEfAHWalYWnHTJsuJPs0OTRqSMhw88'
    }
  };

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

  const  FetchApiData = async () => {

        const resp = await fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&page=1`, options)
        const data = await resp.json()
        const result = data.results;
        setApiData(result)
        setBacdropImage(IMAGE_BASE_URL+data.results[Math.floor(Math.random()*20)].backdrop_path)
  }
  useEffect(()=>{
    FetchApiData()
  },[])


  return (
    <div>
        <MyContext.Provider value={{ApiData,BacdropImage}}>
            {children}
        </MyContext.Provider>
    </div>
  )
}

export default page
