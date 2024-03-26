'use client'
import React, { useEffect, useState } from 'react'
import './SearchField.css'
import { useRouter } from 'next/navigation'

const SearchField = () => {

  const router =  useRouter()
  
  const [searchQuery, setSearchQuery] = useState('');
 
        const onKeyHandler = (key) =>{
          if(key === 'Enter' && searchQuery.length > 0)
          {
              router.push(`/Search?s=${searchQuery}`)
              setSearchQuery('')
          }
        }
  

  return (
        <div className="SearchBarBox">
                <div className="fieldBox">
                    <i className="ri-search-line"></i>
                    <input onChange={(e)=>{setSearchQuery(e.target.value)}} value={searchQuery} onKeyUp={(e)=>{onKeyHandler(e.key)}} type="text" placeholder="Enter Keywords..." />
                </div>
                <button><i className="ri-arrow-right-fill"></i></button>
            </div>
  )
}

export default SearchField
