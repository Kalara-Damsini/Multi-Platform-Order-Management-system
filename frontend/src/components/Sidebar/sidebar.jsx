import React from 'react'
import './sidebar.css'

const sidebar = () => {
  return (
    <div>
      <div className='side-with-container'>
        <div className='side-bar'>
            <ul>
                <li>Dashboard</li>
                <li>Orders</li>
                <li>Products</li>
                <li>Analytics</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default sidebar


