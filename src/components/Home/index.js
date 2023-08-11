// Write your JS code here
import './index.css'
import Header from '../Header'

const Home = () => {
  console.log('')
  return (
    <div className="home-bg-container">
      <Header />
      <div className="content-container">
        <div className="content-card-container">
          <h1 className="content-header">Clothes That Get You Noticed</h1>
          <p className="content-para">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time.Clothes has always been a marker of the era and
            we are in a revolution. Your fashion makes you been seen and heard
            that way you are. So, celebrate the seasons new and exciting fashion
            in your own way.
          </p>
          <button className="content-btn-el" type="button">
            Shop Now
          </button>
        </div>
        <img
          className="content-img"
          alt="clothes that get you noticed"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        />
      </div>
    </div>
  )
}

export default Home
