import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Header = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/">
          <h1>LegaDoc</h1>
        </Link>
        <nav>
          {user ? (
            <>
              <Link to="/dashboard">
                <button className="btn btn-outline">Dashboard</button>
              </Link>
              <button className="btn btn-primary" onClick={handleLogout}>
                Logout ({user.username})
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-outline">Login</button>
              </Link>
              <Link to="/register">
                <button className="btn btn-primary">Register</button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header