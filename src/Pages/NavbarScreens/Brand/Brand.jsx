import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ImagePath } from '../../../Services/Apiservice'

const Brand = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const prevdata = location.state
//   console.log('brandId', prevdata._id)

  const brandColors = {
    'Oak and Smoke': 'bg-yellow-200',
    'Kings of Maillard': 'bg-purple-200',
    BFTP: 'bg-green-200',
    Roghan: 'bg-pink-200',
    default: 'bg-gray-100'
  }
  const brandUrls = {
    'Oak and Smoke': 'http://13.126.81.242/oakandsmoke/',
    'Kings of Maillard': 'http://13.126.81.242/kingsmaillard/',
    BFTP: 'http://13.126.81.242/bftp/',
    Roghan: 'http://13.126.81.242/roghan/',
    default: '#'
  }

  return (
    <div className='w-full'>
      <div className='w-full relative'>
        {/* Brand Image */}
        <img
          src={`${ImagePath}${prevdata.brand_img}`}
          alt={prevdata.brandName}
          className='w-full h-[50vh] sm:h-[50vh] md:h-[90vh] object-cover'
        />

        {/* Overlay */}
        <div className='absolute inset-0 bg-black/30'></div>

        {/* Brand Name */}
        <h1 className='absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-6xl font-bold text-white text-center px-4'>
          {prevdata.brandName}
        </h1>
      </div>

      {/* Info Section */}
      <div
        className={`w-full flex flex-col justify-center items-center px-5 h-[45vh] ${
          brandColors[prevdata.brandName] || brandColors.default
        }`}
      >
        <h2 className='text-lg sm:text-xl md:text-2xl text-center text-gray-800'>
          {prevdata.description}
        </h2>

        <div className='flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4'>
          {prevdata.brandName === 'Kings of Maillard' && (
            <a
              href='#bookTable'
              className='px-4 py-3 w-60 text-center bg-purple-950 text-white rounded border-2 border-purple-950 font-semibold hover:bg-white hover:text-purple-950 transition'
            >
              Book Table
            </a>
          )}

          <a
            href={brandUrls[prevdata.brandName] || brandUrls.default}
            target='_blank'
            rel='noopener noreferrer'
            className='px-4 py-3 w-60 text-center rounded border-2 border-purple-950 font-semibold text-purple-950 hover:bg-purple-950 hover:text-white transition'
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default Brand
