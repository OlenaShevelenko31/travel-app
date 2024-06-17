import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx';
import FactsPost from '../components/FactsPost/FactsPost';

export default function home() {
  return (

    <div>
        <Navbar/>

        <h1>home page</h1>
        <FactsPost/>
    </div>
  )
}
