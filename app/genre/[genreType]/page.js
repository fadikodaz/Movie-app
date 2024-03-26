'use client'
import React from 'react'

const GenreTypes = ({params}) => {


    const genreKeyWord = params.genreType
    const val = genreKeyWord.replace(/[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g, ' ')
    console.log(val)

  return (
    <div className="TrendingWrapper">
        <div className="trendingHeader">
            <h2>{val}</h2>
        </div>
        <div className="trendingMoviesCardsSection"> </div>
    </div>
  )
}

export default GenreTypes
