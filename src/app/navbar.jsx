// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h3>React 18, Redux and React Routerv6 Starter</h3>
        <div className="nav-content">
          <div className="nav-links">
            <Link to="/">Posts</Link>
          </div>
        </div>
      </section>
    </nav>
  )
}