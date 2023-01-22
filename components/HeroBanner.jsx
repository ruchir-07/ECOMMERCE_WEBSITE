import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className="beats-solo">SMAL  TEXT</p>
        <h3>MID TEXT</h3>
        <img src="" alt="HEADPHONES" className='hero-banner-image' />

        <div>
          <Link  href="/product/ID">
            <button type='button'>BUTTON TEXT</button>
          </Link>

          <div className="desc">
            <h5>DESCRIPTION</h5>
            <p>description</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner