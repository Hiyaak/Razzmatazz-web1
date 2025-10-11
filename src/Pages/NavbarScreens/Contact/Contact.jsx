import { useEffect, useState } from 'react'
import footerImg from '../../../assets/baner1.png'
import ApiService from '../../../Services/Apiservice'
import Footer from '../../../Components/Footer/Footer'

const Contact = () => {
  const [contact, setContact] = useState([])

  const getContacts = async () => {
    try {
      const { data } = await ApiService.get('getAllContactUs')
      if (data.status) {
        setContact(data.contactUsList)
        console.log('contact', data.contactUsList)
      }
    } catch (error) {
      console.log('Error fetching contact:', error)
    }
  }

  useEffect(() => {
    getContacts()
  }, [])

  return (
    <div className='w-full bg-gray-100 min-h-screen'>
      {/* Main Content */}
      <div className='flex flex-col md:flex-row p-6 md:p-12 gap-8'>
        {/* Left - Image */}
        <div className='md:w-1/2 flex justify-center items-start'>
          <img
            src={footerImg}
            alt='Contact'
            className='w-full max-w-md rounded-lg object-cover'
          />
        </div>

        {/* Right - Contact Info */}
        <div className='md:w-1/2 flex flex-col justify-center text-gray-800 space-y-6'>
          <h2 className='text-3xl font-bold mb-4'>Contact Us</h2>

          {contact.length > 0 ? (
            contact.map(item => (
              <div key={item._id} className='space-y-4'>
                <div>
                  <h3 className='font-semibold'>Phone:</h3>
                  <p className='text-lg'>{item.phone}</p>
                </div>

                <div>
                  <h3 className='font-semibold'>Email:</h3>
                  <p className='text-lg'>{item.email}</p>
                </div>

                <div>
                  <h3 className='font-semibold'>Address:</h3>
                  <p className='text-lg'>{item.address}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading contact information...</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact
