import { useNavigate } from 'react-router-dom'
import footer_img from '../../../src/assets/baner1.png'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full bg-black'>
      <div className='flex flex-col md:flex-row md:items-start md:justify-between md:px-[100px] py-8 items-center text-center md:text-left'>
        {/* Left - Services Section */}
        <div className='text-white'>
          <b className='text-purple-700 text-[28px] block mb-6'>Service</b>

          <div className='flex flex-col md:flex-row md:gap-16 gap-6 items-center md:items-start'>
            {/* Info Section */}
            <div className='flex flex-col text-base gap-2'>
              <p
                className='cursor-pointer hover:underline'
                onClick={() => navigate('/concept')}
              >
                Concept
              </p>
              <p
                className='cursor-pointer hover:underline'
                onClick={() => navigate('/story')}
              >
                Story
              </p>
              <p
                className='cursor-pointer hover:underline'
                onClick={() => navigate('/contact')}
              >
                Contact
              </p>
            </div>

            {/* Extra Section */}
            <div className='flex flex-col text-base gap-2'>
              <p className='cursor-pointer hover:underline'>Private Events</p>
              <p className='cursor-pointer hover:underline'>Careers</p>
              <p className='cursor-pointer hover:underline'>Gift Card</p>
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div className='mt-8 md:mt-0 md:w-[40%] flex justify-center px-6 md:px-0'>
          <img
            src={footer_img}
            alt='Footer'
            className='w-full max-w-[400px] rounded-md object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default Footer

{
  /* <form className='w-full md:w-[600px] flex flex-col gap-3 px-4 md:px-0'>
            <div className='flex flex-col gap-4 text-white'>
              <b className='text-2xl'>
                <p>Stay Informed</p>
              </b>
              <p className='text-sm'>Sign Up</p>
            </div>

            <div className='flex flex-col gap-3'>
             
              <div className='flex flex-col sm:flex-row gap-3'>
                <input
                  className='flex-1 px-2 py-2 text-sm border border-white rounded text-white bg-black focus:border-[#440064] focus:shadow-[0_0_4px_#440064] outline-none'
                  placeholder='First Name'
                  type='text'
                />
                <input
                  className='flex-1 px-2 py-2 text-sm border border-white rounded text-white bg-black focus:border-[#440064] focus:shadow-[0_0_4px_#440064] outline-none'
                  placeholder='Last Name'
                  type='text'
                />
              </div>

           
              <input
                className='w-full px-2 py-2 text-sm border border-white rounded text-white bg-black focus:border-[#440064] focus:shadow-[0_0_4px_#440064] outline-none'
                placeholder='Email'
                type='email'
              />
            </div>

           
            <button className='mt-2 px-5 py-2 bg-[#440064] text-white border border-white text-base cursor-pointer hover:bg-[#2e003f] hover:border-white'>
              <span className='button-label'>Subscribe</span>
            </button>
          </form> */
}
{
  /* Divider & Terms */
}
{
  /* <div className='w-full bg-black'>
        <div className='h-px bg-white w-full' />
        <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6 px-5 sm:px-12 py-6 text-white text-base'>
          <p className='cursor-pointer hover:underline'>Privacy Policy</p>
          <p className='cursor-pointer hover:underline'>Terms of Service</p>
          <p className='cursor-pointer hover:underline'>Cookie Settings</p>
        </div>
      </div> */
}
