import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'

function LeftNavbar() {
  return (
    <div className="nav-menu">
      <ul className="nav-menu-items">
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className="nav-text">
              <Link to={`/tech/${item.path}`}>
                {item.icon}
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LeftNavbar
