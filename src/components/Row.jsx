import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {MdOutlineChevronRight,MdOutlineChevronLeft} from 'react-icons/md'

import Movie from './Movie'


const Row = ({rowId,title,fetchUrl}) => {
    const [movies, setMovies] = useState([])

        useEffect(() => {
          axios.get(fetchUrl).then((response)=>{
            setMovies(response.data.results)
          })

        }, [fetchUrl])

const SlideLeft=()=>{
    let slider=document.getElementById('slider'+rowId)
    slider.scrollLeft=slider.scrollLeft-500
}
const SlideRight=()=>{
    let slider=document.getElementById('slider'+rowId)
    slider.scrollLeft=slider.scrollLeft +500
}


  return (
    <>
    <h1 className='text-white font-bold md:text-xl p-4'>{title}</h1>
    <div className='relative flex items-center group'>
        <MdOutlineChevronLeft onClick={SlideLeft} className='bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
        <div id={'slider' +rowId} className='w-full h-full overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap'>
            {
                movies?.map((item,id)=>(
                   <Movie key={id} item={item} />
                ))
            }
        </div>
        <MdOutlineChevronRight onClick={SlideRight} className='bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
    </div>
    </>
  )
}

export default Row 