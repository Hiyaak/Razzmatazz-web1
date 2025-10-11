import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ApiService, { ImagePath } from '../../../Services/Apiservice'

const Brand = () => {
  const navigate = useNavigate()
  const API_URL = import.meta.env.VITE_API_URL
  const location = useLocation()
  const prevdata = location.state
  const [locations, setLocations] = useState([])
  const [aggregators, setAggregators] = useState([])

  console.log('brandId', prevdata._id)

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

  const getLocations = async () => {
    try {
      const { data } = await ApiService.get(
        `/getLocationsByBrand?brandName=${encodeURIComponent(
          prevdata.brandName
        )}`
      )
      if (data.status && data.locations) {
        setLocations(data.locations)
        console.log('locations data', data.locations)
      } else {
        console.log('No locations found')
      }
    } catch (error) {
      console.log('Error fetching locations:', error)
    }
  }

  const getAggregators = async () => {
    try {
      const payload = { brandId: prevdata._id }
      const { data } = await ApiService.post('/getAggregatorByBrandId', payload)

      if (data.status && data.aggregators) {
        setAggregators(data.aggregators)
        console.log('aggregator data', data.aggregators)
      } else {
        console.log('No aggregators found')
      }
    } catch (error) {
      console.log('Error fetching aggregators:', error)
    }
  }

  useEffect(() => {
    // Fetch data only for brands that need it
    if (prevdata.brandName !== 'Kings of Maillard') {
      getLocations()
    }
    if (
      prevdata.brandName !== 'Kings of Maillard' &&
      prevdata.brandName !== 'Oak and Smoke'
    ) {
      getAggregators()
    }
  }, [])

  return (
    <div className='w-full'>
      {/* Hero Section */}
      <div className='w-full relative'>
        <img
          src={`${ImagePath}${prevdata.brand_img}`}
          alt={prevdata.brandName}
          className='w-full h-[50vh] sm:h-[50vh] md:h-[90vh] object-fill'
        />
        <div className='absolute inset-0 bg-black/30'></div>
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
              href='http://13.126.81.242/kingsreservation/'
              target='_blank'
              rel='noopener noreferrer'
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

      {/* Location Section — hidden for Kings of Maillard */}
      {prevdata.brandName !== 'Kings of Maillard' && (
        <div className='bg-[#97282D] w-full py-10 px-6'>
          <div className='container mx-auto'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white text-left mb-12'>
              LOCATIONS
            </h2>

            {locations.length === 0 ? (
              <p className='text-center text-lg text-white'>
                No locations available
              </p>
            ) : (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {locations.map((loc, index) => (
                  <div key={loc._id || index} className='overflow-hidden'>
                    <img
                      src={`${ImagePath}${loc.loc_image}`}
                      alt={loc.locname}
                      className='w-full h-80 object-fill'
                    />
                    <div className='pt-5 pb-5 pr-5 pl-0 text-left'>
                      <h3 className='text-2xl font-medium mb-3 text-white leading-none'>
                        {loc.locname}
                      </h3>
                      <p className='text-white mb-4 tracking-wide leading-relaxed'>
                        {loc.description}
                      </p>
                      <a
                        href={loc.url} 
                        target='_blank' 
                        rel='noopener noreferrer'
                        className='inline-block text-white font-semibold tracking-widest hover:underline text-right'
                      >
                        VISIT
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Aggregator Section — hidden for Oak and Smoke & Kings of Maillard */}
      {prevdata.brandName !== 'Oak and Smoke' &&
        prevdata.brandName !== 'Kings of Maillard' && (
          <div className=''>
            <span className='flex items-center justify-center py-3 text-3xl sm:text-4xl md:text-[45px] border-b border-black bg-[#f1f1ec] font-semibold'>
              Aggregators
            </span>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center items-center bg-[#f1f1ec] py-4 px-5 md:px-10'>
              {aggregators.length > 0 ? (
                aggregators.map(aggregator => (
                  <div
                    className='text-center cursor-pointer overflow-hidden w-full max-w-[300px] font-bold'
                    key={aggregator._id}
                  >
                    <img
                      src={`${ImagePath}${aggregator.brand_img}`}
                      alt={aggregator.name}
                      onClick={() => window.open(aggregator.url, '_blank')}
                      className='w-full h-[180px] mb-2 object-fill rounded-md transition-transform duration-300 hover:scale-105'
                    />
                    <h5 className='font-bold text-lg md:text-xl'>
                      {aggregator.name}
                    </h5>
                  </div>
                ))
              ) : (
                <p className='col-span-full text-center text-gray-500'>
                  No aggregators found. We are adding them soon!
                </p>
              )}
            </div>
          </div>
        )}
    </div>
  )
}

export default Brand
