import { useNavigate } from 'react-router-dom';
import logo from '../../assets/razzmatazz-2-2.svg';
import { FiMenu, FiX } from 'react-icons/fi';

const NavBar = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: 'Concept', path: '/concept' },
    { label: 'Story', path: '/story' },
    { label: 'Gift Card', path: '/gift-card' },
    { label: 'Private Events', path: '/events' },
    { label: 'Career', path: '/career' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="w-full bg-white">
      {/* Top Navbar */}
      <div className="h-[10vh] container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div
          className="order-1 md:order-2 flex-shrink-0 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-32 md:w-56 lg:w-60 mx-0 md:mx-auto"
          />
        </div>

        {/* Left Menu - Desktop */}
        <ul className="hidden md:flex space-x-8 order-1">
          {navItems.slice(0, 3).map((item) => (
            <li
              key={item.label}
              className="font-bold text-black cursor-pointer hover:underline text-lg"
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Right Menu - Desktop */}
        <ul className="hidden md:flex space-x-8 order-3">
          {navItems.slice(3).map((item) => (
            <li
              key={item.label}
              className="font-bold text-black cursor-pointer hover:underline text-lg"
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Slider below navbar (Mobile only) */}
      <div className="md:hidden bg-white border-t border-gray-200 overflow-x-auto whitespace-nowrap no-scrollbar">
        <ul className="flex space-x-6 px-4 py-3 text-base font-semibold">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="cursor-pointer text-gray-600 hover:text-black transition"
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
