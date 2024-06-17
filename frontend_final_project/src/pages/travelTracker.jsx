import React from 'react'
import CountySelect from '../components/TravelTracker/CountySelect.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'

function travelTracker() {
  return (
    <>
      <Navbar/>
      <h1 style={{display: 'flex', justifyContent: "center"}}>travel tracker</h1>
      <CountySelect/>
    </>
  )
}

export default travelTracker