import { useNavigate } from 'react-router-dom'
import logo from '../../assets/razzmatazz-2-2.svg'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const NavBar = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Concept', path: '/concept' },
    { label: 'Story', path: '/story' },
    { label: 'Gift Card', path: '/gift-card' },
    { label: 'Private Events', path: '/events' },
    { label: 'Career', path: '/career' },
    { label: 'Contact', path: '/contact' }
  ]

  return (
    <nav className='w-full bg-white'>
      {/* Top Navbar */}
      <div className='h-[10vh] container mx-auto flex items-center justify-between px-6'>
        {/* Left Menu - Desktop */}
        <ul className='hidden md:flex space-x-8 order-1'>
          {navItems.slice(0, 3).map(item => (
            <li
              key={item.label}
              className='font-bold text-black cursor-pointer hover:underline text-lg'
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Logo - Center */}
        <div
          className='order-2 flex-shrink-0 cursor-pointer'
          onClick={() => navigate('/')}
        >
          <img src={logo} alt='Logo' className='w-32 md:w-56 lg:w-60 mx-auto' />
        </div>

        {/* Right Menu - Desktop */}
        <ul className='hidden md:flex space-x-8 order-3'>
          {navItems.slice(3).map(item => (
            <li
              key={item.label}
              className='font-bold text-black cursor-pointer hover:underline text-lg'
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Hamburger - Mobile (Right) */}
        <div className='md:hidden order-3'>
          {isOpen ? (
            <FiX
              className='w-7 h-7 cursor-pointer'
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className='w-7 h-7 cursor-pointer'
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className='md:hidden bg-white border-t border-gray-200'>
          <ul className='flex flex-col px-6 py-4 space-y-4 text-center font-semibold'>
            {navItems.map(item => (
              <li
                key={item.label}
                className='cursor-pointer text-gray-600 hover:text-black transition'
                onClick={() => {
                  navigate(item.path)
                  setIsOpen(false) // close menu after click
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default NavBar
