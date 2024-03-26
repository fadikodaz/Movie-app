import React, { useState } from 'react'
import './MiniSearchBar.css'
import { useRouter } from 'next/navigation'


const page = () => {

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
    <div className="MiniFieldBox">
            <i className="ri-search-line"></i>
            <input onChange={(e)=>{setSearchQuery(e.target.value)}} value={searchQuery} onKeyUp={(e)=>{onKeyHandler(e.key)}} type="text" placeholder="Enter Keywords..." />
    </div>
  )
}

export default page
