import { useNavigate, useLocation } from 'react-router-dom'
import ShareIcon from '../assets/svg/shareIcon.svg'
import ExploreIcon from '../assets/svg/exploreIcon.svg'
import PersonOutlineIcon from '../assets/svg/personOutlineIcon.svg'

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true
    }
  }
//the main component alongside map, due to the fact it has access to all routes
  return (
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className='navbarListItems'>
          <li className='navbarListItem' onClick={() => navigate('/explore')}>
            <ExploreIcon
              fill={pathMatchRoute('/explore') ? '#ffffff' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p
              className={
                pathMatchRoute('/explore')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Explore
            </p>
          </li>
          <li className='navbarListItem' onClick={() => navigate('/chat')}>
            <ShareIcon
              fill={pathMatchRoute('/chat') ? '#ffffff' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p
              className={
                pathMatchRoute('/chat')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Chat
            </p>
          </li>
          <li className='navbarListItem' onClick={() => navigate('/profile')}>
            <PersonOutlineIcon
              fill={pathMatchRoute('/profile') ? '#ffffff' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p
              className={
                pathMatchRoute('/profile')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Navbar