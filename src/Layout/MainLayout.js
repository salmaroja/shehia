import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavbar from '../component/SideNavbar';

function MainLayout() {
  return (
    <div>
      <SideNavbar/>

      <Outlet/>
    </div>
  )
}

export default MainLayout;