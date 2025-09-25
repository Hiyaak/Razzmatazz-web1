import React, { useEffect, useState } from 'react'

import Slider from 'react-slick'
import ApiService, { ImagePath } from '../../Services/Apiservice'

const HomeDashboard = () => {
  const [images, setImages] = useState([])

  const dashboardImages = async () => {
    try {
      const { data } = await ApiService.post('/getAllDashboardImages')
      if (data.status && data.images) {
        setImages(data.images)
        // console.log('data', data)
      } else {
        console.log('No images found')
      }
    } catch (error) {
      console.log('Error fetching images:', error)
    }
  }
  useEffect(() => {
    dashboardImages()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  return (
    <div className='w-full mx-auto'>
      {images.length > 0 ? (
        <Slider {...settings}>
          {images.map((item, index) => (
            <div key={index}>
              <img
                src={`${ImagePath}${item.image[0]}`}
                alt={`slide-${index}`}
                className='w-full h-[90vh] object-cover'
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p className='text-center text-lg'>Loading images...</p>
      )}
      <h1>about razmatazz</h1>
    </div>
  )
}

export default HomeDashboard
