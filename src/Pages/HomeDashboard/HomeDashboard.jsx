import React, { useEffect, useState } from 'react'
import ApiService, { ImagePath } from '../../Services/Apiservice'
import About_Img from '../../assets/image-placeholder-2@2x.png'
import left_arrow from '../../assets/Design-System.png'
import right_arrow from '../../assets/Design-System (1).png'
import giftcardimg from '../../assets/Rectangle 27159.png'
import Footer from '../../Components/Footer/Footer'

const HomeDashboard = () => {
  const [images, setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [aboutUs, setAboutUs] = useState([])
  const [stories, setStories] = useState([])
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)

  const sliderHeight = 400 // Fixed height for Stories slider

  const getDashboardImages = async () => {
    try {
      const { data } = await ApiService.post('/getAllDashboardImages')
      if (data.status && data.images) {
        setImages(data.images)
      } else {
        console.log('No images found')
      }
    } catch (error) {
      console.log('Error fetching images:', error)
    }
  }

  const getAboutUs = async () => {
    try {
      const { data } = await ApiService.get('/getAboutUs')
      if (data.status && data.aboutUsList) {
        setAboutUs(data.aboutUsList)
        console.log('about us data', data.aboutUsList)
      } else {
        console.log('No About Us data found')
      }
    } catch (error) {
      console.log('Error fetching About Us data:', error)
    }
  }

  const getAllStories = async () => {
    try {
      const { data } = await ApiService.post('/getAllStories')
      if (data.status && data.result) {
        setStories(data.result)
        console.log('stories data', data.result)
      } else {
        console.log('No stories found')
      }
    } catch (error) {
      console.log('Error fetching stories:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getDashboardImages()
    getAboutUs()
    getAllStories()
  }, [])

  useEffect(() => {
    if (images.length === 0) return
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images])

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % images.length)
  }

  // Stories slideshow
  useEffect(() => {
    if (stories.length === 0) return
    const interval = setInterval(() => {
      setCurrentStoryIndex(prev => (prev + 1) % stories.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stories])

  const currentStory = stories[currentStoryIndex]

  return (
    <div className='w-full'>
      {/* Dashboard Image Slider */}
      <div className='w-full relative overflow-hidden h-[50vh] sm:h-[50vh] md:h-[90vh]'>
        {images.length > 0 ? (
          <img
            src={`${ImagePath}${images[currentIndex].image[0]}`}
            alt={`Slide ${currentIndex + 1}`}
            className='w-full h-full object-fill transition-all duration-700'
          />
        ) : (
          <p className='text-center text-lg mt-[25vh] sm:mt-[35vh] md:mt-[40vh]'>
            Loading images...
          </p>
        )}

        {/* Slider Dots */}
        <div className='absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2'>
          {images.map((_, index) => (
            <span
              key={index}
              className={`rounded-full cursor-pointer transition-all duration-300 
          ${index === currentIndex ? 'bg-white' : 'bg-white/50'}
          w-2 h-2 sm:w-3 sm:h-3 md:w-3 md:h-3
        `}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className='py-6 md:py-14 px-6'>
        <div className='container mx-auto flex flex-col md:flex-row items-center gap-10'>
          {/* Left Side: Text */}
          <div className='md:w-1/2 px-4 md:px-0'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-purple-950'>
              About Razmatazz
            </h1>

            <p className='text-base md:text-lg text-gray-800 leading-normal text-justify'>
              {aboutUs.length > 0 ? aboutUs[0].description : 'Loading...'}
            </p>
          </div>

          <div className='md:w-1/2'>
            <img
              src={
                aboutUs.length > 0 && aboutUs[0].image.length > 0
                  ? `${ImagePath}${aboutUs[0].image[0]}`
                  : ''
              }
              alt='About Razmatazz'
              className='w-full h-auto rounded-lg shadow-lg object-fill'
            />
          </div>
        </div>
      </div>

      {/* Stories Section */}
      <div className='py-14 pb-8 px-6 bg-black'>
        <div className='container mx-auto flex flex-col md:flex-row gap-10'>
          {stories.length > 0 && currentStory ? (
            <>
              {/* Left: Description */}
              <div className='md:w-1/2 px-4 md:px-0'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-purple-500'>
                  Stories
                </h1>
                <p className='text-base md:text-lg text-white leading-normal text-justify'>
                  {currentStory.description}
                </p>
              </div>

              {/* Right: Image */}
              {currentStory.story_images?.length > 0 && (
                <div className='md:w-1/2'>
                  <img
                    src={`${ImagePath}${currentStory.story_images[0]}`}
                    alt={currentStory.name}
                    className='w-full h-[250px] md:h-[350px] object-fill rounded-lg'
                  />
                </div>
              )}
            </>
          ) : (
            <p className='text-white text-center'>Loading stories...</p>
          )}
        </div>

        {/* Dots for slideshow */}
        {stories.length > 1 && (
          <div className='flex justify-center mt-2 space-x-2'>
            {stories.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentStoryIndex ? 'bg-purple-500' : 'bg-white/50'
                }`}
                onClick={() => setCurrentStoryIndex(index)}
              ></span>
            ))}
          </div>
        )}
      </div>

      <div className='w-full hidden sm:block'>
        <img
          src={giftcardimg}
          alt='Gift Card'
          className='w-full h-[300px] object-fill'
        />
      </div>
      <Footer />
    </div>
  )
}

export default HomeDashboard
