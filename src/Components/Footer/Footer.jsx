const Footer = () => {
  return (
    <div className='w-full bg-black'>
      {/* Services Section */}
      <div className='py-8'>
        <b className='text-purple-700 text-[28px] hidden md:block pl-[190px]'>
          Service
        </b>
        <div className='flex flex-col md:flex-row md:items-center md:justify-around gap-6'>
          {/* Info Section */}
          <div className='hidden md:flex flex-col text-white text-base gap-2'>
            <p className='cursor-pointer hover:underline'>Cities</p>
            <p className='cursor-pointer hover:underline'>Our Story</p>
            <p className='cursor-pointer hover:underline'>Contact</p>
          </div>

          {/* Extra Section */}
          <div className='hidden md:flex flex-col text-white text-base gap-2'>
            <p className='cursor-pointer hover:underline'>Careers</p>
            <p className='cursor-pointer hover:underline'>Private Events</p>
            <p className='cursor-pointer hover:underline'>Gift Cards</p>
          </div>

          {/* Subscription Form */}
          <form className='w-full md:w-[600px] flex flex-col gap-3 px-4 md:px-0'>
            <div className='flex flex-col gap-4 text-white'>
              <b className='text-2xl'>
                <p>Stay Informed</p>
              </b>
              <p className='text-sm'>Sign Up</p>
            </div>

            <div className='flex flex-col gap-3'>
              {/* Name fields */}
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

              {/* Email field */}
              <input
                className='w-full px-2 py-2 text-sm border border-white rounded text-white bg-black focus:border-[#440064] focus:shadow-[0_0_4px_#440064] outline-none'
                placeholder='Email'
                type='email'
              />
            </div>

            {/* Submit button */}
            <button className='mt-2 px-5 py-2 bg-[#440064] text-white border border-white text-base cursor-pointer hover:bg-[#2e003f] hover:border-white'>
              <span className='button-label'>Subscribe</span>
            </button>
          </form>
        </div>
      </div>

      {/* Divider & Terms */}
      <div className='w-full bg-black'>
        <div className='h-px bg-white w-full' />
        <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6 px-5 sm:px-12 py-6 text-white text-base'>
          <p className='cursor-pointer hover:underline'>Privacy Policy</p>
          <p className='cursor-pointer hover:underline'>Terms of Service</p>
          <p className='cursor-pointer hover:underline'>Cookie Settings</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
