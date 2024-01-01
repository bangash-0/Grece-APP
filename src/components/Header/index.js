import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';

const navigations = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
]

const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Grace</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {
            navigations.map((navigation) => {
              return (
                  <Link to={navigation.path} className="mr-5 hover:text-gray-900">{navigation.name}</Link>
              )
            })
          }
        </nav>

        <div className="flex items-center space-x-4 space-y-1">
          <Link to={"/"} className="text-xl">
            <FontAwesomeIcon icon={faUser}/>
          </Link>
          <Link to={"/"} className="text-xl">
            <FontAwesomeIcon icon={faShoppingCart}/>
          </Link>
          <Link to={"/"} className="text-xl">
            <FontAwesomeIcon icon={faBars}/>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header