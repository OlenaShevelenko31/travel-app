import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx';
import FactsPost from '../components/FactsPost/FactsPost';
// import video from '../assets/111.mp4'

export default function home() {
  return (

    <div>


{/* <video className='videoTag' autoPlay loop muted>
    <source src={video} type='video/mp4' />
</video> */}
        <Navbar/>

        <h1>home page</h1>
        <FactsPost/>
        
    </div>
  )
}
