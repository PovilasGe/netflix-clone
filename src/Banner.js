import React from 'react'
import './Banner.css'

function Banner() {

  function truncate(string, n) {
      return string?.length > n ? string.substr(0, n-1) + '...' : string;
  }

  return (
    <header 
    className='banner' 
    style={{
      backgroundSize: 'cover',
      backgroundImage: `url("https://wallpapercave.com/dwp1x/wp2831915.png")`,
      backgroundPosition: "center center"
    }}>


      <div className='banner_contents'>
        <h1 className='banner_title'>moovie Name</h1>
        <div className='banner_buttons'>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner_Description'>{truncate (`This is test description This is test descriptionThis is test descriptionThis is test descriptionThis is test descriptionThis is test descriptionThis is test descriptionThis is test descriptionThis is test descriptionThis is test descriptionThis is test descriptionThis is test descriptionThis is test descriptionThis is test descriptionThis is test descriptionThis is test descriptionThis is test descriptionThis is test descriptionThis is test descriptionThis is test descriptionThis is test descriptionThis is test descriptionThis is test descriptionThis is test descriptionThis is test description`, 150)}</h1>
      </div>

      <div className='banner--fadeBottom'/>
    </header>
  )
}

export default Banner