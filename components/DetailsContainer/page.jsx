import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './DetailsContainer.css'
import backFallImage from '../../public/assets/no-poster.png'



const DetailsContainer = (props) => {

    const data = props.DetailsData
    const genres = props.genre
    const pr_Companies = props.pr
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

    
  return (
        
    <div className='DetailWrapper'>
        <div className="LeftBox">
            <div className="imgBox">
                {
                    data.poster_path
                    ?
                    (<img className='img' src={IMAGE_BASE_URL+data.poster_path} alt={data.title || data.name} />)
                    :
                    (<Image className='img' priority src={backFallImage} alt={data.title || data.name}  />)
                }
            </div>
            <div className="voteWrapper">
                <div className="votes">
                    <div className="voteText">
                        <span>{Math.round(data.vote_average * 10) / 10}</span> / <span>{data.vote_count}</span>
                    </div>
                    <div className="voteLine">
                        <div className="voteBar" style={{width:`${100} * ${ data.vote_average }%`}}></div>
                    </div>
                </div>
                <div className="voteBtns">
                    <button className='LikeBtn'> <i className="ri-thumb-up-fill"></i>   Like</button>
                    <button className='DisLikeBtn'> <i className="ri-thumb-down-fill"></i> Dislike</button>
                </div>
            </div>
        </div>
        <div className="RightBox">
            <div className="Watch_add_Btns_Wrapper">
                    <button className='watchBtn'>
                        <i className="ri-play-fill"></i>
                        Watch now
                    </button>
                    <button className='addBtn'>
                        <i className="ri-add-line"></i>
                        Add to favorite
                    </button>
            </div>
            <div className="MovieTitleWrapper">
                <Link className='title' href={'#'}>{data.title || data.name}</Link>
                <p className="tagLine">{data.tagline}</p>
            </div>
            <div className="videoType_Btns_Wwrapper">
                <button className='trailerBtn'>
                    <i className="ri-vidicon-fill"></i> 
                    Trailer
                </button>
                <button className='hdBtn'>
                    HD
                </button>
                <button className='imdbBtn'>
                    IMDB
                </button>
            </div>
            <div className="Movie_Over_View_Wrapper">
                <p>{data.overview}</p>
            </div>
            <div className="Movie_All_Info_Wrapper">
                <div className="Box Left_MovieInfo_Section">
                    <div className="content">
                        <h4>Released Date :</h4>
                        <p>{data.release_date}</p>
                    </div>
                    <div className="content">
                        <h4>Genre:</h4>
                        {
                            genres.map(gen=>{
                                return <p>{gen.name}</p>
                            })
                        }
                    </div>
                </div>
                <div className="Box Right_MovieInfo_Section">
                    <div className="content">
                        <h4>Duration :</h4>
                        <p>{data.runtime } min</p>
                    </div>
                    <div className="content">
                        <h4>Production:</h4>
                        {
                            pr_Companies.map(pr=>{
                                return <p>{pr.name}</p>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default DetailsContainer