import React, { useEffect, useState } from 'react'
import ApiService, { ImagePath } from '../../../Services/Apiservice'
import grid from '../../../assets/black-grid.avif'
import Footer from '../../../Components/Footer/Footer'
import { useNavigate } from 'react-router-dom'

const Concept = () => {
  const [images, setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [categories, setCategories] = useState([])
  const [brands, setBrands] = useState([])
  const [originalBrands, setOriginalBrands] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const navigate = useNavigate()

  const getConceptImages = async () => {
    try {
      const { data } = await ApiService.post('/getAllDynamicConceptsImages')
      if (data.status && data.images) {
        setImages(data.images)
      } else {
        console.log('No images found')
      }
    } catch (error) {
      console.log('Error fetching images:', error)
    }
  }

  const handleCategoryClick = categoryId => {
    setSelectedCategory(categoryId)
  }

  const getCategories = async () => {
    try {
      const { data } = await ApiService.post('getAllCategory')
      if (data.status) {
        const updatedCategories = [
          { _id: 'all', categoryName: 'All' }, // add All option
          ...data.result
        ]
        setCategories(updatedCategories)
      }
    } catch (error) {
      console.log('Error in getCategories:', error)
    }
  }

  const getBrands = async () => {
    try {
      const { data } = await ApiService.post('getAllBrands')
      if (data.status) {
        setBrands(data.result)
        setOriginalBrands(data.result)
      }
    } catch (error) {
      console.log('Error in brands:', error)
    }
  }

  useEffect(() => {
    getConceptImages()
    getCategories()
    getBrands()
  }, [])

  useEffect(() => {
    if (images.length === 0) return
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images])

  const handleSearch = event => {
    const searchTerm = event.target.value.toLowerCase()
    if (searchTerm) {
      setBrands(
        originalBrands.filter(brand =>
          brand.brandName.toLowerCase().includes(searchTerm)
        )
      )
    } else {
      setBrands(originalBrands)
    }
  }

  // Filtered brands by category
  const filteredBrands =
    selectedCategory === 'all'
      ? brands
      : brands.filter(brand => brand.categoryId === selectedCategory)

  const handleImgClick = brand => {
    navigate('/brand', { state: brand })
  }

  return (
    <div className='w-full'>
      {/* Concept Slider */}
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
            />
          ))}
        </div>
      </div>

      {/* Concept Title */}
      <span className='flex items-center justify-center py-3 text-3xl sm:text-4xl md:text-[45px] border-b border-black bg-[#f1f1ec] font-semibold'>
        Concepts
      </span>

      {/* Categories + Search + Grid */}
      <div className='flex items-center px-5 md:px-10 py-3 md:py-5 bg-[#f1f1ec] relative'>
        {/* Search Bar - hidden on mobile */}
        <input
          type='text'
          className='hidden md:block w-[250px] px-4 py-2 text-base border border-gray-300 rounded-full outline-none transition-all duration-300 focus:border-blue-500 focus:shadow-md placeholder:italic placeholder:text-gray-400'
          placeholder='Search'
          onChange={handleSearch}
        />

        {/* Categories */}
        <div
          className={`flex flex-wrap items-center gap-2 justify-center
      md:absolute md:left-1/2 md:transform md:-translate-x-1/2
      mt-2 md:mt-0
    `}
        >
          {categories.map(category => (
            <div
              key={category._id}
              onClick={() => handleCategoryClick(category._id)}
              className={`cursor-pointer transition-all duration-200 rounded-md px-2 font-bold
          text-sm sm:text-base md:text-lg
          ${
            category._id === 'all'
              ? 'text-black'
              : selectedCategory === category._id
              ? 'text-black'
              : 'text-gray-500'
          } hover:text-black text-center`}
            >
              {category.categoryName}
            </div>
          ))}
        </div>

        {/* Grid Icon - hidden on mobile */}
        <div
          className='hidden md:flex items-center justify-center cursor-pointer px-10 ml-auto'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={grid} alt='grid' className='w-6' />
        </div>
      </div>

      {/* Brands Grid */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center items-center bg-[#f1f1ec] py-3 px-5 md:px-10'>
        {filteredBrands.map(brand => (
          <div
            className='text-center cursor-pointer overflow-hidden w-full max-w-[300px] font-bold'
            key={brand._id}
          >
            <img
              src={`${ImagePath}${brand.brand_img[0]}`}
              alt={brand.brandName}
              onClick={() => handleImgClick(brand)}
              className='w-full h-[180px] mb-2 object-fill rounded-md transition-transform duration-300 hover:scale-105'
            />
            <h5 className='font-bold text-lg md:text-xl'>{brand.brandName}</h5>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default Concept
