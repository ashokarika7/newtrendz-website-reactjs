// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-bg-container">
    <img
      className="nav-img"
      alt="website logo"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
    />
    <ul className="nav-ul-container">
      <li className="nav-route-el">Home</li>
      <li className="nav-route-el">Products</li>
      <li className="nav-route-el">Cart</li>
      <button className="nav-btn-el" type="button">
        Logout
      </button>
    </ul>
  </nav>
)

export default Header
