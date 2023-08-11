// Write your JS code here
import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    checkResponse: false,
  }

  onSubmittingForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    if (username === '') {
      this.setState({checkResponse: true})
      return
    }

    if (password === '') {
      this.setState({checkResponse: true})
      return
    }

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      this.onSuccess()
      this.setState({checkResponse: false})
    } else {
      this.setState({checkResponse: true})
    }
  }

  onSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitingUserName = event => {
    this.setState({username: event.target.value})
  }

  onSubmitingPassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserName = () => (
    <>
      <label className="label-el" htmlFor="userName">
        USERNAME
      </label>
      <input
        type="text"
        onChange={this.onSubmitingUserName}
        placeholder="Username"
        id="userName"
        className="userName-inp"
      />
    </>
  )

  renderPassword = () => (
    <>
      <label className="label-el" htmlFor="password">
        PASSWORD
      </label>
      <input
        type="password"
        onChange={this.onSubmitingPassword}
        placeholder="Password"
        id="password"
        className="userName-inp"
      />
    </>
  )

  render() {
    const {checkResponse} = this.state

    return (
      <div className="form-bg-container">
        <img
          className="login-image"
          alt="website login"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        />
        <div className="inputFormContainer">
          <img
            className="form-container-img"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
          />
          <form onSubmit={this.onSubmittingForm} className="inp-form-container">
            <div className="userName-container">{this.renderUserName()}</div>
            <div className="userName-container">{this.renderPassword()}</div>
            <button type="submit" className="button-el">
              Login
            </button>
            {checkResponse && (
              <p className="error-para">*Username and Password didn't match</p>
            )}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
