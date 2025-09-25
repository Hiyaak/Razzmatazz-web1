import logo from '../../assets/razzmatazz-2-2.svg'

const NavBar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-white h-[10vh]'>
      <div className='container mx-auto h-full flex items-center justify-between px-6'>
        {/* Left Menu */}
        <ul className='hidden md:flex space-x-8'>
          <li className='font-bold text-black cursor-pointer hover:underline text-lg'>
            Concept
          </li>
          <li className='font-bold text-black cursor-pointer hover:underline text-lg'>
            Story
          </li>
          <li className='font-bold text-black cursor-pointer hover:underline text-lg'>
            Gift Card
          </li>
        </ul>

        {/* Logo (center) */}
        <div className='flex-shrink-0'>
          <img src={logo} alt='Logo' className='w-3/5 mx-auto' />
        </div>

        {/* Right Menu */}
        <ul className='hidden md:flex space-x-8'>
          <li className='font-bold text-black cursor-pointer hover:underline text-lg'>
            Private Events
          </li>
          <li className='font-bold text-black cursor-pointer hover:underline text-lg'>
            Career
          </li>
          <li className='font-bold text-black cursor-pointer hover:underline text-lg'>
            Contact
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button className='text-black focus:outline-none text-2xl'>☰</button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
