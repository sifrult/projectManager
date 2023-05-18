import { Link } from 'react-router-dom';
import { useLogout } from '../utils/useLogout';
import { useAuthContext } from '../utils/useAuthContext';

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <nav>
          {user && (
            <div>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li>Projects</li>
                <li>Terminology</li>
                <li>Favorites</li>
                <li><button onClick={handleClick}>Logout</button></li>
              </ul>
            </div>
          )}
          {!user && (
            <div>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li>Projects</li>
                <li>Terminology</li>
                <li><Link to='/Login'>Login</Link></li>
                <li><Link to='/signup'>Sign Up</Link> </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
