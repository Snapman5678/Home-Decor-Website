import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/homedecorhome.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Evangelion </h1>
        <p> HOME DECOR </p>
        <Link to="/catalog">
          <button> Check our catalogue </button>
        </Link>
      </div>
    </div>
  )
}

export default Home